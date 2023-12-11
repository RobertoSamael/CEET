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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices magna lectus, eget condimentum velit dictum vel. 
        Vivamus id malesuada mi. Donec quis faucibus lorem, at gravida dolor. Aliquam erat volutpat. Vestibulum ut augue eget massa volutpat scelerisque. 
        Curabitur a orci ullamcorper, laoreet mi eget, placerat nulla. Integer sodales arcu massa, at rutrum sapien laoreet nec. Nullam sollicitudin ipsum in lacus congue placerat. 
        Praesent posuere blandit blandit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate est a nibh auctor faucibus. In dapibus lectus vitae luctus congue. 
        Phasellus quis sapien et tellus facilisis porta. Vestibulum at dapibus felis. Nullam rutrum tortor quis justo rutrum, vel ullamcorper nisl sodales. 
        Maecenas efficitur mi quis dignissim ultrices. Praesent sit amet ornare augue. Donec luctus et ipsum venenatis maximus. Aenean id ante libero. 
        Donec sit amet ligula porttitor, vestibulum felis et, elementum justo.
        Aenean nec congue mauris, nec sagittis elit. Donec placerat, risus in egestas ultricies, lorem massa euismod enim, quis viverra arcu eros at purus. 
        Nullam tempor mi aliquet, pulvinar velit vel, ornare purus.
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
