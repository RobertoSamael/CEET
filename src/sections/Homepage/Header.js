import React from 'react'

export default function Header() {
  return (
    <section className='w-full h-[90vh] bg-hero-bg bg-cover bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-50 flex flex-col items-center justify-center p-6 gap-4'>

        <h2 className='font-Poppins font-extrabold text-5xl md:text-8xl text-white text-center'>
          LA MEJOR EDUCACIÓN PARA TU HIJO
        </h2>

        <p className='font-Poppins text-center text-base text-white'>
        En CEET, brindamos un ambiente enriquecedor e inclusivo donde los niños pueden aprender y crecer mientras desarrollan fluidez en dos idiomas.
        </p>

        <div className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm'>
          <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
        </div>
      </div>
    </section>
  )
}
