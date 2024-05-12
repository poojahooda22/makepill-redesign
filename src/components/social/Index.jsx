'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';
import { Power4} from 'gsap/gsap-core';
import style from './Style.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion';

function Social() {
    const data = [
        {title: 'Instagram', link1: '@makepill_agency', socLink: 'https://www.instagram.com/makepill_agency/' },
        {title: 'X/Twitter', link1: '@makepill_agency', socLink: 'https://twitter.com/makepill_agency'},
        {title: 'Dribbble', link1: '@makepill_agency', socLink: 'https://dribbble.com/makepill'},
        {title: 'YouTube', link1: '@makepill_agency', socLink: 'https://www.youtube.com/@makepill'},
        {title: 'LinkedIn', link1: '@makepill_agency', socLink: 'https://www.linkedin.com/company/makepill/'},     
    ]


  return (
    <div className='overflow-hidden w-full py-[4vw] sm:py-[5vw]'>
        <div className='flex items-center justify-center mb-[6vw]'>
            <div><h4 className='text-[5vw] sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        <div className='relative '>
            {data.map((item, index) => {
                return (
                    <div key={index}>                    
                        <Link  href={item.socLink} target='_blank' >
                        <div className={`socialDiv ${style.socialDiv} w-full py-[6vw] sm:py-[1.5vw] overflow-hidden flex items-center justify-center relative hover:cursor-pointer`}>
                            <div className={`overlay ${style.overlay} w-[100%] h-[100%] flex items-center justify-center  absolute left-0 bg-[#222222]`}>
                                <motion.div 
                                    className={`flex items-center justify-center `}
                                    initial={{x: "0"}}
                                    animate={{x: "-100%"}}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5}}
                                >
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center justify-center `}
                                    initial={{x: "0"}}
                                    animate={{x: "-100%"}}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5}}
                                >
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center justify-center `}
                                    initial={{x: "0"}}
                                    animate={{x: "-100%"}}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5}}
                                >
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center justify-center `}
                                    initial={{x: "0"}}
                                    animate={{x: "-100%"}}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5}}
                                >
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center justify-center `}
                                    initial={{x: "0"}}
                                    animate={{x: "-100%"}}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5}}
                                >
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </motion.div>
                                {/* <div className={` flex items-center justify-center `}>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </div>
                                <div className={`flex items-center justify-center `}>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </div>
                                <div className={`flex items-center justify-center `}>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </div>
                                <div className={` flex items-center justify-center `}>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw]'>{item.title}</h3>
                                    <span className='text-[#deff00] mr-[6vw] sm:mr-[2vw]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.1vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h3 className='sm:mr-[2vw] mr-[6vw] sm:text-[1.5vw] text-[5vw] text-[#828282]'>{item.link1}</h3>
                                </div> */}
                            </div>
                            <h2 className='text-[4.5sm:vw] sm:text-[1.7vw] tracking-wide text-[#828282] font-semibold'>{item.title}</h2>                          
                        </div>
                    </Link>
                </div>
   
                )
            })}
        </div>
        
    </div>
  )
}

export default Social
