import Title from '@/components/Title'
import React from 'react'

export default function FormUbicacion() {
  return (
    <div className='w-full flex flex-col md:flex-row px-10 gap-10 md:gap-20 mt-10 md:mt-20'>

      <div className='w-full flex flex-col gap-7'>
        <Title titulo={'CONTÁCTANOS'}>
          Mándanos un Mensaje
        </Title>
        <form className='w-full flex flex-col gap-3'>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" className='border p-2'/>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" className='border p-2'/>
          <label htmlFor="msg">Mensaje</label>
          <textarea id="msg" name="msg" rows="4" cols="50" className='border p-2'/>
          <input type="submit" value="Enviar" className='w-fit py-4 px-6 bg-ceet1 font-Poppins cursor-pointer text-white text-sm font-semibold hover:px-8 transition-all ease-in-out duration-300'/>
        </form>
      </div>
      <div className='w-full flex flex-col gap-7'>
        <Title titulo={'CÓMO LLEGAR'} align={'right'}>
          Nuestra Ubicación
        </Title>
        <div className='w-full flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.622525773254!2d-97.50888552377992!3d25.881898277276758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f95a31dd5180f%3A0x38916f3075e1b8fd!2sColegio%20CEET!5e0!3m2!1ses!2smx!4v1702063890645!5m2!1ses!2smx" className='w-full h-[300px] md:h-[500px] border-4 border-ceet3' loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}
