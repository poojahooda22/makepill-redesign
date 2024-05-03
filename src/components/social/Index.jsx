import React, { useEffect } from 'react'
import gsap from 'gsap';
import { Power4} from 'gsap/gsap-core';
import style from './Style.module.css'


function Social() {
    const data = [
        {title: 'Instagram', link: '@makepill_agency' },
        {title: 'X/Twitter', link: '@makepill_agency'},
        {title: 'Dribbble', link: '@makepill_agency'},
        {title: 'YouTube', link: '@makepill_agency'},
        {title: 'LinkedIn', link: '@makepill_agency'},     
    ]


  return (
    <div className='overflow-hidden w-full h-[100vh]'>
        <div className='flex items-center justify-center mb-[6vw]'>
            <div><h4 className='sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        <div className='relative '>
            {data.map((item, index) => {
                return (
                    <div key={index} className='socialDiv w-full  flex items-center justify-center relative hover:cursor-pointer]'>
                        <div className='SocialContentLayer z-[2] w-[100%] h-[100%] absolute bottom-0 left-0 border-[1px] py-[1.4vw] overflow-hidden opacity-1'>
                               {/* <div className={`bgcnt ${style.bgcnt}[100%] items-center justify-center`}>
                                    <div className={`elem ${st[2vw] ittr `}>
                                        <h2 className=' s
                                        <span className='4<patne-blo}</h2>    
                                    </div>  
                                </div>    */}
                        </div> 
                        <div className='socialh2 w-full py-[1.4vw] z-[1] flex items-center justify-center overflow-hidden relative  '>
                            <h2 className=' sm:text-[1.7vw] tracking-wide text-[#828282] font-semibold'>{item.title}</h2>                        
                        </div>
                           
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Social
