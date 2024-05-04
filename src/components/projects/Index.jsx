import gsap from 'gsap';
import React, { useEffect } from 'react'
import { Power3 } from 'gsap';


function Projects() {
    // useEffect(() => {
    //     const divProject = document.querySelector('.projectheadDiv');
    //     divProject.addEventLisr('mouseenter', () => {
    //         gsap.froojeight > div', {
    //             y: 1
    //             opac
    //             sta: .2,
    //             eas            
    //         })
    //         gsa
    //             y: 
    //             o 0,
    //             s,
    //                       
    //         })
    //         gsap.to', {
    //             op 0,
    //             st .2,
    //             ease            
    //         })
    //     })
    // })

    const data = [
        {
        name: 'BattleHack',
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
            id1: 0,
            id2: 1,
            category1: 'UX Design',
            category2: 'UI Design',
            category3: 'Development',
            // videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/greenbet_reel_vp9_01d08c6746.webm'
        },
        {
            name: 'Airbus Gaming',
            id1: 0,
            id2: 1,
            category1: 'UX Design',
            category2: 'Chara Design',
            category3: '3D',
            category4: '+3',
            // videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1691489003/airbusgaming_entry_9439fb4bb5.mp4'
        },
        {
            name: 'Caption',
            id1: 0,
            id2: 1,
            category1: 'Branding',
            category2: 'Motion',
            category3: '3D',
            category4: '+1',
            // videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/caption_reel_vp9_2afe219f05.webm'
        },
    ]

  return (
    <div className='w-full min-h-[100vh] relative'>
        <div className='' >
                {data.map((item, index) => {
                   return (
                    <div key={index} className='w-full flex flex-col items-center justify-center '>
                        <div className='projectVideoDiv absolute top-0 left-0 w-full h-[100vh] opacity-1 '>
                            <video className='w-full h-full object-cover' autoPlay loop muted src={item.videoLink}></video>
                            <div  className='absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-black-500 to-transparent'></div>
                        </div>
                        <div key={index} className='projectheadDiv w-2/3 flex items-center justify-between z-[10] pt-[5vw] hover:cursor-pointer hover:text-[#fff] '>
                            <h1 className='text-[5vw] text-[#333] '>{item.name}</h1>
                            <div className='flex flex-col items-end gap-[1vw]'>
                                <div className='projectrightDiv flex items-center gap-[.4vw] text-[1vw]'>
                                    <div className='overflow-hidden'><p>{item.id1}</p></div>
                                    <div className='overflow-hidden'><svg xmlns="http://www.w3.org/2000/svg" className='w-[1vw]'  width="15" height="12" fill="none" viewBox="0 0 15 12" data-v-1c16fc4a=""><path fill="currentColor" fill-rule="evenodd" d="M14.709 6.478 15 6.122l-.283-.362L10.58.473l-.904.707 3.411 4.362H.03V6.69H13.05l-3.365 4.108.888.728 4.136-5.048Zm-1.224-.429v.11l.044-.053-.044-.057Z" clip-rule="evenodd"></path></svg></div>
                                    <div className='overflow-hidden'><p>{item.id2}</p></div>
                                </div>
                                <div className='projectDownDiv flex items-center gap-2 whitespace-nowrap'>
                                    <div className='overflow-hidden border-[1px] rounded-full text-[1vw] px-[1vw] py-[.2vw]'><h6>{item.category1}</h6></div>  
                                    <div className='overflow-hidden border-[1px] rounded-full text-[1vw] px-[1vw] py-[.2vw]'><h6>{item.category2}</h6></div>  
                                    <div className='overflow-hidden border-[1px] rounded-full text-[1vw] px-[1vw] py-[.2vw]'><h6>{item.category3}</h6></div>  
                                    {item.category4 && <div className='overflow-hidden border-[1px] rounded-full text-[1vw] px-[1vw] py-[.2vw]'><h6>{item.category4}</h6></div> }   
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
