import React from 'react'

function Social() {
    const data = [
        {title: 'Instagram',},
        {title: 'Facebook',},
        
    ]
  return (
    <div>
        <div className='flex items-center justify-center mb-[8vw]'>
            <div><h4 className='sm:text-[1.2vw]'>/ Follow us</h4></div>
        </div>
        {data.map((item, index) => {
            return (
                <div key={index} className='w-full bg-red-400 flex items-center justify-center'>
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Social
