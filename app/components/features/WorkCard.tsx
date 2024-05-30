import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface WorkCardProps {
  url: string,
  imgPath: string,
  title: string,
  desc: string,
  tags: string[],
}

const WorkCard = ({url, imgPath, title, desc, tags}: WorkCardProps) => {
  return (
    <li className='w-[350px]'>
      <Link href={url} target='_blank' rel='nofollow noreferrer noopener' className='w-full c-image'>
        <figure className='h-[200px] mb-5'>
          <Image src={imgPath} alt='' width={350} height={200} className='w-full h-full'></Image>
        </figure>
        <p className='text-lg font-bold mb-2'>{title}</p>
        <p className='mb-2'>{desc}</p>
        <p>
          {tags.map((tag, index) => (
            <span key={index} className='pr-1'>#{tag}</span>
          ))}
        </p>
      </Link>
    </li>
  )
}

export default WorkCard