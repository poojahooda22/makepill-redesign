import React from 'react'

function Footer() {
  return (
    <div className='w-full relative pt-[8vw] sm:pt-[5vw]'>
      <div className='w-full flex items-center justify-center relative pb-[5vw]'>
        <div className='w-[80vw] sm:w-[20vw] rotate-[10deg] sm:rotate-0'>
          <video className='w-full h-full object-cover' autoPlay loop muted src="https://res.cloudinary.com/mkpill/video/upload/v1689376834/footer_x1_vp9_4d2ebedd3d.webm"></video>
        </div>
        <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3'>
          <div className='flex flex-col items-center justify-center gap-[2vw]'>
            <h1 className='text-[10vw] sm:text-[7.2vw] border-b-[1px] sm:border-none'>Brief us now</h1>
            <h2 className='text-[5vw] text-center sm:text-[1.3vw]'>Let&apos;s build now together your tomorrow&apos;s project.</h2>
          </div>
        </div>
      </div>

      <div className='footerbtm px-[5vw] sm:px-[2.5VW] space-y-[4vw]'>
        <div className='top flex items-center justify-between font-semibold'>
          <div className='text-[5vw] sm:text-[.9vw] space-y-[.4vw]'>
            <h3 className='text-[#828282]'>/ Contact us</h3>
            <h3 className='border-b-[.1vw]'>hello@makepill.com</h3>
          </div>
          <div className='text-[5vw] sm:text-[.9vw] space-y-[.4vw]'>
            <h3 className='text-[#828282] text-right'>/ Based in</h3>
            <h3>Paris & remote</h3>
          </div>
        </div>
        <div className='bottom flex items-center justify-between pb-[2vw] sm:text-[.9vw] font-semibold'>
          <div className='flex items-center gap-[1vw] text-[#828282] '>
            <h3>Credits</h3>
            <h3>Mentions</h3>
          </div>
          <div>
            <h3>Français / <span className='text-[#828282]'>English</span></h3>
          </div>
          <div>
            <h3>Our projects</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
