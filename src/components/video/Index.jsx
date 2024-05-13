'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { IoVolumeMediumSharp } from "react-icons/io5";
import { MdVolumeUp } from "react-icons/md";
import { useGSAP } from '@gsap/react';

function Video() {
  
  // const [cursorChange, setCursorChange] = useState(false);

  // const handleCursor = () => {
  //   gsap.to('.cursor', {
  //     height: '100px',
  //     width: '100px',
  //     duration: 0.5,
  //     ease: 'power3.inOut',
  //   })
  // }

  // const handleCursorLeave = () => {
  //   gsap.to('.cursor', {
  //     height: '16px',
  //     width: '16px',
  //     duration: 0.5,
  //     ease: 'power3.inOut',
  //     innerHTML: '',
  //   })
  // }
  
  return (
    <div  data-scroll data-scroll-section data-cursor-icon="See Video"  className=' videoDiv w-full'>
      <div className=' videoDiv h-[60vh] sm:h-full '
        // onMouseEnter={handleCursor}
        // onMouseLeave={handleCursorLeave}
      >
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
