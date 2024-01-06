"use client"
import React from 'react'
import {motion} from 'framer-motion'

function Logo() {
    
  return (
    <>
    <div 
      className='grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-8 justify-center m-5 p-5'>
        <img src='./Logo.png' alt='Logo 1'/>
        <img src='./Logo (1).png' alt='Logo 2'/>
        <img src='./Logo (2).png' alt='Logo 3'/>
        <img src='./Logo (3).png' alt='Logo 4'/>
        <img src='./Logo (4).png' alt='Logo 5'/>
        <img src='./Logo (5).png' alt='Logo 6'/>
        <img src='./Logo (6).png' alt='Logo 7'/>
        <img src='./Logo (7).png' alt='Logo 8'/>
    </div>
    </>
  )
}

export default Logo
