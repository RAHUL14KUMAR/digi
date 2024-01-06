"use client"
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {easeInOut, motion} from 'framer-motion'
import './feature.css'

function Features() {
  return (
    <div className="flex max-w-screen items-center justify-center bg-white text-center mb-34">
        <div className="w-3/4 flex-col justify-center items-center">
            <h1 className="mt-24 md:text-3xl text-2xl font-sans font-semibold overflow-hidden">Elevating Card Program With Citting Edge Technology</h1>
            <p className="mt-2 from-stone-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo at molestiae c odio.</p>
            {/* <div whileHover={{scale:1.1}} className="flex items-center justify-center mt-8">
                <button className="font-bold text-violet-900">Compare all Pro Feature</button>
                <span className="ml-1">
                <BsArrowRight className='text-purple-700 font-bold text-xl arrow-icon' />
                </span>
            </div> */}
            <button class="m-2 rounded-xl text-purple-900 p-4 font-semibold text-white mt-5 flex mx-auto">Compare All Pro Features<BsArrowRight className='mt-1
            p-.5 arrow-icon'/> </button>

            

            <motion.div whileInView={{x:[50,0]}} transition={{duration:0.85 ,ease:easeInOut}} className='m-5 flex flex-col md:flex-row items-center justify-center'>
                <img src='./cols2.png' class="p-5"/>
                <img src='./cols1.png' class="p-5"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Features
