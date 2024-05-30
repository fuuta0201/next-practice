"use client"
import React from 'react'
import Image from 'next/image'
import SectionTitle from '../common/SectionTitle'
import SkillCard from './SkillCard'

const Skills = () => {

  const front = [
    {name: "HTML", star: 4},{name: "css/scss", star: 4},{name: "javascript", star: 4},{name: "Vue3/Nuxt3", star: 4},
    {name: "Astro.js", star: 4},{name: "TypeScript", star: 1},{name: "WordPress(PHP)", star: 3},
  ];

  const back = [
    {name: "Python", star: 4}
  ];

  const dev = [
    {name: "Docker/Docker-compose", star: 3},{name: "git", star: 4},{name: "Linux", star: 3},
    {name: "gulp.js", star: 3},{name: "Vite.js", star: 3}
  ];

  return (
    <div className='w-full px-[50px] flex flex-col items-center mb-72'>
      <SectionTitle title="Skills" />
      <p className='mb-12 text-center'>実務や研究、個人開発で使用した経験のあるスキルを習熟度と共に掲載しています。</p>
      <div className='w-[1080px] py-16 mb-20'>
        <h3 className='text-3xl font-bold mb-10'>Front End</h3>
        <SkillCard skills={front} />
        <h3 className='text-3xl font-bold mb-10 pt-20'>Back End</h3>
        <SkillCard skills={back} />
        <h3 className='text-3xl font-bold mb-10 pt-20'>Deveropment</h3>
        <SkillCard skills={dev} />
      </div>
    </div>
  )
}

export default Skills