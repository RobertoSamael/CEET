import React from 'react'

export default function Title({titulo, children, align}) {
  return (
    <div className='w-full flex flex-col gap-2 z-10'>
        <h1 className={`font-Poppins text-ceet5 text-${align} text-sm tracking-[.3em]`}>
            {titulo}
        </h1>
        <h2 className={`font-Poppins font-bold text-${align} text-2xl md:text-4xl`}>
            {children}
        </h2>
    </div>
  )
}
