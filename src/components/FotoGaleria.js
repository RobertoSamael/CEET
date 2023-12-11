import Image from 'next/image'
import React from 'react'

export default function FotoGaleria() {
  return (
    <div className='w-[300px] h-[300px] flex shadow-xl border border-gray-200'>
        <Image src={'/assets/visionbg.png'} alt='AboutUsImg' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} quality={80}/>
    </div>
  )
}
