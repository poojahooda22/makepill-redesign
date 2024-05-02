import React, { useEffect } from 'react'
import gsap from 'gsap';

function Social() {
    const data = [
        {title: 'Instagram', link: '@makepill_agency' },
        {title: 'X/Twitter', link: '@makepill_agency'},
        {title: 'Dribbble', link: '@makepill_agency'},
        {title: 'YouTube', link: '@makepill_agency'},
        {title: 'LinkedIn', link: '@makepill_agency'},
        
    ]

    useEffect(() => {
        const socialLayer = document.querySelector('.socialDiv');

        socialLayer.addEventListener('mousemove', () => {
            gsap.to('.SocialContentLayer', {
                opacity: 1,
            })
        
        })
    })


  return (
    <div className='overflow-hidden w-full h-[100vh]'>
        <div className='flex items-center justify-center mb-[6vw]'>
            <div><h4 className='sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        <div className='relative '>
            {data.map((item, index) => {
                return (
                    <div key={index} className='socialDiv w-full  flex items-center justify-center relative hover:cursor-pointer'>
                        <div className='w-full py-[1.4vw] flex items-center justify-center '>
                            <h2 className='sm:text-[1.7vw] tracking-wide text-[#828282] font-semibold'>{item.title}</h2>                           
                        </div>
                        <div className='SocialContentLayer w-full flex absolute top-0 left-0 py-[1.4vw] bg-[#222222] opacity-0'>
                                <div className='w-full flex gap-[2vw] mr-[2vw] items-center justify-center '>
                                    <h2 className=' sm:text-[1.5vw] tracking-wide block'>{item.title}</h2> 
                                    <span className='text-[#deff00] '><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.2vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h2 className=' sm:text-[1.5vw] text-[#828282] inline-block '>{item.link}</h2>    
                                </div> 
                                <div className='w-full flex gap-[2vw] mr-[2vw] items-center justify-center '>
                                    <h2 className=' sm:text-[1.5vw] tracking-wide  inline-block'>{item.title}</h2> 
                                    <span className='text-[#deff00] '><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.2vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h2 className=' sm:text-[1.5vw] text-[#828282] inline-block '>{item.link}</h2>    
                                </div>
                                <div className='w-full flex gap-[2vw] mr-[2vw] items-center justify-center'>
                                    <h2 className=' sm:text-[1.5vw] tracking-wide inline-block '>{item.title}</h2> 
                                    <span className='text-[#deff00] '><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.2vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h2 className=' sm:text-[1.5vw] text-[#828282]  inline-block'>{item.link}</h2>    
                                </div>
                                <div className='w-full flex gap-[2vw] mr-[2vw] items-center justify-center'>
                                    <h2 className=' sm:text-[1.5vw] tracking-wide inline-block '>{item.title}</h2> 
                                    <span className='text-[#deff00] '><svg xmlns="http://www.w3.org/2000/svg" className='w-[4vw] sm:w-[1.2vw]' width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></span>
                                    <h2 className=' sm:text-[1.5vw] text-[#828282]  inline-block'>{item.link}</h2>    
                                </div>    
                            </div>      
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Social
