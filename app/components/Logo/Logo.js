"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Logos from '@/public/logo.png'
import Logo1 from '@/public/logo (1).png'
import Logo2 from '@/public/logo (2).png'
import Logo3 from '@/public/logo (3).png'
import Logo4 from '@/public/logo (4).png'
import Logo5 from '@/public/logo (5).png'
import Logo6 from '@/public/logo (6).png'
import Logo7 from '@/public/logo (7).png'

function Logo() {
    
  return (
    <>
    <div 
      className='grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-8 justify-center m-5 p-5'>
        <Image src={Logos} width={100} height={100} alt='Logo 1'/>
        <Image src={Logo1} width={100} height={100} alt='Logo 2'/>
        <Image src={Logo2} width={100} height={100} alt='Logo 3'/>
        <Image src={Logo3} width={100} height={100} alt='Logo 4'/>
        <Image src={Logo4} width={100} height={100} alt='Logo 5'/>
        <Image src={Logo5} width={100} height={100} alt='Logo 6'/>
        <Image src={Logo6} width={100} height={100} alt='Logo 7'/>
        <Image src={Logo7} width={100} height={100} alt='Logo 8'/>
    </div>
    </>
  )
}

export default Logo
