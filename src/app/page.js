'use client'

import { useEffect, useRef } from 'react';
import Loader from '@/components/loader/Index';
import LandingPage from '@/components/hero/Index';
import Video from '@/components/video/Index';
import About from '@/components/services/Index';
import Cursor from '@/components/cursor/Index';



export default function Home() {
  

  return (
    <main data-scroll-container ref={containerRef}>
      <div className=" text-white bg-primary-main ">
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