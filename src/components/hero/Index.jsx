import React from 'react'
import Header from '../header/Index'

function LandingPage() {
  return (
    <div data-scroll-section className='first w-full h-[100vh]'>
        <div className='page1 relative'>
            <div className=''>
                <Header/>
            </div>
            {/* Hero section video */}
            <div className='heroVideo '>
                <video 
                    className='w-full h-[100vh] object-cover'
                    src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4"
                    autoPlay
                    loop
                    muted
                >
                </video>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
