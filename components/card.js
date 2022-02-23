import Image from 'next/image'
import React from 'react'

function Card({ img, title, desc }) {
  return (
    <div className=' flex-1 text-center'>
      <div className=' drop-shadow-primary-shadow mt-8 mb-4'>
        <Image src={img} alt='image' height={196} />
      </div>
      <h4 className='text-lg text-dark pt-2'>{title}</h4>
      <p className='text-base text-dark-light p-4 leading-8'>{desc}</p>
    </div>
  )
}

export default Card