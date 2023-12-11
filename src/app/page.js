"use client"
import AboutUs from '@/sections/Homepage/AboutUs'
import Header from '@/sections/Homepage/Header'
import Message from '@/sections/Homepage/Message'
import Mision from '@/sections/Homepage/Mision'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
      <main className="w-full flex flex-col">
        <Header/>
        <AboutUs/>
        <Mision/>
        <Message/>
      </main>
  )
}
