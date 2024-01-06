import React from 'react'
import './action.css'

import { BsCalendar2, BsHeadset } from "react-icons/bs";
function Action() {
  return (
    
        <div className="maax-w-screen flex flex-col items-center justify-center bg-white text-center mb-8">
            <div className="my-5 w-2/3 p-2 text-lg font-bold md:text-3xl">
                <p>Unlock LimitLess Possibility With Our New Card Solution</p>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                <button className="m-2 rounded-lg bg-violet-500 px-4 py-2 font-semibold text-white flex">unlock your card <span className='ml-4 my-1'><BsCalendar2 className='arrow-icon'/></span> </button>
                <button className="m-2 rounded-lg bg-slate-500 px-4 py-2 font-semibold text-white flex">customer support <span className='ml-4 my-1'> <BsHeadset className='arrow-icon'/> </span> </button>
            </div>
        </div>      

  )
}

export default Action
