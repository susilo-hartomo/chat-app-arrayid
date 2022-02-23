import React from 'react'

export default function DataShow({ title, total, children }) {
  return (
    <div className='flex gap-9'>
      <div>{children}</div>
      <div>
        <p className='uppercase text-xs text-dark-light'>{title}</p>
        <h4 className='font-bold text-2xl text-dark'>{total}</h4>
      </div>
    </div>
  )
}
