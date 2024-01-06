import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Vector from '@/public/Vector.png'
import Avatar from '@/public/Avatar Name.png'

function Testimonial() {
  return (
    
        <div className="flex w-screen flex-col items-center justify-center bg-white text-center">
            <div className="my-5 w-2/3 p-5 text-xl font-bold">
                <div className="flex justify-center items-center">
                    <Image src={Vector} width={200} height={200} alt="cols 1" />
                </div>
                <p className="mt-5 text-base sm:text-sm md:text-xl font-semibold text-slate-700">I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>

                <div className='flex justify-center items-center'>
                    <Image src={Avatar} width={100} height={100} alt="cols 1"/>
                </div>
            
                <Rating value={4} readOnly/>
            </div>
        </div>
    
  )
}

export default Testimonial
