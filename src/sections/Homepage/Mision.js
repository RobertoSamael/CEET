"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Mision() {
  return (
    <section className='w-screen h-fit flex bg-mision-bg bg-center'>
      <div className='w-full h-full bg-ceet1 bg-opacity-80 flex flex-col md:flex-row py-20 px-5 gap-5'>

        <div className='md:w-3/5 w-full flex flex-col items-center justify-center gap-5'>
          <motion.h2 className='font-Poppins font-extrabold text-4xl md:text-6xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
              MISIÓN
          </motion.h2>
            <div className='w-full flex flex-wrap lg:flex-nowrap justify-center gap-5'>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>LA INTELIGENCIA RACIONAL:</strong>
                <li>Comprensión verbal</li>
                <li>Facilidad de palabra</li>
                <li>Razonamiento Matemático</li>
                <li>Visualización Espacial</li>
                <li>Memoria</li>
                <li>Atención</li>
                <li>Lógica</li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>LA INTELIGENCIA PRÁCTICA:</strong>
                <li>Socialización</li>
                <li>Manejo de Emociones</li>
                <li>Perseverancia</li>
                <li>Imaginación</li>
                <li>Autoestima</li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>EL AREA COGNITIVA:</strong>
                <li>
                  Elevando el rendimiento a través de la estimulación y en constante colaboración con los padres de familia para alcanzar los niveles máximos en el desarrollo integral del niño.
                </li>
              </ul>
            </div>
          <motion.h2 className='font-Poppins font-extrabold text-4xl md:text-6xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
              VISIÓN
          </motion.h2>
            <div className='w-full flex flex-wrap lg:flex-nowrap justify-center gap-5'>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>LA FORMACIÓN DEL CARÁCTER:</strong>
                <li>A través de los rincipios de acción, trato humano y orden ético (código de valores).</li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>EDUCAR EN NIVELES DE EXCELENCIA:</strong>
                <li>Mediante la estimulación, las multidisciplinar, los círculos constructivos, reforzando su atención y concentración.</li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>APLICACIÓN EN LA PRÁCTICA Y LA CREACIÓN:</strong>
                <li>
                  Aplicando la motivación, los conocimientos, la independencia gradual, la vivencia anticipada y el compromiso con las metas.
                </li>
              </ul>
            </div>
          <motion.h2 className='font-Poppins font-extrabold text-4xl md:text-6xl text-white text-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
              VALORES
          </motion.h2>
          <div className='w-full flex flex-wrap justify-center gap-5'>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>RESPETO:</strong>
                <li>
                  Tenemos un silenciosos respeto por nosotros mismos, por los niños y por todas las personas que nos rodean y tienen contacto con nuestro centro.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>INTEGRIDAD:</strong>
                <li>
                Que abraza los más altos estándares de honestidad y comportamiento ético y moral.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>EXCELENCIA:</strong>
                <li>
                Que se refleja en nuestra continua búsqueda por mejorar nuestros medios, para ser mejores en lo que ofrecemos.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>COHERENCIA:</strong>
                <li>
                Definimos nuestros proyectos máximos y trabajamos en función de ellos.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>COHERENCIA:</strong>
                <li>
                Definimos nuestros proyectos máximos y trabajamos en función de ellos.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>DISCIPLINA:</strong>
                <li>
                Establecemos claramente nuestras reglas, no evadimos responsabilidades.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>VISIÓN:</strong>
                <li>
                Establecemos a donde queremos ir ,tenemos la responsabilidad de lo que somos y de lo que queremos ser.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>COLABORACIÓN:</strong>
                <li>
                Contribuimos de manera personal y en equipo para servir y ser recompensados, damos para recibir.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>COMPROMISO:</strong>
                <li>
                Nos comprometemos al trabajo de excelencia para alcanzar nuestras metas y objetivos.
                </li>
              </ul>
              <ul className='w-[300px] font-Poppins text-center text-base text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.20)]'>
                <strong>ALEGRÍA:</strong>
                <li>
                No por las metas logradas, si no por el deleite de luchar por ellas.
                </li>
              </ul>
            </div>
          <motion.a href='/contacto' className='p-4 border border-white bg-white bg-opacity-20 backdrop-blur-sm shadow-[5px_5px_0_rgba(0,0,0,0.20)] hover:px-7 transition-all ease-in-out duration-300'
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}>
              <p className='text-white font-Poppins text-base font-light'>CONTÁCTANOS</p>
          </motion.a>
        </div>
        <motion.div className='md:w-2/5 w-full flex justify-center items-center drop-shadow-[8px_8px_0_rgba(0,0,0,0.20)]'
          initial={{scale: 0.9, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: 0.3, ease: 'easeInOut', delay: 0.5}}>
            <Image src={'/assets/LOGO2.png'} alt='Logo2' width={350} height={350} quality={100}/>
        </motion.div>
      </div>
    </section>
  )
}
