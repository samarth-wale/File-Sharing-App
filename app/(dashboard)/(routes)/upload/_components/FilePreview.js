import React from 'react';
import { Image, X } from 'lucide-react';

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center gap-4 justify-between mt-5 border rounded-md p-4 border-blue-200 w-full max-w-lg'>
        <div className='flex items-center'>
          <Image src='/file.png' width={50} height={50} alt='file' />
          <div className='ml-4'>
            <h2>{file.name}</h2>
            <h2 className='text-[12px] text-gray-400'>{file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB</h2>
          </div>
        </div>
        <X className='text-red-500 cursor-pointer'onClick={()=> removeFile()} />
      </div>
    </div>
  );
};

export default FilePreview;
