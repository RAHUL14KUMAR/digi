"use client"
import React from 'react'
import './Footer.css'
import {motion} from "framer-motion"

import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
    
    <div className=" max-w-screen flex flex-col bg-white">
    <div className="flex md:justify-center md:items-center w-screen p-2">
        <div className=" md:w-1/2 w-screen m-5">
            <h1 className="text-xl font-bold  md:text-2xl text-black md:text-center">MODE UI</h1>
            <p className="font-semibold mt-5 text-slate-700 md:text-center">Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interface across various platform and devices</p>
        </div>
    </div>

  <hr className='mt-10 border-slate-700'/>

  <div className="items-center grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-14 p-2">
    <ul className='m-2'>
      <li className="text-lg font-bold p-1">Company</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">About Us</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Pricing</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Contact Us</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Features</motion.li>
    </ul>
    <ul className='m-2'>
      <li className="text-lg font-bold p-1">Product</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Figma design system</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Ios kit</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Anroid kit</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">wireframe</motion.li>
    </ul>
    <ul className='m-2'>
      <li className="text-lg font-bold p-1">Resources</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Template</motion.li>
      <motion.li whileHover={{ scale: 1.05}}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Landing Pages</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Documentation</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">library</motion.li>
    </ul>
    <ul className="m-2">
      <li className="text-lg font-bold p-1">Legal</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Privacy Policy</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }} className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Terms & Conditions</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Disclaimer</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Affailate Programming</motion.li>
    </ul>
    <ul className="m-2 overflow-hidden">
      <li className="text-lg font-bold p-1">Support</li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Help Center</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Raise Ticket</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Report</motion.li>
      <motion.li whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}className="text-sm font-semibold text-slate-600 p-1 hover:text-purple-700">Refund</motion.li>
    </ul>
    </div>
    
    <hr className='mt-10 border-slate-700'/>

        <div className="flex justify-center items-center w-screen">
            <div className="m-4">
                <div className='flex place-content-center'>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }} className='m-2 text-4xl border-2 hover:border-purple-500 rounded-3xl p-2'>
                    <BsGithub/>
                    </motion.div>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }}  className='m-2 text-4xl border-2 hover:border-purple-500 rounded-3xl p-2'>
                    <BsLinkedin/>
                    </motion.div>
                    <motion.div whileHover={{translateY:-5}} transition={{ duration: 0.3 }}  className='m-2 text-4xl border-2 hover:border-purple-500 rounded-3xl p-2'>
                    <BsDiscord/>
                    </motion.div>
                </div>
            
                <p className="font-semibold mt-5 text-slate-700 text-center">© 2023 Mode UI Inc. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
