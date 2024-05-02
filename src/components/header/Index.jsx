
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, rotate, rotate2 } from './anime';
import { useState } from 'react';
import Nav from './nav/Index';
import Link from "next/link";

function Header() {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='header section fixed top-0 left-0 w-full px-[5vw] py-[4vw] sm:px-[2.5vw] z-[9] cursor-pointer 
    sm:pt-[2vw]'>
        <div className='w-full flex items-center justify-between'>
            <div>
                <Link href="/"> 
                    <h2 className='text-[6vw] font-[mainFont] tracking-wide sm:text-[1.3vw] font-semibold
                     leading-[2vw]'>makepill</h2>
                </Link>
            </div>
            <motion.div 
                 variants={opacity} animate={isActive ? "closed" : "open"}
                className='hidden sm:inline-block uppercase text-[.8vw] text-left'
            >
                / Index
            </motion.div>
            <div       
                className=' sm:w-[5vw] flex items-center justify-center sticky z-[99]'
            >
                <motion.div 
                    variants={rotate2}
                    animate={!isActive ? "closed" : "open"}
                    className='w-[9vw] h-[8vw] sm:w-[2.2vw] sm:h-[2vw] border-b-[1px] border-t-[1px] border-l-[1px] 
                    border-r-[.5px] rounded-l-full flex items-center justify-center sm:px-[1.1vw] '
                >
                    <span className='text-[3vw] sm:text-[.8vw]'>M</span>
                </motion.div>
                <motion.div
                    variants={rotate}
                    animate={!isActive ? "closed" : "open"}
                    onMouseDown={() => {setIsActive(!isActive)}}
                    className={`pill1 w-[9vw] h-[8vw] sm:w-[2.2vw] sm:h-[2vw] border-b-[1px] border-t-[1px]  border-l-[.5px]
                    border-r-[1px] rounded-r-full flex items-center justify-center hover:bg-white hover:text-black
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
                </motion.div>
            </div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav/> }
        </AnimatePresence>     
    </div>
  )
}

export default Header
