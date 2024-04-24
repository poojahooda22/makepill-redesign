'use client';

import Link from 'next/link'
import React from 'react'

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { opacity } from './anime';
import { useState } from 'react';
import Nav from './nav/Index';
// import styles from './style.module.css'


function Header() {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='header absolute w-full px-[5vw] py-[4vw] sm:px-[2.5vw] 
    sm:pt-[2vw]'>
        <div className='w-full flex items-center justify-between'>
            <div>
                <Link href="/"> 
                    <h2 className='text-[4.5vw] sm:text-[1.3vw] font-semibold 
                    tracking-wider leading-[2vw]'>makepill</h2>
                </Link>
            </div>
            <motion.div 
                 variants={opacity} animate={isActive ? "closed" : "open"}
                className='hidden sm:inline-block uppercase text-[.8vw] text-left'
            >
                / Index
            </motion.div>
            <div 
                
                className=' sm:w-[5vw] flex items-center justify-center'
            >
                <div className='w-[8vw] h-[7vw] sm:w-[2.2vw] sm:h-[2vw] border-b-[1px] border-t-[1px] border-l-[1px] 
                    border-r-[1px] rounded-l-full flex items-center justify-center sm:px-[1.1vw] '
                >
                    <span className='text-[3vw] sm:text-[.8vw]'>M</span>
                </div>
                <div
                    onMouseDown={() => {setIsActive(!isActive)}}
                    className={`pill w-[8vw] h-[7vw] sm:w-[2.2vw] sm:h-[2vw] border-b-[1px] border-t-[1px] 
                    border-r-[1px] rounded-r-full flex items-center justify-center 
                    sm:px-[1.1vw] `}
                >
                    <motion.p 
                        variants={opacity} 
                        animate={isActive ? "closed" : "open"}
                    >
                        <HiOutlineMenuAlt4 className='text-[3.8vw] sm:text-[1.2vw]' />
                    </motion.p>
                    <motion.p 
                        variants={opacity} 
                        animate={!isActive ? "closed" : "open"} 
                        className='absolute' 
                    >
                        <IoCloseOutline className='text-[3.8vw] sm:text-[1.2vw]' />
                    </motion.p>
                </div>
            </div>
        </div> 
        { <Nav/> }
    </div>
  )
}

export default Header
