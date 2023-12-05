import Image from 'next/image'
import React from 'react'

export default function Nav() {
  return (
    <div className='w-full h-[10vh] justify-center bg-ceet1 bg-opacity-70 fixed sm:flex hidden backdrop-blur-md z-50'>
      
        <div className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Inicio
            </p>
          </div>
        </div>

        <div className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Oferta Educativa
            </p>
          </div>
        </div>

        <div className='w-[100px] h-full flex justify-center items-center'>
          <Image src={'/assets/LOGO.png'} alt='Logo' width={80} height={80} quality={100}/>
        </div>

        <div className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Galería / Eventos
            </p>
          </div>
        </div>

        <div className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Contácto
            </p>
          </div>
        </div>

      </div>
  )
}
