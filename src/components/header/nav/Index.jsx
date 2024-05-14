'use client'

import { motion } from 'framer-motion';
import { height } from '../anime';
import styles from './Style.module.css'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from "next/link";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

function Nav() {


  const data = [
    {
      id: 1,
      title: 'Home',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm'
    },
    {
      id: 2,
      title: 'Works',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/works_x1_vp9_801e93b806.webm'
    },
    {
      id: 3,
      title: 'Services',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/expertises_x1_vp9_11ee1f3431.webm'
    },
    {
      id: 4,
      title: 'contact',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_vp9_cc7a99e029.webm'
    },
    {
      id: 5,
      title: 'Vision',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_vp9_af33c15d4f.webm'
    },
  ]


  useEffect(() => {
    const links = document.querySelectorAll('.link a');
    const videos = document.querySelectorAll('.pill .img');

    links.forEach((link, idx) => {
      link.addEventListener('mouseenter', () => {

        gsap.set(videos, { opacity: 0 })
        gsap.fromTo(videos[idx], {
          rotate: -180,
          opacity: 0
        }, {
          rotate: 0,
          opacity: 1,
        })
      })
    })

    const cursor = document.querySelector('.cursor');
    
    
    links.forEach((link) => {
      link.addEventListener('mouseenter', function () {
        cursor.innerHTML = "Open"
        gsap.to(cursor, {
          width: '140px',
          height: '140px',
          duration: 0.5,
        })
      })
      link.addEventListener('mouseleave', function () { 
        cursor.innerHTML = ""
        gsap.to(cursor, {
          width: '16px',
          height: '16px',
          duration: 0.5,
        })
      })
    })
  }, [])


  
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
      className='page4 absolute top-0 left-0 w-full bg-black pl-[5vw] pt-[4vw] sm:pt-0  sm:px-[2.5vw] text-white overflow-hidden'
    >
      <div className='wrapper flex items-center justify-between py-[2vw] overflow-hidden '>
        <div className='m-0 w-1/5 h-[95vh] flex flex-col items-start justify-between sm:gap-[13.5vw] sm:border-r-[.02vw] border-[#333] '>
          <div>
            <Link href="/"> 
                <h2 className='text-[4.5vw] sm:text-[1.3vw] font-semibold
                  tracking-wider leading-[2vw]'
                >makepill</h2>
            </Link>
          </div>
          <div className='hidden sm:inline-block'>
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((item,index) => {
              return (
                <div key={index} className={`ptag ${styles.ptag} pb-[1.5vw]`}>
                  <p className='leading-none sm:text-[1.1vw] ' >
                    {item}
                    <div className={`underline ${styles.underline} `}></div>
                  </p>              
                </div>
              )
            })}
          </div>
          <div>
            <p className='sm:text-[.8vw] underline'>hello@makepill.com</p>
          </div>
        </div> 

        <div className='menu w-2/3 h-[90vh] flex items-center justify-between relative '>
        <div  className='links  overflow-hidden -ml-[32vw] sm:ml-0'>
            {data.map((item, index) => (
              <div key={index}>
                <div className='link flex flex-col gap-10'>
                  <Link href="/">
                    <h4 id={`${index}`}  className={` textmain ${styles.textmain} text-[10vw] sm:text-[4.5vw] text-[#333]`}>
                      {item.title}
                    </h4>
                  </Link>
                </div>

                <div  className={`pill  w-[50vw] sm:w-[22vw] h-[100%] absolute top-[50%] right-[-16%] sm:right-[10%] -translate-y-1/2 `}>
                  <video
                    autoPlay 
                    loop 
                    muted 
                    className={` img w-full h-full rotate-0 object-fit `} id={`${index}`}
                    src={`${item.image}`}
                  ></video>
                </div>    
              </div>
            ))} 
           </div> 
          </div>  
      </div>
    </motion.div>
  )
}

export default Nav
