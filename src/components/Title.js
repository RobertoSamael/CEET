import React from 'react'

export default function Title({titulo, children}) {
  return (
    <div className='w-full flex flex-col gap-2'>
        <h1 className='font-Poppins text-ceet5 text-sm tracking-[.3em]'>
            {titulo}
        </h1>
        <h2 className='font-Poppins font-bold text-2xl md:text-4xl'>
            {children}
        </h2>
    </div>
  )
}
