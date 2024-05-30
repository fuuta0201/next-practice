import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'
import WorkCard from './WorkCard'

const Works = () => {
  return (
    <div className='px-[50px] mb-72'>
      <SectionTitle title={"Works"} />
      <div className='w-full bg-gray-100 rounded-md shadow-md px-16 py-[100px]'>
        <ul className='flex gap-x-12 flex-wrap'>
          <WorkCard 
            url="https://freestyle-yanagiya.jp/"
            imgPath='/images/yanagiya.png'
            title='Freestyle 栁屋商会'
            desc='新潟県小千谷市に位置する自動車整備屋さんのWebサイトです'
            tags={["Astro.js", "Vue3", "TypeScript", "Netlify", "microCMS"]}
          />
          <WorkCard 
            url="/"
            imgPath='/images/portfoliosite.png'
            title="Futa Sato's Portfolio"
            desc='本サイト作成者のポートフォリオサイトです'
            tags={["Astro.js", "Netlify"]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Works