import React from 'react'
import { space } from 'tailwindcss/defaultTheme'

function Button({ type, size, icon, text, cbAction, onclick, children }) {
  return (
    <button
      onClick={onclick}
      className={"rounded-md font-medium" + (size == 'large' ? ' py-3 px-11' : ' py-2.5 px-6') + (type == 'primary' ? ' bg-primary text-white drop-shadow-primary-shadow' : ' text-primary bg-primary-light')}>
      <div className='flex'>
        <span>{text}</span>
        {children && <span className='ml-4'>{children}</span>}
      </div>
    </button>
  )
}

export default Button