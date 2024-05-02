import React from 'react'

function Social() {
    const data = [
        {title: 'Instagram',},
        {title: 'X/Twitter',},
        {title: 'Dribbble',},
        {title: 'YouTube',},
        {title: 'LinkedIn',},
    ]


  return (
    <div>
        <div className='flex items-center justify-center mb-[8vw]'>
            <div><h4 className='sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        <div className='relative '>
            {data.map((item, index) => {
                return (
                    <div key={index} className='w-full  flex items-center justify-center relative hover:cursor-pointer'>
                        <div className='w-full py-[1.4vw] flex items-center justify-center'>
                            <h2 className='sm:text-[1.5vw] tracking-wide text-[#828282] font-semibold'>{item.title}</h2>
                        </div>
                        <div className='bg-green-400 w-full absolute top-0 left-0 py-[1.4vw]'>
                            
                            <div className='flex '>
                                <h2>Instagram</h2>
                                <h2><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none" viewBox="0 0 23 23" data-v-9f3306fa=""><path fill="currentColor" d="M6.629 22.5 3.25 20.091l4.714-6.985L.5 10.456l1.414-3.693L9.38 9.252V.5h4.242v8.752l7.465-2.49 1.414 3.694-7.464 2.65 4.714 6.985-3.379 2.409-4.871-7.387L6.629 22.5Z"></path></svg></h2>
                                <h2>@makepill_agency</h2>
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
