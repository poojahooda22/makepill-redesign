'use client'

import gsap from 'gsap';
import React, { useEffect, useState, useRef } from 'react'
import { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react';
import style from './style.module.css'

function Projects() {   
    
    
    const [active, setActive] = React.useState()

    const [activeId, setActiveId] = useState(null);
    const videosRef = useRef([]);


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
            videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1691489003/airbusgaming_entry_9439fb4bb5.mp4'
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
    //             const videoDiv = document.querySelector('.projectVideoDiv');
    //             const mainVideo = document.querySelectorAll('.projectVideoDiv video');


    //             gsap.set(mainVideo, {
    //             zIndex: 0,
    //             opacity: 0,
    //             });

    //             gsap.set(`.projectVideoDiv video[data-id='${targetImageId}']`, {
    //             zIndex: 10,
    //             opacity: 1,
    //             ease: "power4.inOut",
    //             })
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
        className='projectSec w-full relative mb-[8vw]'
    >
        <div className='' >
                {data.map((item, index) => {
                   return (
                    <div key={index} className='w-full flex flex-col items-center justify-center '>
                        <div  className={`projectVideoDiv ${style.projectVideoDiv} absolute top-0 left-0 w-full h-[120vh] `}>
                            <video  className={`w-full h-full object-cover relative`} 
                             autoPlay
                             ref={el => videosRef.current[index] = el}
                             data-id={item.index}
                            loop muted src={item.videoLink}></video>  
                        </div>
                        <div className={`hidden projectheadDiv sm:w-2/3 sm:flex items-center justify-between z-[10] sm:pt-[3vw] `}>
                            <div    
                                onMouseEnter={() => setActive(item.id)} 
                                onMouseOver={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`pjtFull ${style.pjtFull}  ${active === item.id ? 'text-[#fff]' : 'text-[#333]'} w-full h-full  flex items-center justify-between py-[1vw] `}
                            >
                                <h1 data-image={item.id} className={`text-[5vw]  `}>{item.name}</h1>
                                <div className=' flex flex-col sm:items-end gap-[1vw] '>
                                    <div className='projectrightDiv flex items-center gap-[.4vw] text-[1vw]'>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden`}><h3>{item.id1}</h3></div>
                                        <div className={`pjtRttxt ${style.pjtRttxt} overflow-hidden`}><svg xmlns="http://www.w3.org/2000/svg" className='w-[1vw]'  width="15" height="12" fill="none" viewBox="0 0 15 12" data-v-1c16fc4a=""><path fill="currentColor" fill-rule="evenodd" d="M14.709 6.478 15 6.122l-.283-.362L10.58.473l-.904.707 3.411 4.362H.03V6.69H13.05l-3.365 4.108.888.728 4.136-5.048Zm-1.224-.429v.11l.044-.053-.044-.057Z" clip-rule="evenodd"></path></svg></div>
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
        </div>    
        
    </div>
  )
}

export default Projects
