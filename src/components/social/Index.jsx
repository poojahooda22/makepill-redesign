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
                               {/* <div className={`bgcnt ${style.bgcnt} w-full flex h-[100%] items-center justify-center`}>
                                    <div className={`elem ${stylefull flex mr-[2vw] itr justify-center `}>
                                        <h2 className=' sm:textk
                                        <span className='4vwei" v 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                        <h2 cl' sm:text-[ext-inline-block '>{item.link}</h2>    
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
