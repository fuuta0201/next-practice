import React from 'react'
import Image from 'next/image'

interface skill {
  name: string,
  star: number,
}

interface skillProps {
  skills: skill[]
}

const SkillCard = ({skills}: skillProps) => {
  return (
    <div className='w-full flex flex-wrap gap-7'>
      {skills.map((item, index) => (
        <div className='w-72 h-20 flex flex-col items-center justify-center gap-y-2 rounded-md c-skill-box' key={index}>
          <p className='text-xl font-bold'>{item.name}</p>
          <div className='flex'>
            {Array.from({ length: item.star }).map((_, starIndex) => (
              <Image src={'/images/icons/star-black.svg'} alt='' width={16} height={16} key={starIndex}></Image>
            ))}
            {Array.from({ length: 5 - item.star }).map((_, starIndex) => (
              <Image src={'/images/icons/star-grey.svg'} alt='' width={16} height={16} key={starIndex}></Image>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillCard