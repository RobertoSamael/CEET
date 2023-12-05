import Evento from '@/components/Evento'
import Title from '@/components/Title'
import React from 'react'

export default function Eventos() {
  return (
    <section className='w-full flex flex-col p-10 pt-10 gap-7'>
      <div className='w-full flex flex-col justify-center mt-10 md:mt-20 gap-2'>
        <Title titulo={'NUESTRAS ACTIVIDADES'}>
          Eventos
        </Title>
        <p className='font-Poppins text-sm text-black'>
          Explora nuestros eventos
        </p>
      </div>
      <div className='w-full h-full flex flex-col md:flex-row md:justify-evenly items-center md:items-start md:flex-wrap gap-5'>
        <Evento id={1} titulo={'Evento 1'}>
          Lorem ipsum dolor sit amet consectetur. Blandit pulvinar proin semper egestas ultricies congue rutrum. Nunc felis neque egestas diam consectetur. Dignissim feugiat rhoncus sed tellus pretium arcu elit.
        </Evento>
        <Evento id={2} titulo={'Evento 2'}>
          Lorem ipsum dolor sit amet consectetur. Blandit pulvinar proin semper egestas ultricies congue rutrum. Nunc felis neque egestas diam consectetur. Dignissim feugiat rhoncus sed tellus pretium arcu elit.
        </Evento>
        <Evento id={2} titulo={'Evento 2'}>
          Lorem ipsum dolor sit amet consectetur. Blandit pulvinar proin semper egestas ultricies congue rutrum. Nunc felis neque egestas diam consectetur. Dignissim feugiat rhoncus sed tellus pretium arcu elit.
        </Evento>
        <Evento id={2} titulo={'Evento 2'}>
          Lorem ipsum dolor sit amet consectetur. Blandit pulvinar proin semper egestas ultricies congue rutrum. Nunc felis neque egestas diam consectetur. Dignissim feugiat rhoncus sed tellus pretium arcu elit.
        </Evento>
      </div>
    </section>
  )
}
