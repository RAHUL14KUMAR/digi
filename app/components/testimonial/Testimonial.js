import { Rating } from '@mui/material'
import React from 'react'

function Testimonial() {
  return (
    
        <div class="flex w-screen flex-col items-center justify-center bg-white text-center">
            <div class="my-5 w-2/3 p-5 text-xl font-bold">
                <div className="flex justify-center items-center">
                    <img src='./Vector.png'/>
                </div>
                <p class="mt-5 text-base sm:text-sm md:text-xl font-semibold text-slate-700">I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>

                <div className='flex justify-center items-center'>
                    <img src='./Avatar Name.png'/>
                </div>
            
                <Rating value={4} readOnly/>
            </div>
        </div>
    
  )
}

export default Testimonial
