import React, { useEffect } from 'react'
import gsap from 'gsap';
import { Power4} from 'gsap/gsap-core';

function Social() {
    const data = [
        {title: 'Instagram', link: '@makepill_agency' },
        {title: 'X/Twitter', link: '@makepill_agency'},
        {title: 'Dribbble', link: '@makepill_agency'},
        {title: 'YouTube', link: '@makepill_agency'},
        {title: 'LinkedIn', link: '@makepill_agency'},     
    ]

    // useEffect(() => {
    //     const socialLayer = document.querySelectorAll('.socialDiv');

    //     socialLayer.forEach((el) => {
    //         el.addEventListener('mousemove', function() {
    //             gsap.to(this.querySelector(".SocialContentLayer"), {
    //               opacity: '100%', 
    //               ease: Power4,
    //               duration: .1
    //             })
    //             gsap.to(this.querySelector('.socialh2'), {
    //                 y: -50,
    //                 duration: .5,
    //                 ease: Power4,
    //             })
    //           })
    //           el.addEventListener('mouseleave', function() {
    //             gsap.to(this.querySelector(".SocialContentLayer"), {
    //               opacity: '0%',  
    //               ease: Power4, 
    //               duration: .1
    //             })
    //               gsap.from(this.querySelector('.socialh2'), {
    //                 y: -50,
    //                 ease: Power4,
    //             })
    //           }) 
    //     })
        
    // })


  return (
    <div className='overflow-hidden w-full h-[100vh]'>
        <div className='flex items-center justify-center mb-[6vw]'>
            <div><h4 className='sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        <div className='relative '>
            {data.map((item, index) => {
                return (
                    <div key={index} className='socialDiv w-full  flex items-center justify-center relative hover:cursor-pointer'>
                        <div className='w-full py-[1.4vw] flex items-center justify-center overflow-hidden '>
                            <h2 className='socialh2 sm:text-[1.7vw] tracking-wide text-[#828282] font-semibold'>{item.title}</h2>                           
                        </div>
                       
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Social
