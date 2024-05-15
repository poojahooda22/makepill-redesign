'use client'

import gsap from 'gsap';
import React, { useEffect, useState, useRef } from 'react'
import { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react';
import style from './style.module.css'
import Image from 'next/image';
import img from '../../../public/image/svg.svg'
import { LuArrowUpRight } from "react-icons/lu";


function Projects() {   
    
    
    const [active, setActive] = React.useState()

    const [activeId, setActiveId] = useState(null);
    const videosRef = useRef([]);


    useEffect(() => {
        const cursor = document.querySelector('.cursor');
    
        const videoDiv = document.querySelectorAll('.pjtFull');

        const seeDiv = document.querySelector('.container');
        
        videoDiv.forEach((videoDiv) => {
            videoDiv.addEventListener('mouseenter', function () {
                cursor.innerHTML = "See project"
                gsap.to(cursor, {
                  width: '140px',
                  height: '140px',
                  duration: 0.5,
                })
            })
            videoDiv.addEventListener('mouseleave', function () {
                cursor.innerHTML = ""
                gsap.to(cursor, {
                  width: '16px',
                  height: '16px',
                  duration: 0.5,
                
                })
            })
        })

        seeDiv.addEventListener('mouseenter', function() {
            cursor.innerHTML = "See project"
            gsap.to(cursor, {
                width: '140px',
                height: '140px',
                duration: 0.5,
                
            })
        })

        seeDiv.addEventListener('mouseleave', function () {
            cursor.innerHTML = ""
            gsap.to(cursor, {
              width: '16px',
              height: '16px',
              duration: 0.5,
            
            })
        })
    })
    

    const data = [
        {
        name: 'BattleHack',
        id: 1,
        id1: 0,
        id2: 1,
        category1: 'UX & UI Design',
        category2: 'Branding',
        category3: 'Motion',
        category4: '+2',
        videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237447/battlehack_reel_vp9_53ef201263.webm'
        },
        {
            name: 'Greenbet',
            id: 2,
            id1: 0,
            id2: 1,
            category1: 'UX Design',
            category2: 'UI Design',
            category3: 'Development',
            videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/greenbet_reel_vp9_01d08c6746.webm'
        },
        {
            name: 'Airbus Gaming',
            id: 3,
            id1: 0,
            id2: 1,
            category1: 'UX Design',
            category2: 'Chara Design',
            category3: '3D',
            category4: '+3',
            videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237449/airbusgaming_reel_vp9_80796a359f.webm'
        },
        {
            name: 'Caption',
            id: 4,
            id1: 0,
            id2: 1,
            category1: 'Branding',
            category2: 'Motion',
            category3: '3D',
            category4: '+1',
            videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/caption_reel_vp9_2afe219f05.webm'
        },
    ]

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.projectSec',
                start: 'top 20%',
                end: 'bottom -50%',
                scrub: 1,
                
            }
        })
        tl.from('.projectVideoDiv', {
            opacity: 0,
            duration: 1,
            ease: Power3.easeOut
        })
        

        // gsap.to('.projectVideoDiv', {
        //     scrollTrigger: {
        //         trigger: '.projectSec',
        //         start: 'top 20%',
        //         end: 'bottom -50%',
        //         scrub: 1,
                
        //     },
        //     opacity: 0,
        // })
    })

    // useEffect(() => {
    //     let currentImageIdd = 1;
    //     const clip = document.querySelectorAll('.pjtFull h1');

    //     clip.forEach(elem => {
    //         elem.addEventListener('mouseenter', () => {
    //             const targetImageId = document.querySelector("data-image");
    //             const videoDiv = document.querySelector(';

    //             gsap.set(mainVideo, {
    //             });

    //             gsap.set(
    //             currentImageIdd = targetImageId;
    //         })
    //     })
        
    // })

    useEffect(() => {
        videosRef.current.forEach((video, index) => {
            gsap.to(video, {
                zIndex: index === activeId ? 10 : 0,
                opacity: index === activeId ? 1 : 0,
                ease: "power4.inOut",
            });
            
        });
    }, [activeId]);

    const handleMouseEnter = (id) => {
        setActiveId(id);
    };

    const handleMouseLeave = () => {
        setActiveId(null);
    };
    


  return (
    <div 
        data-scroll 
        data-scroll-section 
        className='projectSec w-full relative sm:mb-[8vw] mb-[20vw]'
    >
        <div className='' >
                {data.map((item, index) => {
                   return (
                    <div key={index} className='w-full sm:flex sm:flex-col items-center justify-center '>
                        <div  className={`projectVideoDiv ${style.projectVideoDiv} absolute top-0 left-0 w-full h-[180vh] `}>
                            <video  className={`w-full h-full object-cover relative`} 
                             autoPlay
                             ref={el => videosRef.current[index] = el}
                             data-id={item.index}
                            loop muted src={item.videoLink}></video>  
                        </div>
                        <div className={`projectheadDiv w-full sm:w-3/4 sm:flex items-center justify-between z-[9] sm:pt-[6vw] pt-[16vw] px-[5vw] `}>
                            <div   
                                onMouseEnter={() => setActive(item.id)} 
                                onMouseOver={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`pjtFull ${style.pjtFull}  ${active === item.id ? 'text-[#fff]' : 'text-[#333]'} w-full h-full  flex items-center justify-between sm:py-[1vw] `}
                            >
                                <h1 data-image={item.id} className={`text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[6vw] `}>{item.name}</h1>
                                <div className=' flex flex-col sm:items-end gap-[1vw] '>
                                    <div className='projectrightDiv flex items-center gap-[.4vw] text-[1vw]'>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden`}><h3>{item.id1}</h3></div>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden`}> <Image src={img} width={16} height={32} alt="image" className={`spcArr ${style.spcArr}`}/> </div>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden`}><h3>{item.id2}</h3></div>
                                    </div>
                                    <div className='projectDownDiv hidden sm:flex items-center gap-2 whitespace-nowrap'>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden text-[1vw]`}><h3 className=' border-[1px] rounded-full px-[1vw] py-[.2vw]'>{item.category1}</h3></div>  
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden text-[1vw]`}><h3 className=' border-[1px] rounded-full px-[1vw] py-[.2vw]'>{item.category2}</h3></div>  
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden text-[1vw]`}><h3 className=' border-[1px] rounded-full px-[1vw] py-[.2vw]'>{item.category3}</h3></div>  
                                        {item.category4 && <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden text-[1vw]`}><h3 className=' border-[1px] rounded-full px-[1vw] py-[.2vw]'>{item.category4}</h3></div> }   
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                   )
                })}
                <div className={`hidden sm:flex items-center justify-center mt-[3vw] mb-[5vw]`}>
                    <div className={`container ${style.container} w-3/4  px-[5vw] flex items-center justify-between py-[2vw]  text-[#333] hover:text-[#fff] relative`}>
                        <h2 className='text-[5vw]'>See all our projects</h2>
                        <div className={`relative w-[74px] h-[74px] `}>
                            <div className={`arrowDiv ${style.arrowDiv} w-[100%] h-[100%]  absolute top-0 left-0`}>
                                <svg data-v-fa88415f="" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60"><path fill="currentColor" d="M50.017 17.041 7.06 60 0 52.941 42.959 9.983H5.095V0H60v54.905h-9.983V17.04Z"></path></svg>
                            </div>
                            <div className={`arrowDiv1 ${style.arrowDiv1} absolute top-0 left-0`}>
                                <svg data-v-fa88415f="" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60"><path fill="currentColor" d="M50.017 17.041 7.06 60 0 52.941 42.959 9.983H5.095V0H60v54.905h-9.983V17.04Z"></path></svg>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center sm:hidden my-[10vw] pb-[20vw] '>
                        <div className='serviceBtn w-[28vw] h-[28vw] sm:w-[8vw] sm:h-[8vw] rounded-full border-[.8px] border-[#838282] flex items-center justify-center'>
                            <h3 className='sm:text-[.9vw]'>See all</h3>  
                        </div>  
                </div> 
        </div>    
        
    </div>
  )
}

export default Projects
