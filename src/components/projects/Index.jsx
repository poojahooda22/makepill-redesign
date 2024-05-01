import React from 'react'

function Projects() {

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
        }
    ]

  return (
    <div className='w-full h-[100vh]'>
        {/* <>
            <v 
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/mkpill/video/upload/v
         */}
        <div className='' >
            <div className='w-full flex items-center justify-center'>
                {data.map((item, index) => {
                   return (
                    <>
                        <div className='absolute top-0 left-0'><video autoPlay loop muted src={item.videoLink}></video></div>
                        <div key={index} className='bg-red-300 w-2/3 flex items-center justify-between'>
                            
                            <h1 className=''>{item.name}</h1>
                            <div className='flex flex-col items-end'>
                                <div className='flex items-center'>
                                    <p>{item.id1}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="none" viewBox="0 0 15 12" data-v-1c16fc4a=""><path fill="currentColor" fill-rule="evenodd" d="M14.709 6.478 15 6.122l-.283-.362L10.58.473l-.904.707 3.411 4.362H.03V6.69H13.05l-3.365 4.108.888.728 4.136-5.048Zm-1.224-.429v.11l.044-.053-.044-.057Z" clip-rule="evenodd"></path></svg>
                                    <p>{item.id2}</p>
                                </div>
                                <div className='flex items-center whitespace-nowrap'>
                                    <div className='border-[1px] rounded-full '><h6>{item.category1}</h6></div>  
                                    <div><h6>{item.category2}</h6></div>  
                                    <div><h6>{item.category3}</h6></div>  
                                    <div><h6>{item.category4}</h6></div>    
                                </div>
                            </div>
                        </div>
                    </>
                   )
                })}
            </div>
        </div>    
        
    </div>
  )
}

export default Projects
