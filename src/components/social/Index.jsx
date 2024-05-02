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
                <div key={index} className='w-full  flex items-center justify-center'>
                    <div className='w-full py-[1.4vw] flex items-center justify-center'>
                        <h2 className='sm:text-[1.5vw] tracking-wide text-[#828282] font-medium'>{item.title}</h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Social
