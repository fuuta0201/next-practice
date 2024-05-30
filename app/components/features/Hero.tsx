import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='w-full h-dvh h-vh flex flex-col items-center justify-center gap-y-[100px]'>
      <h2 className='text-6xl font-bold'>Futa Sato's Portfolio Web Site</h2>
      <Link href={"#about"} className='flex items-center'>
        <p className='text-3xl font-bold'>View this site</p>
        <Image src={"/images/icons/chevron-down.svg"} width={40} height={40} alt='' />
      </Link>
    </section>
  )
}

export default Hero