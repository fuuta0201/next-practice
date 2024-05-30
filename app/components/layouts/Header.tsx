import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full h-[60px] bg-gray-100 fixed z-10 flex justify-center px-14'>
      <div className='w-[1080px] h-full flex items-center justify-between'>
        <div className='h-full flex items-center gap-x-5'>
          <Image src={"/images/logo.png"} alt='' width={50} height={50} className='rounded-full' />
          <p className='text-xl font-bold'>Futa Sato's Portfolio</p>
        </div>
        <div className='font-bold flex gap-x-6'>
          <Link href={"#about"} className='c-text-link'>About</Link>
          <Link href={"#works"} className='c-text-link'>Works</Link>
          <Link href={"#skills"} className='c-text-link'>Skills</Link>
        </div>
      </div>
    </header>
  )
}

export default Header