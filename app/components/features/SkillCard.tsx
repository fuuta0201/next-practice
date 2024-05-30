"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface skill {
  name: string,
  star: number,
}

interface skillProps {
  skills: skill[]
}

const SkillCard = ({skills}: skillProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [skillDetail, setSkillDetail] = useState<skill | undefined>(undefined);

  const openModal = (name: string) => {
    const selected = skills.find(skill => skill.name == name);
    setIsOpen(true);
    setSkillDetail(selected);
    document.body.style.overflow = "hidden";
  }

  const closeModal = () => {
    setIsOpen(false);
    setSkillDetail(undefined);
    document.body.style.overflow = "";
  }

  return (
    <div className='w-full flex flex-wrap gap-7'>
      {skills.map((item, index) => (
        <div className='w-72 h-40 flex flex-col items-center justify-center gap-y-2 rounded-md c-skill-box' key={index}>
          <p className='text-xl font-bold'>{item.name}</p>
          <div className='flex'>
            {Array.from({ length: item.star }).map((_, starIndex) => (
              <Image src={'/images/icons/star-black.svg'} alt='' width={16} height={16} key={starIndex}></Image>
            ))}
            {Array.from({ length: 5 - item.star }).map((_, starIndex) => (
              <Image src={'/images/icons/star-grey.svg'} alt='' width={16} height={16} key={starIndex}></Image>
            ))}
          </div>
          <Button onClick={() => openModal(item.name)}>show detail</Button>
        </div>
      ))}
      {isOpen && skillDetail && (
        <div className='w-full h-dvh fixed top-0 left-0 z-20 flex justify-center items-center'>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>{skillDetail.name}</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={closeModal}>close</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

export default SkillCard