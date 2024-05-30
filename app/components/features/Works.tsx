import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'

const Works = () => {
  return (
    <div className='px-[50px] mb-72'>
      <SectionTitle title={"Works"} />
      <div className='w-full bg-gray-100 rounded-md shadow-md px-16 py-[100px]'>
        <ul className='flex gap-x-12 flex-wrap'>
          <li className='w-[350px]'>
            <Link href={"https://freestyle-yanagiya.jp/"} target='_blank' rel='nofollow noreferrer noopener' className='w-full c-image'>
              <figure className='h-[200px] mb-5'>
                <Image src={"/images/yanagiya.png"} alt='' width={350} height={200} className='w-full h-full'></Image>
              </figure>
              <p className='text-lg font-bold mb-2'>Freestyle 栁屋商会</p>
              <p className='mb-2'>新潟県小千谷市に位置する自動車整備屋さんのWebサイトです</p>
              <p><span>Astro.js</span><span>Vue3</span><span>TypeScript</span><span>Netlify</span><span>microCMS</span></p>
            </Link>
          </li>
          <li className='w-[350px]'>
            <Link href={"/"} className='w-full c-image'>
              <figure className='h-[200px] mb-5'>
                <Image src={"/images/portfoliosite.png"} alt='' width={350} height={200} className='w-full h-full'></Image>
              </figure>
              <p className='text-lg font-bold mb-2'>Futa Sato's Portfolio</p>
              <p className='mb-2'>本サイト作成者のポートフォリオサイトです</p>
              <p><span>Astro.js</span><span>Netlify</span></p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Works