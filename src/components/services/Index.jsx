import gsap from 'gsap'
import React, { useEffect } from 'react'
import styles from './style.mosule.css'
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
    
    // const button = document.querySelector('.serviceBtn')
    // button.addEventListener('mouseenter', () => {
    //

  })

  
  return (
    <div
      data-scroll-section data-scroll-speed=".1" 
      className='aboutSec w-full py-[8vw] overflow-hidden '
    >

      <div className='py-[6vw] sm:py-0  sm:flex items-center justify-between sm:px-[2.5vw] sm:mb-[4vw]'>
        <div className='leftDiv sm:w-1/2 flex items-center justify-center mb-[16vw] sm:mb-0 '>
          <div className='leftvideo h-[70vw] sm:h-[30vw] '>
            <video 
              autoPlay
              loop
              muted
              className='w-full h-full object-cover'
              src="https://res.cloudinary.com/mkpill/video/upload/v1691752608/launch_pill_6ae3865c71.webm"></video>
          </div>
        </div>
        <div className='rightDiv sm:w-1/2 px-[5vw] sm:px-0'>
          <div className=' sm:space-y-[4vw] space-y-[12vw]'>
            <h4 className='text-[5vw] sm:text-[1vw] tracking-wider'>/ Give life to your ideas</h4>
            <div className='w- sm:w-3/4 text-[6vw] sm:text-[2.3vw] font-medium space-y-[12vw] sm:space-y-[4vw] tracking-wide sm:leading-[3vw]'>
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
            <div className='flex items-center justify-center sm:items-start sm:justify-start '>
              <div className='serviceBtn w-[28vw] h-[28vw] sm:w-[8vw] sm:h-[8vw] rounded-full border-[.8px] border-[#d9d9d9] flex items-center justify-center'>
                <p className='sm:text-[.9vw]'>Services</p>  
              </div>  
            </div>  
          </div>  
        </div>
      </div> 

      <div className='flex mt-[8vw]'>
        <div className={`elem ${styles.elem} flex items-center`}>
          <div className='sm:text-[6vw] tracking-wide whitespace-nowrap mr-[5vw]'>
            <h1>Mind the business, we build the product</h1>  
          </div>
          <div className='w-[10vw] mr-[5vw]'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://makepill.com/medias/videos/seal/white.webm"></video>  
          </div>   
        </div>
        <div className={`elem ${styles.elem} flex items-center`}>
          <div className='sm:text-[6vw] tracking-wide whitespace-nowrap mr-[5vw]'>
            <h1>Mind the business, we build the product</h1>  
          </div>
          <div className='w-[10vw] mr-[5vw]'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://makepill.com/medias/videos/seal/white.webm"></video>  
          </div>   
        </div> 
      </div> 
    </div>
  )
}

export default About
