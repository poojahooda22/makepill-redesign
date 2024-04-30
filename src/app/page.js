'use client'

import { useEffect, useRef } from 'react';
import Loader from '@/components/loader/Index';
import LandingPage from '@/components/hero/Index';
import Video from '@/components/video/Index';
import About from '@/components/services/Index';
import Cursor from '@/components/cursor/Index';
import LocomotiveScroll from 'locomotive-scroll';


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

  return (
    <main>
      <div ref={scrollRef} className=" text-white font-[mainfont] bg-primary-main ">
        {/* Your content here */}
        <Cursor/> 
        <Loader/>
        <LandingPage/>
        <Video/>
        <About/>           
      </div>
    </main>

  );
}