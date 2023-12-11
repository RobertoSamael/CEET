import FotoGaleria from '@/components/FotoGaleria'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function Galeria() {
  return (
    <section className='w-full flex flex-col gap-7 bg-ceet7 relative'>
      <Image src={'/assets/torn_paper2.png'} alt='tornpaper' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} className='absolute top-0 -mt-5 md:-mt-14 z-[1]' quality={100}/>
      <div className='w-full flex flex-col justify-center mt-10 gap-2 px-10 pt-10'>
        <Title titulo={'CONOCE MÁS'}>
          Galería de Imágenes
        </Title>
        <p className='font-Poppins text-sm text-black'>
          Explora la interesante vida en nuestra escuela a través de nuestra galería.
        </p>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:flex-wrap gap-10 md:gap-20 px-10 pb-10 z-10'>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
        <FotoGaleria/>
      </div>
      <Image src={'/assets/torn_paper1.png'} alt='tornpaper' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} className='absolute bottom-0 -mb-5 md:-mb-14 z-[1]' quality={100}/>
    </section>
  )
}
