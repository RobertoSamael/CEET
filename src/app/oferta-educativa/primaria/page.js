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
            Primaria
          </Title>
          <p className='font-Poppins text-sm text-black'>
            Conoce nuestra sección Primaria
          </p>
        </div>
        <hr className='w-full h-1 bg-ceet5'/>

        <p className='font-Poppins font-light text-sm'>
          En la Sección Primaria: el enfoque educativo es integral y lo centramos en el desarrollo académico, social y emocional. 
          Promovemos el pensamiento crítico, la resolución de problemas a través de proyectos tanto en el Área de Español como en el Inglés. 
          Fomentamos la participación activa de los alumnos en su propio proceso de aprendizaje, desarrollando habilidades de investigación y autodirección. 
          Se enfatiza el desarrollo de valores y la responsabilidad social, preparando a los estudiantes para el futuro.
        </p>
        <ul className='font-Poppins font-light text-sm'>
          En nuestro Colegio ofrecemos diferentes actividades extracurriculares para un completo  
          desarrollo del alumno tanto dentro como fuera de las aulas.
          <br/>
          <br/>
          <li className='font-medium'>
            - MUSICA
          </li>
          <li className='font-medium'>
            - PINTURA
          </li>
          <li className='font-medium'>
            - EDUCACION
          </li>
          <li className='font-medium'>
            - EDUCACIÓN FÍSICA
          </li>
          <li className='font-medium'>
            - CLUB DE APOYO ACADEMICO (LECTOESCRITURA,  MATEMATICAS  E INGLES)
          </li>
          <li className='font-medium'>
            - AJEDREZ
          </li>
          <li className='font-medium'>
            - PORRISTAS
          </li>
          <li className='font-medium'>
            - BASTONERAS
          </li>
        </ul>
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
