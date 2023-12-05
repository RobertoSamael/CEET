import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function Message() {
  return (
    <section className='w-full md:h-[50vh] flex flex-col md:flex-row p-3 gap-4 bg-ceet7'>
      <div className='w-full h-full flex'>
        <Image src={'/assets/Directora.jpg'} alt='Directora' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={100}/>
      </div>
      <div className='w-full h-full flex flex-col md:justify-center gap-10 p-2'>
        <Title titulo='MOTIVACIÓN'>
          Mensaje de la Directora
        </Title>
        <div className='w-full flex flex-col'>
          <div className='w-full flex'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#00c8bf" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
          </div>
          <p className="font-Poppins italic font-extralight text-lg">
            “Lorem ipsum dolor sit amet consectetur. Tempus nullam urna amet euismod morbi nunc enim sit. Turpis amet lacinia nisi fusce nunc sit. Mauris fringilla suspendisse nulla quam semper.”
          </p>
          <div className='w-full flex justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#00c8bf" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
          </div>
          <p className="font-Poppins font-bold text-base text-ceet2">
            Lic. Hasbulla González
          </p>
        </div>
      </div>
    </section>
  )
}
