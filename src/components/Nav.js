"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Nav() {

  if (typeof window !== "undefined"){

    let prevScrollpos = window.scrollY;
    window.onscroll = function() {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } 
      else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
    <nav id='navbar' className='w-full h-[100px] justify-center bg-ceet1 fixed sm:flex hidden z-50 transitionEffect'>
      
        <a href='/' className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Inicio
            </p>
          </div>
        </a>

        <Dropdown>
          <DropdownTrigger>
            <div className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
              <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
              <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent gap-2'>
                <p className='font-Poppins text-base text-white'>
                  Oferta Educativa
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu variant='flat' color='default' className='bg-ceet1 -mt-3'>
            <DropdownItem href="/oferta-educativa/maternal" as={Link} key="maternal" className='text-white hover:bg-white/10 font-Poppins'>Maternal</DropdownItem>
            <DropdownItem href="/oferta-educativa/preescolar" as={Link} key="preescolar" className='text-white hover:bg-white/10 font-Poppins'>Preescolar</DropdownItem>
            <DropdownItem href="/oferta-educativa/primaria" as={Link} key="primaria" className='text-white hover:bg-white/10 font-Poppins'>Primaria</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className='w-[100px] h-full flex justify-center items-center'>
          <Image src={'/assets/LOGO.png'} alt='Logo' width={80} height={80} quality={100}/>
        </div>

        <a href='/galeria-eventos' className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Galería / Eventos
            </p>
          </div>
        </a>

        <a href='/contacto' className='w-[200px] h-full flex flex-col items-center cursor-pointer group'>
          <hr className='w-0 text-white group-hover:w-full transition-all duration-300 ease-in-out'></hr>
          <div className='w-full h-full flex justify-center items-center hover:bg-gradient-to-b from-white/10 to-transparent'>
            <p className='font-Poppins text-base text-white'>
              Contácto
            </p>
          </div>
        </a>

      </nav>
  )
}
