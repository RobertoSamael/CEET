"use client"
import { Link, Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'

import '../styles/Nav/navstyles.css'

export default function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = {
        "Inicio": '',
        "Oferta Educativa": 'oferta-educativa',
        "Galeria / Eventos": 'galeria-eventos',
        "Contacto": 'contacto',
    };
    console.log(Object.entries(menuItems))
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='bg-ceet1 bg-opacity-50 sm:hidden fixed'>
    <NavbarContent className='navcontent'>
        <NavbarMenuToggle
        className="sm:hidden text-white"
        />
        <Image src={'/assets/LOGO.png'} alt='LogoCEET' quality={10} width={50} height={50}/>
    </NavbarContent>
  <NavbarMenu className='bg-ceet1 bg-opacity-50'>
    {Object.entries(menuItems).map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-white font-Baloo py-5"
          href={`/${item[1]}`}
          size="lg"
        >
          {item[0]}
        </Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
</Navbar>
  )
}
