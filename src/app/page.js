import Nav from '@/components/Nav'
import Header from '@/sections/Homepage/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Nav/>
      <Header/>
    </main>
  )
}
