"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { BsArrowRight, BsFileLock2, BsGlobe2, BsKey, BsKeyFill, BsLock } from 'react-icons/bs'
import './feature.css'

function Feature() {
  return (
    <div class="flex max-w-screen items-center justify-center bg-white text-center mb-34">
        <div class="w-3/4 flex-col justify-center items-center">
        <h1 className="mt-24 md:text-3xl text-2xl font-sans font-semibold overflow-hidden">Elevating Card Program With Citting Edge Technology</h1>
            <p class="mt-2 from-stone-400 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo at molestiae c odio.</p>
            <button class="m-2 rounded-xl text-purple-900 p-4 font-semibold text-white mt-5 flex mx-auto">Compare All Pro Features<BsArrowRight className='mt-1
            p-.5 arrow-icon'/> </button>


        <div class="my-20 flex flex-col lg:flex-row xl:flex-row">
            <motion.div whileHover={{scale:1.1}} class="m-5 flex flex-col items-center text-balance p-2.5 bg-slate-50 rounded-lg">
                <div class="h-20 w-20 rounded-full bg-purple-200 flex items-center justify-center">
                    <BsGlobe2 className='text-3xl text-purple-700'/>
                </div>
                <h1 class="font-semibold">Key Features</h1>
                <p class="text-base font-normal text-slate-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas recusandae quae voluptatem.</p>
            </motion.div>

            <motion.div whileHover={{scale:1.1}} class="m-5 flex flex-col items-center text-balance p-2.5 bg-slate-50 rounded-lg">
            <div class="h-20 w-20 rounded-full bg-purple-200 flex items-center justify-center">
                    <BsKey className='text-3xl text-purple-700'/>
                </div>
                <h1 class="font-semibold">Biometric Integrated</h1>
                <p class="text-base font-normal text-slate-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas recusandae quae voluptatem.</p>
            </motion.div>

            <motion.div whileHover={{scale:1.1}} class="m-5 flex flex-col items-center text-balance p-2.5 bg-slate-50 rounded-lg">
            <div class="h-20 w-20 rounded-full bg-purple-200 flex items-center justify-center">
                    <BsLock className='text-3xl text-purple-700'/>
                </div>
                <h1 class="font-semibold">Fully Secured</h1>
                <p class="text-base font-normal text-slate-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas recusandae quae voluptatem.</p>
            </motion.div>
        </div>
        </div>
    </div>
    
  )
}

export default Feature
