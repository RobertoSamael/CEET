import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <section className='w-full flex px-5 md:px-10'>
      {/* Frame que se desborda */}
      <div className='w-full flex flex-col lg:flex-row-reverse py-10 px-5 gap-10 -my-10 bg-white z-10 drop-shadow-2xl'>
        
        <div className='w-full flex flex-col gap-4'>

          <div className='w-full flex flex-col gap-2'>
          <Title titulo={'SOBRE NOSOTROS'}>
            Experimenta nuestra metodología de enseñanza única en CEET.
          </Title>
          <p className='font-Poppins text-base'>
          El colegio Ceet es un Colegio Bilingüe con 20 años al servicio de la educación en H.Matamoros 
          Tamaulipas donde brindamos una educación bilingüe progresiva que fomente la creatividad, 
          el pensamiento crítico y la comprensión cultural.
          </p>
          </div>

          <div className='w-full flex flex-col lg:flex-row gap-5'>
            <div className='w-full flex flex-col gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="70" width="80" viewBox="0 0 640 512"><path fill='#24324C' d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
              <p className='font-Poppins text-base font-bold'>
                Subtitulo 1
              </p>
              <p className='font-Poppins text-base'>
              Nuestro personal está totalmente capacitado y contamos con nuestros propios programas 
              educativos que al unirlos con los de la SET logramos un aprendizaje significativo. 
              </p>
            </div>
            <div className='w-full flex flex-col gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="80" viewBox="0 0 448 512"><path fill='#24324C' d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <p className='font-Poppins text-base font-bold'>
                Subtitulo 2
              </p>
              <p className='font-Poppins text-base'>
              Contamos con las diferentes secciones: MATERNAL, PREESCOLAR Y PRIMARIA. Además 
              brindamos el  servicio de comedor donde nuestros menús están avalados por un nutriólogo 
              basados en la alimentación sana, variada y suficiente y  también contamos con servicio de 
              estancia.
              </p>
            </div>
          </div>

        </div>
        <div className='w-full h-full flex'>
          <Image src={'/assets/visionbg.png'} alt='AboutUsImg' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={100}/>
        </div>

      </div>
    </section>
  )
}
