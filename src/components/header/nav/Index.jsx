import { motion } from 'framer-motion';
import { height } from '../anime';
import styles from './Style.module.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from "next/link";


function Nav() {

  const data = [
    {
      title: 'Home',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm'
    },
    {
      title: 'Works',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/works_x1_vp9_801e93b806.webm'
    },
    {
      title: 'Services',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/expertises_x1_vp9_11ee1f3431.webm'
    },
    {
      title: 'Contact',
      link: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_vp9_cc7a99e029.webm'
    },
    {
      title: 'Vision',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_vp9_af33c15d4f.webm'
    }

  ]

  useEffect(() => {
    function lerp(start, end, t) {
      return start * (1-t) + end * t;
    }
    const linksContainer = document.querySelector('.links');
    let currentScroll = 0;

  })

  // useEffect(() => {
  //   gsap.to(".page4 .underline", {
  //     "--width": "100%",
  //     scrollT      
  // })

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
      className='page4 absolute top-0 left-0 w-full h-full bg-black px-[2.5vw] text-white overflow-hidden'
    >
      <div className='wrapper flex items-center justify-between py-[2vw] overflow-hidden'>
        <div className='m-0 w-1/5 flex flex-col items-start justify-between gap-[13.5vw] border-r-[.02vw] border-[#333] '>
          <div>
            <Link href="/"> 
                <h2 className='text-[4.5vw] sm:text-[1.3vw] font-semibold
                  tracking-wider leading-[2vw]'
                >makepill</h2>
              </Link></div>
          <div>
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((item,index) => {
              return (
                <div key={index} className={`ptag ${styles.ptag} pb-[1.5vw]`}>
                  <p className='leading-none sm:text-[1.1vw] ' >
                    {item}
                    <div className={`underline ${styles.underline}  `}></div>
                  </p>              
                </div>
              )
            })}
          </div>
          <div>
            <p className='sm:text-[.8vw] underline'>hello@makepill.com</p>
          </div>
        </div> 

        <div className='menu w-2/3 flex items-center justify-between relative'>
          <div className=''>
            {
              ['Home', 'Works', 'Services', 'Contact', 'Vision', 'Home',
              'Works', 'Services', 'Contact', 'Vision', 'Home'
              ].map((item, index) => 
              {
                return (
                  <div key={index} className='links  overflow-hidden'>
                    <div className='link'>
                      <p className={`${styles.textmain} textmain sm:text-[2.5vw] text-[#333]`}>{item}</p>
                    </div>
                  </div>
                )
            })}
          </div>
          <div className={`pill ${styles.pill} w-[22vw] h-[100%] absolute top-[50%] right-[10%] -translate-y-1/2 `}>
            <video autoplay loop muted className={`${styles.img} img w-full h-full object-fit`} data-id="1"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm"
            ></video>
            <video autoplay loop muted className={`${styles.img} img w-full h-full object-fit`} data-id="2"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/works_x1_vp9_801e93b806.webm"
            ></video>
            <video autoplay loop muted className={`${styles.img} img w-full h-full object-fit`} data-id="3"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/expertises_x1_vp9_11ee1f3431.webm"
            ></video>
            <video autoplay loop muted className={`${styles.img} img w-full h-full object-fit`} data-id="4"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_vp9_cc7a99e029.webm"
            ></video>
            <video autoplay loop muted className={`${styles.img} img w-full h-full object-fit`} data-id="5"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_vp9_af33c15d4f.webm"
            ></video>
          </div>        
        </div> 
      </div>
    </motion.div>
  )
}

export default Nav
