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
            Maternal
          </Title>
          <p className='font-Poppins text-sm text-black'>
            Conoce nuestra sección Maternal
          </p>
        </div>
        <hr className='w-full h-1 bg-ceet5'/>

        <p className='font-Poppins font-light text-sm'>
        La sección de Maternal comprende la edad de 10 meses a 2 años, 11 meses en la cual nuestro propósito es desarrollar al niño mediante la estimulación temprana en todos sus aspectos: 
        los sentidos, el juego, el pensamiento, el lenguaje, las emociones, los hábitos, adquisición de experiencias, etc. Mediante las actividades orientadas.
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
