'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { IoVolumeMediumSharp } from "react-icons/io5";
import { IoVolumeMedium } from "react-icons/io5";
import { useGSAP } from '@gsap/react';

function Video() {
  
  // useEffect(() => {
  //   const video = document.querySelector('.videoDiv')

  //   video.addEventListener('mouseenter', () => {
  //     const tl = gse()

  //   video.addEv
  //     const tl

  // })

  
  
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="0.1"   className=' videoDiv w-full'>
      <div className=' videoDiv h-[60vh] sm:h-full '>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
          src="https://res.cloudinary.com/mkpill/video/upload/v1691655828/makepill_showreel_opti_a5c666148b.mp4"
        >
        </video>
      </div>
    </div>
  )
}

export default Video
