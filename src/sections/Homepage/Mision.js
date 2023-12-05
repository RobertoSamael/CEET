import Image from 'next/image'
import React from 'react'

export default function Mision() {
  return (
    <section className='w-full flex bg-mision-bg bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-50 flex flex-col md:flex-row py-20 px-5 gap-5'>

        <div className='w-full flex flex-col items-center justify-center gap-5'>
          <h2 className='font-Poppins font-extrabold text-4xl md:text-6xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'>
            Nuestra Misión, Visión y Valores.
          </h2>

          <p className='font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
            Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
          </p>

          <a href='#' className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm shadow-[5px_5px_0_rgba(0,0,0,0.20)]'>
            <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
          </a>
        </div>
        <div className='w-full flex justify-center items-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'>
          <Image src={'/assets/LOGO2.png'} alt='Logo2' width={350} height={350} quality={100}/>
        </div>
      </div>
    </section>
  )
}
