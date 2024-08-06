"use client"
import { Shield, Upload, File } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Newsreader } from 'next/font/google';

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5'>
      <div className="flex items-center gap-2 mb-4 border-b border-gray-300 pb-2"> 
        <Image src='/logo.svg' width={40} height={30} alt="Logo" />
        <span style={{ fontSize: '1.25rem', fontWeight: '600', fontStyle: 'italic', fontFamily: 'cursive', color: '#82DCF9ff' }}>ShareNet</span>
      </div>
      <div className='flex flex-col w-full'>
        {
          menuList.map((item, index) => (
            <button 
              key={item.id} 
              className={`flex items-center gap-2 p-2 hover:bg-gray-100 w-full text-left text-gray-500 ${activeIndex === index ? 'bg-blue-50 text-primary' : ''}`} 
              onClick={() => setActiveIndex(index)}
            >
              <item.icon className="w-6 h-6" />
              <h2 className="text-base font-medium">{item.name}</h2>
            </button>
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default SideNav;
