import gsap from 'gsap'
import React, { useEffect } from 'react'

// const white = {background: 'white', color: '#0f0f0f'}
// const black = {background: '#0f0f0f', color: 'white'}

function About() {

  // const [color, setColor] = React.useState()

  useEffect(() => {
    const section = document.querySelector('.aboutSec')
    section.addEventListener('mouseenter', () => {
      gsap.to('.aboutSec', {
        backgroundColor: 'white',
        color: 'black'
      })
      gsap.to('.cursor', {
        backgroundColor: 'black'
      })
    })
    section.addEventListener('mouseleave', () => {
      gsap.to('.aboutSec', {
        backgroundColor: 'black',
        color: 'white'
      })
      gsap.to('.cursor', {
        backgroundColor: 'white'
      })
    })
    
    const button = document.querySelector('.serviceBtn')
    button.querySelector('mouseenter', () => {
      gsap.to('.cursor', {
          width: '8vw',
          height: '8vw',
      })
    })
  })

  
  return (
    <div
      data-scroll-section data-scroll-speed=".1" 
      className='aboutSec w-full h-[100vh] sm:px-[2.5vw] flex items-center justify-between'
    >
      <div className='leftDiv w-1/2  flex items-center justify-center'>
        <div className='leftvideo h-[30vw] '>
          <video 
            autoPlay
            loop
            muted
            className='w-full h-full object-cover'
            src="https://res.cloudinary.com/mkpill/video/upload/v1691752608/launch_pill_6ae3865c71.webm"></video>
        </div>
      </div>

      <div className='rightDiv  w-1/2 '>
        <div className='flex flex-col gap-[3.5vw]'>
          <h4 className=' text-[1vw] tracking-wider'>/ Give life to your ideas</h4>
          <div className='w-3/4 text-[2.3vw] flex flex-col gap-[3.5vw] tracking-wide leading-[3vw]'>
            <h1>
              We pool our expertise to turn your
              wildest projects into singular
              experiences.
            </h1>
            <h1>
              Discover our diverse expertise,
              each one providing a unique
              dimension to your vision.
            </h1>    
          </div>
          <div className='serviceBtn w-[8vw] h-[8vw] rounded-full border-[.8px] border-[#d9d9d9] flex items-center justify-center'>
            <p className='text-[.9vw]'>Services</p>  
          </div>  
        </div>  
      </div>  
    </div>
  )
}

export default About
