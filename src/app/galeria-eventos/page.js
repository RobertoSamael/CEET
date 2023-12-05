import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

export default function page() {
  return (
    <NextUIProvider>
      <main className="w-full flex flex-col">
        <MobileNav/>
        <Nav/>
      </main>
    </NextUIProvider>
  )
}
