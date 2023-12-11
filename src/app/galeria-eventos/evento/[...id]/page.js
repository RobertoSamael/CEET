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
          Ceremonia de Graduacion 2024
        </Title>
      </div>

      <div className='w-full flex flex-col gap-2 px-10 pb-10'>
        <hr className='w-full h-1 bg-ceet5'/>
        <div className='w-full h-[500px] xl:h-[800px] flex'>
          <Image src={'/assets/visionbg.png'} alt='AboutUsImg' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={100}/>
        </div>
        <hr className='w-full h-1 bg-ceet5'/>
        <h3 className='font-Poppins font-semibold text-lg'>
          ¡Orgullosos de nuestros estudiantes!
        </h3>
        <p className='font-Poppins font-light text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate est a nibh auctor faucibus. In dapibus lectus vitae luctus congue. 
          <br/>
          <br/>
          Phasellus quis sapien et tellus facilisis porta. Vestibulum at dapibus felis. Nullam rutrum tortor quis justo rutrum, vel ullamcorper nisl sodales. Nullam rutrum tortor quis justo rutrum, vel ullamcorper nisl sodales. Maecenas efficitur mi quis dignissim ultrices
          <br/>
          <br/>
          Praesent sit amet ornare augue. Donec luctus et ipsum venenatis maximus. Aenean id ante libero. Donec sit amet ligula porttitor, vestibulum felis et, elementum justo. Aenean nec congue mauris, nec sagittis elit. Donec placerat, risus in egestas ultricies, lorem massa euismod enim, quis viverra arcu eros at purus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate est a nibh auctor faucibus. In dapibus lectus vitae luctus congue. 
          <br/>
          <br/>
          Phasellus quis sapien et tellus facilisis porta. Vestibulum at dapibus felis. Nullam rutrum tortor quis justo rutrum, vel ullamcorper nisl sodales. Nullam rutrum tortor quis justo rutrum, vel ullamcorper nisl sodales. Maecenas efficitur mi quis dignissim ultrices
          <br/>
          <br/>
          Praesent sit amet ornare augue. Donec luctus et ipsum venenatis maximus. Aenean id ante libero. Donec sit amet ligula porttitor, vestibulum felis et, elementum justo. Aenean nec congue mauris, nec sagittis elit. Donec placerat, risus in egestas ultricies, lorem massa euismod enim, quis viverra arcu eros at purus.
        </p>
      </div>
      <Image src={'/assets/torn_paper1.png'} alt='tornpaper' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} className='absolute bottom-0 -mb-5 md:-mb-14 z-[1]' quality={100}/>
    </section>
  )
}
