import React, { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, ChevronUp } from 'react-feather'

function Collase({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (desc) {
      setIsOpen(true)
    }
    return () => {
    };
  }, []);
  return (
    <Menu>
      {({ open = isOpen }) => (
        <div className={`mt-4` + (open ? " rounded-xl bg-primary drop-shadow-primary-shadow" : "")}>
          <div className={`flex justify-between items-center border-b p-6` + (open ? " border-main-body" : "")}>
            <h2 className={'text-dark font-normal text-lg' + (open ? " text-white" : "")}>{title}</h2>
            <Menu.Button>{open ? <div onClick={() => setIsOpen(false)}> <ChevronUp className='text-white' /> </div> : <div onClick={() => setIsOpen(true)} ><ChevronDown /></div>}</Menu.Button>
          </div>
          {/* {isOpen && <div className='py-4 px-6 leading-8 font-light text-dark-light text-white'>{desc}</div>} */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items static>
              <Menu.Item>
                <div className='py-4 px-6 leading-8 font-light text-dark-light text-white'>{desc}</div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default Collase