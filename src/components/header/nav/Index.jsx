import { motion } from 'framer-motion';
import { height } from '../anime';
import styles from './Style.module.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';


function Nav() {

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
      className='page4 absolute top-0 left-0 w-full h-full px-[2.5vw] text-white overflow-hidden'
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

        <div className='content w-2/3 flex items-center justify-between'>
          <div className='overflow-hidden'>
            {
              ['Home', 'Works', 'Services', 'Contact', 'Vision', 'Home',
              'Works', 'Services', 'Contact', 'Vision', 'Home', 'Works', 
              'Services', 'Contact', 'Vision'
              ].map((item, index) => 
              {
                return (
                  <div key={index}>
                    <p className='sm:text-[2.5vw]'>{item}</p>
                  </div>
                )
            })}
          </div>
          <div className='pillImages'>
              <video autoplay loop muted className='image' data-id="1"
                src="https://res.cloudinary.com/mkpill/video/upload/v1689377143/index_x1_hevc_00117f587b.mp4"
              ></video>
          </div>        
        </div> 
      </div>
    </motion.div>
  )
}

export default Nav
