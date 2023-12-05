import Image from 'next/image'
import React from 'react'

export default function Evento({id, titulo, children}) {
  return (
    <div className='w-[300px] h-[300px] flex flex-col shadow-xl border border-gray-200'>
      <div className='w-full h-1/2 flex'>
        <Image src={'/assets/visionbg.png'} alt='AboutUsImg' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={80}/>
      </div>
      <div className='w-full h-1/2 flex flex-col p-3 justify-between'>
        <h1 className='font-Poppins text-base font-semibold'>
          {titulo}
        </h1>
        <p className='font-Poppins text-xs font-light'>
          {children}
        </p>
        <div className='w-full flex justify-end items-center gap-1'>
          <a className='font-Poppins text-xs font-semibold' href={`/galeria-eventos/evento/${id}`}>
            Conoce Más
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 320 512"><path fill="#000000" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
      </div>
    </div>
  )
}
