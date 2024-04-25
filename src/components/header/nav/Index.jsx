import { motion } from 'framer-motion';
import { height } from '../anime';
import styles from './Style.module.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';




function Nav() {

  const data = [
    {
      title: 'Home',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm'
    },
    {
      title: 'Works',
      link: ''
    },
    {
      title: 'Services',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/expertises_'
    },
    {
      title: 'Contact',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_hev1527d1e.mp4'
    },
    {
      title: 'Vision',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_hevc_46ec02e0f6.mp4'
    }

  ]

  useEffect(() => {
    gsap.to(".page4 .underline", {
      "--width": "100%",
      scrollTrigger: {
        trigger: ".page4 .underline",    
        scrub: 2,
      }
    });
  })

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
      className='page4 absolute top-0 left-0 w-full h-full bg-black px-[2.5vw] text-white overflow-hidden'
    >
      <div className='wrapper flex items-center justify-between'>
        <div className='m-0 w-1/5 flex flex-col items-start gap-40 border-r-[.02vw] border-[#333]'>
          <div></div>
          <div>
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((item,index) => {
              return (
                <div key={index} className={`ptag ${styles.ptag} pb-[1vw]`}>
                  <p className='leading-none sm:text-[1.3vw] ' >
                    {item}
                    <div className={`underline ${styles.underline}  `}></div>
                  </p>              
                </div>
              )
            })}
          </div>
          <div>
            <p className='sm:text-[1vw]'>hello@makepill.com</p>
          </div>
        </div> 

        <div className='menu w-2/3 flex items-center justify-between'>
          <div className='overflow-hidden'>
            {
              ['Home', 'Works', 'Services', 'Contact', 'Vision', 'Home',
              'Works',  
              ].map((item, index) => 
              {
                return (
                  <div key={index} className='links'>
                    <p className='link sm:text-[2.5vw]'>{item}</p>
                  </div>
                )
            })}
          </div>
          <div className='pill w-[22vw]'>
            <video autoplay loop muted className='image w-full h-full object-fit' data-id="1"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm"
            ></video>
          </div>        
        </div> 
      </div>
    </motion.div>
  )
}

export default Nav
