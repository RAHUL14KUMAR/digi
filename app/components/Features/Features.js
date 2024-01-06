"use client"
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {easeInOut, motion} from 'framer-motion'
import Image from 'next/image'
import cols1 from '@/public/cols1.png'
import cols2 from '@/public/cols2.png'


function Features() {
  return (
    <div className="flex max-w-screen items-center justify-center bg-white text-center mb-34">
        <div className="w-3/4 flex-col justify-center items-center">
            <h1 className="mt-24 md:text-3xl text-2xl font-sans font-semibold overflow-hidden">Elevating Card Program With Citting Edge Technology</h1>
            <p className="mt-2 from-stone-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo at molestiae c odio.</p>
            <motion.div whileHover={{scale:1.1}} className="flex items-center justify-center mt-8">
                <button className="font-bold text-violet-900">Compare all Pro Feature</button>
                <span className="ml-1">
                <BsArrowRight className='text-purple-700 font-bold text-xl' />
                </span>
            </motion.div>
            

            <motion.div whileInView={{x:[50,0]}} transition={{duration:0.85 ,ease:easeInOut}} className='m-5 flex flex-col md:flex-row items-center justify-center'>
                <Image src={cols2} className="p-5" width={350} height={350}/>
                <Image src={cols1} className="p-5" height={350} width={350}/>
            </motion.div>
        </div>
    </div>
  )
}

export default Features
