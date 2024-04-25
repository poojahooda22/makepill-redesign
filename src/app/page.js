'use client'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef } from 'react';
import Loader from '@/components/loader/Index';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import LandingPage from '@/components/hero/Index';

export default function Home() {
  const containerRef = useRef(null)

  return (

    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className=" text-white bg-primary-main ">
          {/* Your content here */}
            
          <Loader/>
          <LandingPage/>
        </div>
      </main>
    </LocomotiveScrollProvider>
    
  );
}