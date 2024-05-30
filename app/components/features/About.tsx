import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '../common/SectionTitle'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mb-72'>
      <SectionTitle title={"About me"} />
      <div className='flex flex-col items-center mb-12'>
        <Image src={'/images/logo.png'} alt='' width={80} height={80} className='rounded-full mb-5' />
        <p className='text-xl'>佐藤　楓太</p>
      </div>
      <div>
        <ul className='text-xl'>
          <li>
            <p>高専電子制御工学科を卒業後、専攻科に進学。主に制御工学、電気電子、情報通信工学を学んでいます。</p>
          </li>
          <li>
            <p>高専(本科、専攻科)ではPythonで機械学習（主に深層学習）を用いた研究を行っています。</p>
          </li>
          <li className='flex items-center pt-5'>
            <p>github</p>
            <Link href={'https://github.com/fuuta0201?tab=repositories'} className='c-text-link'>https://github.com/fuuta0201?tab=repositories</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About