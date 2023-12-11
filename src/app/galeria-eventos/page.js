import Eventos from '@/sections/GaleriaEventos/Eventos'
import Galeria from '@/sections/GaleriaEventos/Galeria'
import React from 'react'

export default function page() {
  return (
      <main className="w-full flex flex-col">
        <Eventos/>
        <Galeria/>
      </main>
  )
}
