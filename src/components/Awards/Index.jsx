'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styles from './Style.module.css'
import { useGSAP } from '@gsap/react'

function AwardsSection() {

    const data = [
        {
            title: 'Awwwards',
            count: 'x2',
            award: 'Site of the Day - Makepill',
            date: '08-31-2023',
            award1: 'Developer Award - Makepill',
            date1: '08-31-2023'
        },
        {
            title: 'The FWA',
            count: 'x1',
            award: 'FWA of the Day - Makepill',
            date: '08-19-2023',
        },
        {
            title: 'CSSDA',
            count: 'x1',
            award: 'Website of the Day - Makepill',
            date: '04-10-2023',
        },
    ]

    const awardsRef = useRef()
    const awardsRef2 = useRef()
    const awardsRef3 = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.awardsSec',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
                markers: true,
            }
        })
        tl.from(awardsRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power4.in'
        })
        tl.from('.rightAwardSecondDiv h4, p', {
            y: 100,
            opacity: 0,
            ease: 'power4.in'
        })
        tl.from(awardsRef3.current, {
            y: 100,
            opacity: 0,
            ease: 'power4.in'
        })
    })

  
  return (
    <div
      data-scroll-section data-scroll-speed=".1"
      className='awardsSec section w-full overflow-hidden py-[6vw]'
    >
        <div className='py-[6vw] sm:py-0 px-[5vw] sm:px-[13vw]  sm:flex items-start justify-between sm:mb-[4vw] '>
            <div  className='leftAwardDiv  '>
                <div className=' sm:space-y-[4vw] pb-[14vw] sm:pb-0 overflow-hidden'>
                    <h4 ref={awardsRef} className='text-[5vw] sm:text-[1.1vw] tracking-wider'>/ Awards & Recognitions</h4>
                </div>  
            </div>
            <div  className='rightAwardDiv w-full sm:w-1/2 mb-[16vw] sm:mb-0 '>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='sm:mb-[2vw] mb-[12vw]'>
                                <div className='rightAwardSecondDiv flex sm:items-end sm:justify-between  sm:mb-[2vw] mb-[12vw] leading-none'>
                                    <div className='overflow-hidden'><h4 ref={awardsRef2}  className='text-[4.5vw] sm:text-[1.4vw]'>{item.title}</h4></div>
                                    <div className='overflow-hidden'><p ref={awardsRef3} className='text-[4.5vw] sm:text-[1.2vw] text-[#deff00] '>{item.count}</p></div>
                                </div>
                                <div className='flex items-end justify-between leading-none'>
                                    <h6 className='text-[4.2vw] sm:text-[1.2vw] '>{item.award}</h6>
                                    <p className='text-[4.2vw] sm:text-[1.2vw] '>{item.date}</p>
                                </div>
                                {item.award1 && (
                                    <div  className='flex  items-end  justify-between mb-[12vw] sm:mb-[2.5vw] space-y-[6vw] sm:space-y-[1.2vw]'>
                                        <h6 className='text-[4.2vw] sm:text-[1.2vw]'>{item.award1}</h6>
                                        <p className='text-[4.2vw] sm:text-[1.2vw]'>{item.date1}</p>
                                    </div>
                                )}
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
