'use client'

import { useEffect, useRef } from 'react';
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

export default function Home() {
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

  useEffect(() => {
    const list = document.querySelectorAll('.section')
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      })
    })
  })

  return (
    <main>
      <div ref={scrollRef} className="section text-white font-[mainfont] bg-primary-main ">
        {/* Your content here */}
        <Cursor/> 
        {/* <Loader/> */}
        <LandingPage/>
        <Video/>
        <About/>
        {/* <Projects/>   */}
        <ReverseService/>
        <AwardsSection/>
        <Social/>
      </div>
    </main>

  );
}