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
      className='page4 absolute top-0 left-0 w-full h-full px-[2.5vw]  bg-red-300 text-white overflow-hidden'
    >
      <div className='wrapper flex items-center justify-between'>
        <div className='m-0 flex flex-col items-start justify-between'>
          <div></div>
          <div>
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((item,index) => {
              return (
                <div key={index} className={`ptag ${styles.ptag} `}>
                  <p className='leading-none ' >
                    {item}
                    <div className={`underline ${styles.underline}`}></div>
                  </p>              
                </div>
              )
            })}
          </div>
          <div>
            <p>hello@makepill.com</p>
          </div>
        </div> 

        <div>line</div>

        <div className='content'>content</div>

        <div className='pillImages'>pill</div>
      </div>
    </motion.div>
  )
}

export default Nav
