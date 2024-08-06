"use client";
import React, { useState } from 'react';
import UploadForm from './_components/UploadForm';
import ProgressBar from './_components/ProgressBar';
import { app } from '../../../../firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { getRandomString } from '../../../_utils/GenerateRandomString';

const Upload = () => {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);  // State to track upload status
  const [isUploadComplete, setIsUploadComplete] = useState(false);  // State to track if upload is complete
  const storage = getStorage(app);
  const db = getFirestore(app);

  const UploadFile = (file) => {
    setIsUploading(true);  // Set uploading state to true when upload starts
    setIsUploadComplete(false);  // Reset the upload complete state
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed', error);
        setIsUploading(false);  // Reset uploading state on error
      },
      () => {
        // Handle successful uploads on complete
        setIsUploadComplete(true);  // Set upload complete state
        setIsUploading(false);  // Reset uploading state on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL); // Corrected the call to saveInfo
        });
      }
    );
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = Date.now().toString();
    await setDoc(doc(db, "UploadedFile", docId), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      password: '',
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}${getRandomString()}`
    });
  };

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-2xl text-center m-5'>
        Start <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it
      </h2>
      <UploadForm uploadBtnClick={UploadFile} />
      {(isUploading || isUploadComplete) && (  // Conditionally render ProgressBar
        <div className="mt-6">
          <ProgressBar progress={progress} />
        </div>
      )}
    </div>
  );
};

export default Upload;
