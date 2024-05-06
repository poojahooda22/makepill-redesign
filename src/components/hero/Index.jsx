'use client'

import React, { useEffect } from 'react'
import Header from '../header/Index'
import { gsap } from 'gsap'

function LandingPage() {

   
  return (
    <div data-scroll data-scroll-section data-color="black"  className='first section w-full overflow-hidden relative'>
        <div className='page1 relative'>
            <div className='relative z-[999]'>
                <Header/>
            </div>
            {/* Hero section video */}
            <div className='heroVideo w-full -mt-[0vw] sm:mt-[1vw] flex items-center justify-center'>                    
                <video 
                        className='videomain w-full h-[100vh] object-cover'
                        src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4"
                        autoPlay
                        loop
                        muted
                    >
                    </video>
                <div className='heroText w-full mt-[8vw] sm:mt-0 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center justify-center'>
                    <div className='flex text-[12vw] leading-[16vw] sm:text-[6.5vw] sm:leading-[8vw] tracking-wide'>
                        <div className='pr-[1vw] overflow-hidden'>
                            <h1>Digital</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1>products</h1>
                        </div>
                    </div>
                    <div className='sm:flex text-[10vw] leading-[14vw] sm:text-[6.5vw] sm:leading-[8vw] tracking-wide'>
                        <div className='pr-[1vw] overflow-hidden'>
                            <h1>creatives &</h1>
                        </div>
                        <div className=' highlightText overflow-hidden flex '>
                            <h1>immersives</h1>
                            <span className='specialTxt text-[#deff00]'><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[2vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                        </div>
                    </div>
                    <div className='herobelowText text-center text-[4.6vw] sm:text-[1.2vw] mt-[8vw] sm:mt-[2vw]'>
                        <div className='overflow-hidden'>
                            <h4>We think and design unique experiences</h4>
                        </div>
                        <div className='overflow-hidden'>
                            <h4>for tomorrow&apos;s innovative products</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
