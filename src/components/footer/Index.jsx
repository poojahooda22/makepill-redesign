'use client'

import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import styles from './Style.module.css'

function Footer() {
  const footerStyle = useRef();

  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor');

  //   const videoDiv = document.querySelector('.footVideo');

  //   videoDiv.addEventListener('mouseenter', function () {
  //     const tl = gsap.timeline();
      
  //     cursor.innerHTML = "Let's talk"
  //     tl.to(cursor, {
  //       width: '100px',
  //       height: '100px',
  //       duration: 0.5,
  //       backgroundColor: '#deff00'
  //     })
  //     tl.to('.footVideo', {
  //       rotate: 10,
  //       scale: 1.1,
  //       duration: 0.5,
  //     })
  //   })
  //   videoDiv.addEventListener('mouseleave', function () {
      
  //     const tl = gsap.timeline();
  //     cursor.innerHTML = ""
  //     gsap.to(cursor, {
  //       width: '16px',
  //       height: '16px',
  //       duration: 0.5,
  //       backgroundColor: '#fff'
  //     })
  //     tl.to('.footVideo', {
  //       rotate: 0,
  //       scale: 1,
  //       duration: 0.5,
  //     })
  //   })

  
  // })


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footerSec',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
    })
    tl.from('.footerTxt h1 span', {
      y: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2
    })
    tl.from('.footerSecondBtmtxt', {
      y: 100,
      opacity: 0,
      duration: 0.5,
    })

  })
  return (
    <div className='footerSec w-full relative pt-[8vw] sm:pt-[5vw]'>
      <div className='w-full flex items-center justify-center relative pb-[8vw] sm:pb-[5vw]'>
        <div className='footVideo w-[90vw] sm:w-[20vw] sm:rotate-0'>
          <video className='w-full h-full object-cover' autoPlay loop muted src="https://res.cloudinary.com/mkpill/video/upload/v1689376834/footer_x1_vp9_4d2ebedd3d.webm"></video>
        </div>
        <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-2/3'>
          <div className={`footerTxt ${styles.footerTxt} flex flex-col items-center justify-center sm:gap-0 gap-[2vw] `}>
            <h1 className='text-[10vw] sm:text-[7.2vw] border-b-[1px] sm:border-none overflow-hidden'>
              <span>B</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>f&nbsp;</span>

              <span>u</span>
              <span>s&nbsp;</span>

              <span>n</span>
              <span>o</span>
              <span>w</span>
            </h1>
            <div className='overflow-hidden'><h2 className='footerSecondBtmtxt text-[5vw] text-center sm:text-[1.3vw]'>Let&apos;s build now together your tomorrow&apos;s project.</h2></div>
          </div>
        </div>
      </div>

      <div className='w-full footerbtm px-[5vw] sm:px-[2.5VW] space-y-[12vw] sm:space-y-[4vw] '>
        <div className='hidden top sm:flex items-center justify-between font-semibold'>
          <div className='text-[5vw] sm:text-[.9vw] space-y-[.4vw]'>
            <h3 className='text-[#828282]'>/ Contact us</h3>
            <h3 className='border-b-[.1vw]'>hello@makepill.com</h3>
          </div>
          <div className='text-[5vw] sm:text-[.9vw] space-y-[.4vw]'>
            <h3 className='text-[#828282] text-right'>/ Based in</h3>
            <h3>Paris & remote</h3>
          </div>
        </div>

        {/* Only for small screen  */}
        <div className='w-full  inline-block sm:hidden space-y-[6vw]'>
          <div className='flex items-center justify-between'>
            <h3 className='text-[#828282]'>/ Contact us</h3>
            <h3 className='border-b-[1px]'>hello@makepill.com</h3>
          </div>
          <div className='flex items-center justify-between'>
            <h3 className='text-[#828282]'>/ Based in</h3>
            <h3>Paris & remote</h3>
          </div>
        </div>


        <div className='bottom flex items-center justify-between pb-[8vw] sm:pb-[2vw] sm:text-[.9vw] font-semibold'>
          <div className='flex items-center gap-[1vw] text-[#828282] '>
            <h3>Credits</h3>
            <h3 className='hidden sm:inline-block'>Mentions</h3>
          </div>
          <div className='hidden sm:inline-block'>
            <h3>Français / <span className='text-[#828282]'>English</span></h3>
          </div>
          <div className=''>
            <h3 className='hidden sm:inline-block'>Our projects</h3>
            <h3 className='inline-block sm:hidden text-[#828282]'>Mentions</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
