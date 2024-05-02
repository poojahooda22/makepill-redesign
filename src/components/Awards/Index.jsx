import gsap from 'gsap'
import React, { useEffect } from 'react'
import styles from './Style.module.css'
// const white = {background: 'white', color: '#0f0f0f'}
// const black = {background: '#0f0f0f', color: 'white'}

function AwardsSection() {

    const data = [
        {
            title: 'Awwwards',
            count: 'x2',
            award: 'Site of the Day - Makepill',
            date: '08-31-2023'
        },
    ]

  
  return (
    <div
      data-scroll-section data-scroll-speed=".1" 
      className='serviceSec w-full overflow-hidden '
    >
        <div className='py-[6vw] sm:py-0  sm:flex items-center justify-between sm:px-[2.5vw] sm:mb-[4vw]'>
            <div className='rightDiv sm:w-2/3 px-[5vw] sm:px-0 '>
                <div className=' sm:space-y-[4vw] space-y-[12vw] pl-[10vw]'>
                    <h4 className='text-[5vw] sm:text-[1.1vw] tracking-wider'>/ Awards & Recognitions</h4>
                </div>  
            </div>
            <div className='leftDiv sm:w-1/2 flex items-center justify-center mb-[16vw] sm:mb-0 '>
                {/* <div className='leftvideo h-[70vw] sm:h-[30vw] '>
                    <video 
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                    src="https://res.cloudinary.com/mkpill/video/upload/v1691752606/ai_pill_5352472919.webm"></video>
                </div> */}

                <div>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.count}</p>
                                </div>
                                <div>
                                    <h6>{item.award}</h6>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> 
        
    </div>
  )
}

export default AwardsSection
