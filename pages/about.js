import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'

export default function About() {
  
  function doAnimation(element) {
    const x = getVisibility(element);
    
    const targets = element.querySelectorAll(".anim");
    Array.from(targets).forEach(target => {
      target.style.animationDelay = (x*-2) + "s";
    })
  }
       
  function getVisibility(element) {
    const viewTop = window.pageYOffset;
    const viewBottom = viewTop + window.innerHeight;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + viewTop;
    const elementBottom = rect.height + elementTop;
    

    if (elementTop >= viewBottom || elementBottom <= viewTop) {
      // higher or lower than viewport
      return 0;
    } else if (elementTop <= viewTop && elementBottom >= viewBottom) {
      // element is completely in viewport and bigger than viewport
      return 1;
    } else if (elementBottom <= viewBottom) {
      if (elementTop < viewTop) {
        // intersects viewport top
        return (elementBottom - viewTop) / window.innerHeight;
      } else {
        // completely inside viewport
        return (elementBottom - elementTop) / window.innerHeight;
      }
    } else {
      // intersects viewport bottom
      return (viewBottom - elementTop) / window.innerHeight;
    }
  }
  
  function handleScroll(event) {
    const nodes = document.querySelectorAll(".scroll-node");
    
    nodes.forEach(node => {
      requestAnimationFrame(() => {
        doAnimation(node);
      })
    })
    
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }, false);
    
    return () => window.removeEventListener("scroll", handleScroll);    
  }, []);
  
  return (
    <>
      <NavBar dark={true} />
      <div className="scroll-root">
        <div className="scroll-node" id="node-1">
          <p className="anim text-5xl font-semibold">Hello, world!</p>
        </div>
        <div className="scroll-node" id="node-2">
          <p className="anim text-5xl font-semibold">Hello, too!</p>
        </div>
        <div className="scroll-node" id="node-3">
          <p className="anim text-5xl font-semibold">Hello, 3!</p>
        </div>      
      </div>
    </>
  )
}