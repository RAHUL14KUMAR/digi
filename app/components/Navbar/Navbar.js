"use client"
import React,{useState} from 'react'
import { MdOutlineDensityMedium } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import {motion} from 'framer-motion'
import {IoMdClose} from 'react-icons/io'
import './Navbar.css'
import { BsArrowBarDown, BsArrowDown, BsArrowDownCircle } from 'react-icons/bs';

function Navbar() {
    const [toggle,setToogle]=useState(false);
  return (
        <div className="flex items-center justify-between">
            <div className="m-2 font-medium sm:text-lg md:text-2xl md:tracking-widest">
                <h1>MODE UI</h1>
            </div>

            <div className="p-0.1 hidden lg:inline-block">
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950 m-1">Card Access
                </button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950">Banking</button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950">Processing</button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950">About</button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950">Carrier</button>
                <button className="m-2 rounded-lg p-2 text-lg font-medium hover:bg-purple-100 hover:text-violet-950">Contact</button>
            </div>

            <div className="flex p-2">
                <button className="m-2 bg-slate-100 px-2 py-2 text-lg font-mono md:px-6 flex rounded-lg">Login <CiLogin className='mt-1
                p-1 arrow-icon font-bold text-2xl'/> </button>

                <button className="p-0.1 m-2 bg-slate-100 px-2 py-2 text-lg font-medium sm:inline-block lg:hidden md:px-6 rounded-lg" onClick={()=>setToogle(!toggle)}> <MdOutlineDensityMedium className='text-purple-700'/>
                
                    {
                        toggle && 
                        <motion.div className='modal bg-slate-50'>
                            <motion.div whileInView={{x:[300,0]}} transition={{duration:0.85,ease:"easeInOut"}} className=''>
                            <div className=''>
                                <button className='rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4'>
                                <IoMdClose onClick={()=>setToogle(!toggle)} className='icon'/>
                                </button>
                            </div>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">Card access</button>
                            </div>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">Banking</button>
                            </div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">Processing</button>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">About</button>
                            </div>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">Carrier</button>
                            </div>
                            <div>
                            <button className="rounded-lg p-2 text-lg font-medium hover:bg-purple-100 text-violet-950 m-4">Contact</button>
                            </div>
                            </motion.div>
                        </motion.div>
                    }
                
                </button>

                
            </div>
        </div>

  )
}

export default Navbar
