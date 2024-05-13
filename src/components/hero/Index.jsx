'use client'

import React, { useEffect } from 'react'
import Header from '../header/Index'
import { gsap } from 'gsap'
import Image from 'next/image';
import img from '../../../public/image/svg1.svg'

function LandingPage() {

  return (
    <div data-layout-theme="dark" data-scroll data-scroll-section  className='first section w-full overflow-hidden relative'>
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
                            <span className='specialTxt'><Image src={img} width={32} height={32} alt="image"/></span>
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
