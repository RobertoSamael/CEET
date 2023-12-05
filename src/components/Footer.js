import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <section className='w-full flex flex-col py-10 px-5 md:px-10 gap-10'>
      
        <div className='w-full flex flex-col md:flex-row gap-5'>
          <div className='w-full flex flex-col gap-5'>
            <div className='w-full flex justify-center md:justify-start'>
              <Image src={'/assets/LOGO2.png'} alt='Logo2' width={200} height={200} quality={100}/>
            </div>
            <div className='w-full flex flex-col'>
              <p className='font-Poppins text-center md:text-left font-semibold text-base text-ceet2'>
                Dirección:
              </p>
              <p className='font-Poppins text-center md:text-left text-base text-ceet2'>
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
            <div className='w-full flex flex-col'>
              <p className='font-Poppins text-center md:text-left font-semibold text-base text-ceet2'>
                Contácto:
              </p>
              <p className='font-Poppins text-center md:text-left text-base text-ceet2'>
              (868) 000 000
              <br/>
              contacto@ceet.mx
              </p>
            </div>
            <div className='w-full flex justify-center md:justify-start gap-5'>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill='#0B1D41' d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill='#0B1D41' d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
            </div>
          </div>

          <div className='w-full flex flex-col md:justify-center gap-5'>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Inicio
            </a>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Galería / Eventos
            </a>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Contácto
            </a>
            <a href='#' className='font-Poppins font-bold text-center text-base text-ceet2'>
                Ofertas Educativas
            </a>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Maternal
            </a>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Preescolar
            </a>
            <a href='#' className='font-Poppins text-center text-base text-ceet2'>
                Primaria
            </a>
          </div>
        </div>

        <div className='w-full flex justify-center md:justify-end py-5 border-t-[1px] border-slate-200'>
          <p className='font-Poppins text-center text-sm text-slate-400'>
              2023 CEET.
          </p>
        </div>

    </section>
  )
}
