import React, { useEffect } from 'react'
import { gsap } from 'gsap'

function Video() {

  useEffect(() => {
    const video = document.querySelector('.videoDiv video');
    video.addEventListener('mouseenter', () => {
      gsap.to('.cursor', {
        width: '100px',
        height: '100px'
      })
    })
  })
  
  return (
    <div className='w-full mb-[5vw]'>
      <div className='videoDiv h-[60vh] sm:h-full'>
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
