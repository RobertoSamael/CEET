"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Mision() {
  return (
    <section className='w-full flex bg-mision-bg bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-50 flex flex-col md:flex-row py-20 px-5 gap-5'>

        <div className='w-full flex flex-col items-center justify-center gap-5'>
          <motion.h2 className='font-Poppins font-extrabold text-4xl md:text-6xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
              Nuestra Misión, Visión y Valores.
          </motion.h2>

          <motion.p className='font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut', delay: 0.3}}>
              Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
              <br/>
              <br/>
              Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
              <br/>
              <br/>
              Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.
          </motion.p>

          <motion.a href='/contacto' className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm shadow-[5px_5px_0_rgba(0,0,0,0.20)] hover:px-7 transition-all ease-in-out duration-300'
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}>
              <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
          </motion.a>
        </div>
        <motion.div className='w-full flex justify-center items-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
          initial={{scale: 0.9, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: 0.3, ease: 'easeInOut', delay: 0.5}}>
            <Image src={'/assets/LOGO2.png'} alt='Logo2' width={350} height={350} quality={100}/>
        </motion.div>
      </div>
    </section>
  )
}
