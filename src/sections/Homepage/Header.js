import React from 'react'

export default function Header() {
  return (
    <section className='w-full h-screen bg-hero-bg bg-cover bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-50 flex flex-col items-center justify-center p-6 gap-4'>

        <h2 className='font-Poppins font-extrabold text-5xl lg:text-8xl lg:w-[1200px] md:text-7xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'>
          LA MEJOR EDUCACIÓN PARA TU HIJO
        </h2>

        <p className='font-Poppins text-center text-base text-white md:w-[800px] drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
        En CEET, brindamos un ambiente enriquecedor e inclusivo donde los niños pueden aprender y crecer mientras desarrollan fluidez en dos idiomas.
        </p>

        <a href='#' className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm shadow-[5px_5px_0_rgba(0,0,0,0.20)]'>
          <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
        </a>
      </div>
    </section>
  )
}
