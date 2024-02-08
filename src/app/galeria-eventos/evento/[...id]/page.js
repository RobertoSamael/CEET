import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function Page({params}) {

  console.log(params.id[0])
  //function get sanity
  
  return (
    <section className='w-full flex flex-col gap-4 bg-ceet7 relative'>

      <div className='w-full flex flex-col justify-center mt-10 md:mt-20 px-10 pt-10 gap-2'>
        <Title titulo={'EVENTOS'}>
          20 ANIVERSARIO Y REINADO 
        </Title>
      </div>

      <div className='w-full h-fit flex flex-col gap-2 px-10 pb-20'>
        <hr className='w-full h-1 bg-ceet5'/>
        <div className='w-full h-[500px] xl:h-[800px] flex'>
          <Image src={'/assets/visionbg.png'} alt='AboutUsImg' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={100}/>
        </div>
        <hr className='w-full h-1 bg-ceet5'/>
        <h3 className='font-Poppins font-semibold text-lg'>
          ¡Orgullosos de nuestros estudiantes!
        </h3>
        <p className='font-Poppins font-light text-sm'>
          El pasado 2 de Junio celebramos el 20 ANIVERSARIO de nuestro Colegio, el cual se realizó en 
          el Salón el Kiosco en el cual asistieron Padres de Familia, Alumnos, Exalumnos. Dentro del 
          marco de esta celebración se presentó el PROYECTO DE INGLE “PASEO DE LA FAMA” en el 
          cual los alumnos de Primaria Mayor personificaron a diferentes personalidades (POLITICOS, 
          ARTISTAS Y DEPORTISTAS) y dieron a conocer lo más destacado de su trayectoria.
        </p>
      </div>
      <Image src={'/assets/torn_paper1.png'} alt='tornpaper' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} className='absolute bottom-0 -mb-5 md:-mb-14 z-[1]' quality={100}/>
    </section>
  )
}
