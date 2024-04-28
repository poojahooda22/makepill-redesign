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
            <div className='heroVideo w-full flex items-center justify-center'>
                <div className='-mt-[8vw]'>

                </div>
                {/* <video 
                    className='w-full h-[100vh] object-cover'
                    src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4"
                    autoPlay
                    loop
                    muted
                >
                </video> */}

                <div className='w-full mt-[16vw] bg-red-400 z-[10] flex flex-col items-center justify-center'>
                    <div className='flex'>
                        <div>
                            <h1>Digital</h1>
                        </div>
                        <div>
                            <h1>products</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>creatives</h1>
                        </div>
                        <div>
                            <h1>& immersives<span>*</span></h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>We think and design unique experiences</h4>
                        </div>
                        <div>
                            <h4>for tomorrownbsps innovative products</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
