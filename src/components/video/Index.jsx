import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import { IoVolumeMediumSharp } from "react-icons/io5";

function Video() {

  useEffect(() => {
    const video = document.querySelector('.videoDiv video');

    video.addEventListener('mouseenter', () => {
      gsap.to('.cursor', {
        width: '8vw',
        height: '8vw',
        innerHTML: "<h5>view project</h5>",
        fontSize: '.9vw',
        color: 'black',     
      })
    })

    video.addEventListener('mouseleave', () => {
      gsap.to('.cursor', {
        width: '8px',
        height: '8px',
        innerHTML: "",    
      })
    })
  })
  
  return (
    <div className=' videoDiv w-full'>
      <div className=' h-[60vh] sm:h-full'>
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
