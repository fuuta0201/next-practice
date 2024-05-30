import React from 'react'

interface SectionTitle {
  title: string
}

const SectionTitle = ({title}: SectionTitle) => {
  return (
    <div className='w-full flex justify-center mb-12'>
      <h3 className='text-5xl font-bold'>{title}</h3>
    </div>
  )
}

export default SectionTitle