"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <section className='w-full h-screen bg-hero-bg bg-cover bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-50 flex flex-col items-center justify-center p-6 gap-4'>

        <motion.h2 className='font-Poppins font-extrabold text-5xl lg:text-8xl lg:w-[1200px] md:text-7xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
            LA MEJOR EDUCACIÓN PARA TU HIJO
        </motion.h2>

        <motion.p className='font-Poppins text-center text-base text-white md:w-[800px] drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]' 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut', delay: 0.3}}>
            En CEET, brindamos un ambiente enriquecedor e inclusivo donde los niños pueden aprender y crecer mientras desarrollan fluidez en dos idiomas.
        </motion.p>

        <motion.a href='/contacto' className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm shadow-[5px_5px_0_rgba(0,0,0,0.20)] hover:px-7 transition-all ease-in-out duration-300' 
          initial={{scale: 0.9, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}>
            <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
        </motion.a>
      </div>
    </section>
  )
}
