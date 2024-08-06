import React from 'react'
import { AlignJustify } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
const TopHeader = () => {
  return (
    <div className='flex p-4 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden' />
      <div className="flex items-center gap-2 lg:hidden">
  <Image src='/logo.svg' width={40} height={30} alt="Logo" />
  <span style={{ fontSize: '1.25rem', fontWeight: '600', fontStyle: 'italic', fontFamily: 'cursive', color: '#82DCF9ff' }}>ShareNet</span>
    </div>
      <UserButton/>
    </div>
  )
}

export default TopHeader
