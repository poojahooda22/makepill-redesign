'use client'

import { useEffect, useRef, useState } from 'react';
import Loader from '@/components/loader/Index';
import LandingPage from '@/components/hero/Index';
import Video from '@/components/video/Index';
import About from '@/components/services/Index';
import Cursor from '@/components/cursor/Index';
import LocomotiveScroll from 'locomotive-scroll';
import Projects from '@/components/projects/Index';
import ReverseService from '@/components/ReverseService/Index';
import AwardsSection from '@/components/Awards/Index';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Social from '@/components/social/Index';
import Footer from '@/components/footer/Index';
import { createContext } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import Cursor1 from '@/components/cursor1/Index';

export default function Home() {

  const ThemeContext = createContext('light');
  const [theme, setTheme] = useState('dark'); 
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useGSAP(()=>{
    gsap.to(".header",{
      color: "#000",
      scrollTrigger:{
        trigger: '.aboutSec .rightDiv',
        start: 'top 30%',
        end: 'top 30%',
        scrub:3,
      }
    })
    gsap.to(".header",{
      color: "#fff",
      scrollTrigger:{
        trigger: '.aboutSec .rightDiv',
        start: 'top -30%',
        end: 'top -30%',
        scrub:3,
      }
    })
  })

  return (
    <main>
      <div 
        ref={scrollRef} 
        value={theme} 
        className="section text-white font-[mainfont] bg-primary-main "
      >
        {/* Your content here */}
        <Cursor1/>
        {/* <Loader/> */}
        <LandingPage/>
        <Video/>
        <About/>
        <Projects/>  
        <ReverseService/>
        <AwardsSection/>
        <Social/>
        <Footer/>
      </div>
    </main>

  );
}