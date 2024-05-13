'use client'

import gsap from 'gsap'
import React, { useEffect,  useRef } from 'react'
import styles from './Style.module.css'
import { useGSAP } from '@gsap/react'

function ReverseService() {

    // const [color, setColor] = React.useState('#0f0f0f');
    // const [textColor, setTextColor] = React.useState('#fff');
  
    // const handleBackgroundChange = () => {
    //   setColor("#fff");
    //   setTextColor('black')
    // };
  
    // const removeBackgroundChange = () => {
    //   setColor("#0f0f0f");
    //   setTextColor('white')
    // }
  

    const serviceRef = useRef();
    const serviceRef2 = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.serviceSec .reverseLeftDiv',
            start: 'top 90%',
            end: 'top 30%',
            scrub:3,
        }, 
        });
        
        tl.from(serviceRef2.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power4.in'
        })
        
        tl.from('.serviceReversetxt h1', {
        y: 100,
        opacity: 0,
        stagger: 0.4,
        duration: 1,
        }, 'a')
        tl.from('.rightDivvideo video', {
        x: 100,
        opacity: 0,
            duration: 1,
        }, 'a')
        tl.from('.reverseServicep', {
            x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power4.in'
        })  
        gsap.to(serviceRef.current,{
            background: "#fff",
            color: "#000",
            scrollTrigger:{
              trigger: '.serviceSec',
              start: 'top 30%',
              
              end: 'top 30%',
              scrub:3,
            }
          },[serviceRef.current])
      
          gsap.to(serviceRef.current,{
            background: "#0f0f0f",
            color: "#fff",
            scrollTrigger:{
              trigger: '.serviceSec',
              start: 'top -70%',
              end: 'top -10%',
              scrub:3,
            }
          },[serviceRef.current])
    })

  
  return (
    <div  ref= {serviceRef} id='serviceRef'  data-layout-theme="light"
      data-scroll-section data-scroll-speed=".1" 
      className='serviceSec section w-full py-[4vw] overflow-hidden '
        // style={{background: color, color: textColor}}
        // onMouseEnter={handleBackgroundChange}
        // onMouseLeave={removeBackgroundChange}
    >
        <div className='py-[6vw] sm:py-0 flex flex-col-reverse sm:flex-row items-center justify-between px-[5vw] sm:px-[2.5vw] sm:mb-[4vw]'>
            <div className='reverseLeftDiv w-full sm:w-2/3  sm:px-0 mb-[5vw] sm:mb-0'>
                <div className=' sm:space-y-[4vw] space-y-[12vw] pl-0 sm:pl-[10vw] px-[5vw] '>
                    <div ref={serviceRef2} className='overflow-hidden'><h4   className='text-[5vw] sm:text-[1.1vw] tracking-wider'>/ Our culture</h4></div>
                    <div className='serviceReversetxt text-[6vw] sm:text-[2.3vw] font-medium tracking-wide sm:leading-[3vw]'>
                        <div className='overflow-hidden'>
                            <h1>Human values and high standards</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1>are core components of our teams&apos;s</h1>
                        </div>
                        <div className='mb-[12vw] sm:mb-[4vw] overflow-hidden'>
                            <h1>
                            philosophy and culture
                            </h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1>
                            Whether PM/PO*, designers or
                            </h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1>
                                developers, we all strive for
                            </h1>
                        </div>
                        <div className='overflow-hidden'><h1>excellence in designing ambitious,</h1></div> 
                        <div className='overflow-hidden'><h1>innovative projects.</h1></div> 
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start '>
                        <div className='serviceBtn w-[28vw] h-[28vw] sm:w-[8vw] sm:h-[8vw] rounded-full border-[.8px] border-[#d9d9d9] flex items-center justify-center'>
                            <h3 className='sm:text-[.9vw]'>Our values</h3>  
                        </div>  
                    </div>  
                </div>  
            </div>
            <div className='reverseRightDiv  sm:w-1/2 flex items-center justify-center  mb-[16vw] sm:mb-0 '>
                <div className='rightDivvideo h-[70vw] sm:h-[30vw] mt-[10vw] sm:mt-0'>
                    <video 
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                    src="https://res.cloudinary.com/mkpill/video/upload/v1691752606/ai_pill_5352472919.webm"></video>
                </div>
            </div>
        </div> 
        <div className='overflow-hidden' ><h3 className='reverseServicep mt-[10vw] px-[5vw] sm:pl-[12.5vw] text-[5vw] sm:text-[1.1vw] tracking-wider'>/ Our clients</h3></div>
        <div className='my-[24vw] sm:my-[4vw] space-y-[1vw]'>    
            <div className={`elem ${styles.elem} flex items-center`}>
                {['Seela', 'Airbus', 'Sportfunding', 'LVMH', 'Flexyroom', 'Push&Sell', 'Seela', 'Airbus', 'Sportfunding', 'LVMH', 'Flexyroom', 'Push&Sell'].map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='text-[12vw] sm:text-[4.4vw] tracking-wide whitespace-nowrap mr-[10vw] sm:mr-[5vw]'>
                                <h1>{item}</h1>   
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`elem2 ${styles.elem2} flex items-center`}>
                {['Heineken', 'Curator studio', 'Silicom', 'BattleH4ck', 'Proph3cy', 'Heineken', 'Curator studio', 'Silicom', 'BattleH4ck', 'Proph3cy'].map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='text-[12vw] sm:text-[4.4vw] tracking-wide whitespace-nowrap mr-[10vw] sm:mr-[5vw]'>
                                <h1>{item}</h1>   
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`elem ${styles.elem} flex items-center`}>
                {['Seela', 'Airbus', 'Sportfunding', 'LVMH', 'Flexyroom', 'Push&Sell', 'Seela', 'Airbus', 'Sportfunding', 'LVMH', 'Flexyroom', 'Push&Sell'].map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='text-[12vw] sm:text-[4.4vw] tracking-wide whitespace-nowrap mr-[10vw] sm:mr-[5vw]'>
                                <h1>{item}</h1>   
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
    </div>
  )
}

export default ReverseService
