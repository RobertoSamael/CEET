import FotoGaleria from '@/components/FotoGaleria'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className='w-full flex flex-col md:flex-row gap-5 bg-ceet7 relative'>

      <div className='w-full md:w-1/2 flex flex-col gap-4 p-10 pt-10 mt-10 md:mt-20'>
        <div className='w-full flex flex-col justify-center gap-2'>
          <Title titulo={'SECCIÓN'}>
            Preescolar
          </Title>
          <p className='font-Poppins text-sm text-black'>
            Conoce nuestra sección Preescolar
          </p>
        </div>
        <hr className='w-full h-1 bg-ceet5'/>

        <p className='font-Poppins font-light text-sm'>
        La sección de PREESCOLAR inicia a los 3 años cumplidos a Diciembre, enfocamos el aprendizaje a través del juego y la exploración, fomentando la curiosidad y la creatividad. 
        Se promueve la interacción social y el trabajo en equipo. La iniciación al Inglés progresivo, el razonamiento matemático y la lectoescritura comienza a temprana edad, 
        todo dentro de un entorno basado en Valores, afectuoso y estimulante que respeta la individualidad de cada niño. 
        También se fomenta la autonomía y la toma de decisiones para construir una base sólida para su futuro.
        </p>
        <a href='/contacto' className='w-fit p-4 bg-ceet1 hover:px-7 transition-all ease-in-out duration-300'>
          <p className='text-white font-Poppins text-sm font-semibold'>CONTÁCTANOS</p>
        </a>
      </div>
      
      <div className='w-full md:w-1/2 h-fit flex flex-wrap justify-center gap-5 p-10 pb-10 mt-10 md:mt-20 z-10'>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
      </div>
      <Image src={'/assets/torn_paper1.png'} alt='tornpaper' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} className='absolute bottom-0 -mb-5 md:-mb-14 z-[1]' quality={100}/>
    </section>
  )
}
