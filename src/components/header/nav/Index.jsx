'use client'

import { motion } from 'framer-motion';
import { height } from '../anime';
import styles from './Style.module.css'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from "next/link";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

function Nav() {

  const [currentImageId, setCurrentImageId] = useState();


  const data = [
    {
      id: 1,
      title: 'Home',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm'
    },
    {
      id: 2,
      title: 'Works',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/works_x1_vp9_801e93b806.webm'
    },
    {
      id: 3,
      title: 'Services',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377144/expertises_x1_vp9_11ee1f3431.webm'
    },
    {
      id: 4,
      title: 'contact',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_vp9_cc7a99e029.webm'
    },
    {
      id: 5,
      title: 'Vision',
      image: 'https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_vp9_af33c15d4f.webm'
    },
  ]

    // useEffect(() => {
  //     function lerp(start, end, t) {
  //       return start * (1-t) + end * t;
  //     }
  //     const linksContainer = document.querySelector('.links');
  //     let currentScroll = 0;
  //     let targetScroll = 0;
  //     const ease = 0.1;
  
  //     // document.addEventListener('mousemove', (e) => {
  //     //   const extraHeight = linksContainer.offsetHeight - window.innerWidth;
  //     //   targetScroll = (e.clientY / window.innerHeight);
  //     // });
  
  //     // function animate() {
  //     //   currentScroll = lerp(currentScroll, targetScroll, ease);
  //     //   linksContainer.style.transform = `translateY(${currentScroll}px)`;
  //     //   requestAnimationFrame(animate);
  //     // }
  //     // animate();
  
  //     let currentImageIdd = 1;
  //     const textElem =  document.querySelectorAll('.link a');
  //     setCurrentImageId(textElem)
  //     console.log(currentImageId);
  //     textElem.forEach((link) => {
  //       link.addEventListener("mouseenter", function() {
  //         const targetImageId = parseInt(this.getAttribute("data-image"));
          
  //         let rotationValue = targetImageId < currentImageIdd ? 180 : 180;
         
  //         // setCurrentImageId(targetImageId);
  //         // console.log(currentImageId)
  
  //         const pill = document.querySelector('.pill');
  //         const images = document.querySelectorAll('.pill .img');
  
  //         gsap.to(pill, {
  //           rotation: rotationValue,
  //           duration: 0.4,
  //           onComplete: function () {
  //             gsap.set(pill, {
  //               rotation: 0,
  //             });
  //           },
  //         });
  
  //         gsap.set(images, {
  //           zIndex: 0,
  //           opacity: 0,
  //           rotation: 0,
  //         });
  
  //         gsap.set(`.pill .img[data-id='${targetImageId}']`, {
  //           zIndex: 10,
  //           opacity: 1,
  //           rotation: 0,
  //           ease: "power4.inOut",
  //         })
  //         currentImageIdd = targetImageId;
  //       })
  //     })

  // })

  
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
      className='page4 absolute top-0 left-0 w-full bg-black pl-[5vw] pt-[4vw] sm:pt-0  sm:px-[2.5vw] text-white overflow-hidden'
    >
      <div className='wrapper flex items-center justify-between py-[2vw] overflow-hidden '>
        <div className='m-0 w-1/5 h-[95vh] flex flex-col items-start justify-between sm:gap-[13.5vw] sm:border-r-[.02vw] border-[#333] '>
          <div>
            <Link href="/"> 
                <h2 className='text-[4.5vw] sm:text-[1.3vw] font-semibold
                  tracking-wider leading-[2vw]'
                >makepill</h2>
            </Link>
          </div>
          <div className='hidden sm:inline-block'>
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((item,index) => {
              return (
                <div key={index} className={`ptag pb-[1.5vw]`}>
                  <p className='leading-none sm:text-[1.1vw] ' >
                    {item}
                    <div className={`underline `}></div>
                  </p>              
                </div>
              )
            })}
          </div>
          <div>
            <p className='sm:text-[.8vw] underline'>hello@makepill.com</p>
          </div>
        </div> 

        <div className='menu w-2/3 h-[90vh] flex items-center justify-between relative '>
        <div  className='links  overflow-hidden -ml-[32vw] sm:ml-0'>
            {data.map((item, index) => (
              <div key={index}>
                <div className='link flex flex-col gap-10'>
                  <a href={`#${index}`} id={`${index}`}  className={` textmain text-[10vw] sm:text-[4.5vw] text-[#333]`}>
                    {item.title}
                  </a>
                </div>

                <div  className={`pill  w-[50vw] sm:w-[22vw] h-[100%] absolute top-[50%] right-[-16%] sm:right-[10%] -translate-y-1/2 `}>
                  <video
                    autoPlay 
                    loop 
                    muted 
                    className={` img w-full h-full rotate-0 object-fit `} id={`${index}`}
                    src={`${item.image}`}
                  ></video>
                </div>    
              </div>
            ))} 
           </div> 
          </div>  

          {/* <div  className={`pill ${styles.pill} w-[50vw] sm:w-[22vw] h-[100%] absolute top-[50%] right-[-16%] sm:right-[10%] -translate-y-1/2 `}>
            <video
              autoPlay 
              loop 
              muted 
              className={`${styles.img} img w-full h-full rotate-0 object-fit `} data-id="1"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/index_x1_vp9_2cf8cc21e4.webm"
            ></video>
            <video autoPlay loop muted className={`${styles.img} img w-full h-full rotate-0 object-fit`} data-id="2"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/works_x1_vp9_801e93b806.webm"
            ></video>
            <video autoPlay loop muted className={`${styles.img} img w-full h-full  rotate-0 object-fit `} data-id="3"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377144/expertises_x1_vp9_11ee1f3431.webm"
            ></video>
            <video autoPlay loop muted className={`${styles.img} img w-full h-full rotate-0 object-fit`} data-id="4"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377143/contact_x1_vp9_cc7a99e029.webm"
            ></video>
            <video  autoPlay loop muted className={`${styles.img} img w-full h-full rotate-0 object-fit`} data-id="5"
              src="https://res.cloudinary.com/mkpill/video/upload/v1689377143/about_x1_vp9_af33c15d4f.webm"
            ></video>
          </div>         */}
        
      </div>
    </motion.div>
  )
}

export default Nav
