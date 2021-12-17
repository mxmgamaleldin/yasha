import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headlineRefs = useRef([]);
  headlineRefs.current = [];
  
  const addToRefs = el => {
    if(el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    headlineRefs.current.forEach(headline => {
      gsap.set(headline, {
        opacity: 0
      });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headline,
          start: "20px 85%",
          end: "+=400 center",
          scrub: 1
        }
      })
      .to(headline, { opacity: 1, duration: 1})
      .to(headline, { opacity: 0, duration: 1}, 0.9);      
    });    
  }, [addToRefs.current]);
  
  return (<>
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <h1 className="text-5xl text-white font-semibold">
        Hello, section one!
      </h1>
    </div>
    <div className="bg-white w-full min-h-screen py-64 flex flex-col space-y-44 items-center justify-center">
      <h1 className="text-headline text-cyanblack text-center font-semibold max-w-3xl" ref={addToRefs}>
        Our most advanced dual‑camera system ever.
      </h1>
      <h1 className="text-headline text-cyanblack text-center font-semibold max-w-3xl" ref={addToRefs}>
        Durability that’s front and center. And edge to edge.
      </h1>
      <h1 className="text-headline text-cyanblack text-center font-semibold max-w-2xl" ref={addToRefs}>
        A lightning-fast chip that leaves the competition behind.
      </h1>         
    </div>
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <h1 className="text-5xl text-white font-semibold">
        Hello, section three!
      </h1>
    </div>    
  </>);
}