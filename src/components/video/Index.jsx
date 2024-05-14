'use client'

import React, { useEffect, useRef, useState } from 'react'
import  {gsap } from 'gsap'
import { IoVolumeMediumSharp } from "react-icons/io5";
import { MdVolumeUp } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import MouseFollower from "mouse-follower";



function Video() {
  // const cursor = new MouseFollower();
  
  // const [cursorChange, setCursorChange] = useState(false);

  // const handleCursorLeave = () => {
  // 
  // }


  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const videoDiv = document.querySelector('.videoDiv');
    const video = document.querySelector('.videoDiv video');

    videoDiv.addEventListener('mouseenter', function () {
      cursor.innerHTML = "play"
      gsap.to(cursor, {
        width: '140px',
        height: '140px',
        duration: 0.5,
      })
    })
    videoDiv.addEventListener('mouseleave', function () {
      cursor.innerHTML = ""
      gsap.to(cursor, {
        width: '16px',
        height: '16px',
        duration: 0.5,
      })
    })

    var flag =0;
    videoDiv.addEventListener('click', function() {
      if(flag == 0) {
        video.play()
        flag = 1
      } else {
        video.pause()
        flag=0
      }
    })

  
  })
  
  return (
    <div  data-scroll data-scroll-section  className=' videoDiv w-full'>
      <div className='w-full h-[60vh] sm:h-full '
        // onMouseEnter={handleCursor}
        // onMouseLeave={handleCursorLeave}
      >
        <div className='overlay bg-transparent
         h-[100%] w-[100%] absolute z-[10]'></div>
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
