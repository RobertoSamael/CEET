"use client"
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import AboutUs from '@/sections/Homepage/AboutUs'
import Header from '@/sections/Homepage/Header'
import Message from '@/sections/Homepage/Message'
import Mision from '@/sections/Homepage/Mision'
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full flex flex-col">
        <MobileNav/>
        <Nav/>
        <Header/>
        <AboutUs/>
        <Mision/>
        <Message/>
        <Footer/>
      </main>
    </NextUIProvider>

  )
}
