"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import './hero.css'

function Hero() {
  return (
    <div class="relative flex h-screen w-screen items-center justify-center -z-10">

      <div class="relative z-10 mx-auto my-auto items-center justify-center text-center md:w-3/4">
        <h1 class="text-sm font-medium text-violet-800 md:text-xl ">SEAMLESS EXPERIENCE</h1>
        <h1 class="text-2xl font-medium text-slate-900 md:text-3xl mt-5 mx-auto md:w-1/2">UNLEASHING THE NEXT GENERATION OF CARD SOLUTION</h1>
        <p class="text-pretty font-mono text-slate-800 mt-5 md:w-3/4 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iste atque nulla.</p>
        <button class="m-2 rounded-xl bg-violet-900 p-4 font-mono text-white mt-5 flex mx-auto">UNLOCK YOUR CARD <BsArrowRight className='mt-1
        p-.5 arrow-icon'/> </button>
      </div>
    </div>

  )
}

export default Hero
