import React from 'react'
import Header from '../header/Index'

function LandingPage() {
  return (
    <div data-scroll-section className='first w-full h-[100vh] overflow-x-hidden'>
        <div className='page1 relative'>
            <div className='relative z-[999]'>
                <Header/>
            </div>
            {/* Hero section video */}
            <div className='heroVideo w-full -mt-[12vw] sm:-mt-[8vw] flex items-center justify-center'>                    
                <video 
                        className='w-full h-[100vh] object-cover'
                        src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4"
                        autoPlay
                        loop
                        muted
                    >
                    </video>
                <div className='w-full absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center justify-center'>
                    <div className='flex  sm:text-[6.5vw] sm:leading-[8vw] tracking-tighter'>
                        <div className='pr-[1vw]'>
                            <h1>Digital</h1>
                        </div>
                        <div>
                            <h1>products</h1>
                        </div>
                    </div>
                    <div className='flex sm:text-[6.5vw] sm:leading-[8vw] tracking-tighter'>
                        <div className='pr-[1vw]'>
                            <h1>creatives &</h1>
                        </div>
                        <div>
                            <h1>immersives<span className='text-[#deff00]'>*</span></h1>
                        </div>
                    </div>
                    <div className='text-center sm:text-[1.2vw] mt-[2vw]'>
                        <div>
                            <h4>We think and design unique experiences</h4>
                        </div>
                        <div>
                            <h4>for tomorrow's innovative products</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
