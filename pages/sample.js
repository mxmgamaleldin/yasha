import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import FadeInSection from '../components/FadeInSection'
import ABTest from '../components/ABTest'
import Footer from '../components/Footer'


export default function Sample() {
  const [interactionToggle, setInteractionToggle] = useState(0);
  
  return (
    <>
      <Head>
        <title>About YASHA</title>
      </Head>    
      <NavBar dark={true} />
    
      <div className="scroll-wrapper">
        <div className="scroll-section">
          <div className="flex flex-col justify-around py-16 lg:block h-screen bg-black w-full">
            <div className="px-5 lg:mx-auto lg:max-w-screen-xl lg:px-8 lg:pb-16 lg:pt-24">
              <h1 className="text-headline lg:max-w-4xl lg:text-7xl text-white font-semibold lg:leading-tight">Bring your idea to life.</h1>
              <p className="mt-10 lg:mt-16 text-lg lg:text-2xl lg:max-w-2xl text-gray-300">It all starts with <span className="font-semibold text-white">good design.</span><br/><br/> As experts in digital product design, we help you develop your initial idea into a meaningful customer-centric experience that your end users will navigate with ease.<br/><br/>Design <span className="font-semibold text-white">beautiful products that work.</span><br/><br/><span className="underline font-semibold text-white">All you need is an idea.</span></p>
            </div>
          </div>
        </div>
      
        <div className="scroll-section">
          <div className="flex flex-col w-full h-screen lg:flex-row">
            <div className="bg-black h-1/2 lg:w-1/2 lg:h-screen items-center flex flex-col justify-center">
              <p className="text-gray-400 text-lg lg:text-2xl uppercase">What you have</p>
              <p className="mt-4 lg:mt-8 text-white text-3xl lg:text-5xl font-semibold">An idea.</p>
            </div>
            <div className="bg-lightGrayBG h-1/2 lg:w-1/2 lg:h-screen items-center flex flex-col justify-center">
              <p className="text-gray-400 text-lg lg:text-2xl uppercase">What you will get</p>
              <p className="mt-4 lg:mt-8 text-cyanblack text-3xl lg:text-5xl font-semibold">World-class UX design.</p>
            </div>
          </div>
        </div>
      
        <div className="scroll-section">
          <div className="p-16 lg:p-20 max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <FadeInSection>  
              <div className="flex flex-col items-center">
                <p className="mb-6 lg:mb-16 max-w-xs font-medium text-cyanblack text-md text-center lg:text-5xl lg:font-medium lg:max-w-2xl lg:leading-tight">Hi-fidelity UX with modern design. <span className="text-gray-400 font-semibold">Ready for branding.</span></p>              
                <Image
                alt=""
                src="/images/sample_a.png"
                width={442}
                height={872}
                quality={100}
                />
              </div>     
            </FadeInSection>
          </div>
        </div>
      
        <div className="scroll-section">
          <div className="bg-darkGrayBG py-16 lg:py-24">
            <FadeInSection>
              <h2 className="px-5 lg:px-44 font-semibold text-3xl lg:text-6xl text-white lg:text-left">Test multiple variants for the same screen. <span className="text-gray-400">Maximize your product impact by A/B testing which designs perform better with your real users.</span></h2>
              <div className="lg:hidden mt-16"><ABTest /></div>
            </FadeInSection>
          </div>          
        </div>
      
        <div className="scroll-section">
          <FadeInSection>
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-4 lg:mx-auto mt-16 grid grid-cols-1 gap-y-2 lg:gap-x-2 lg:grid-cols-2">
              <div className="bg-gray-200 rounded-lg px-6 py-8 lg:p-16">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-semibold text-cyanblack tracking-tight mb-8">We use Sketch and Figma</h2>
                <p className="max-w-3xl text-lg lg:text-2xl tracking-tight text-cyanblack text-gray-500 mb-12">We are fluent in the latest design software, making it easy to fit in with your existing team setup. Just let us know your preference - we'll work accordingly.</p>
                <Image
                  alt=""
                  src="/images/figma-sketch@2x.png"
                  width={451}
                  height={213}
                  quality={100}
                />            
              </div>

              <div className="bg-gray-200 rounded-lg px-6 py-8 lg:p-16">          
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-semibold text-cyanblack tracking-tight mb-8">Demo prototypes</h2>
                    <p className="max-w-3xl text-lg lg:text-2xl tracking-tight text-cyanblack text-gray-500 mb-12">We understand you need to demo user flows quickly, so we provide you with videos of functional prototypes. Easily present meaningful progress to stakeholders.</p>                
                  <Image
                    alt=""
                    src="/images/prototype.gif"
                    width={400}
                    height={300}
                    quality={100}
                  />               
              </div>

              <div className="lg:col-span-2 bg-gray-200 rounded-lg px-6 py-8 lg:p-16 lg:pb-0 lg:mb-32">
                <div className="flex flex-cols">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-semibold text-cyanblack tracking-tight mb-8">Interaction user stories</h2>
                    <p className="max-w-2xl text-lg lg:text-2xl tracking-tight text-cyanblack text-gray-500 mb-8 lg:mb-8">To optimize your development process, we pair the UX we deliver to you with well-written user stories, detailing expected behavior of every touchpoint and user interaction.</p>
                    <div className="lg:hidden bg-gray-100 grid grid-cols-2 gap-x-2 mb-3 p-2 rounded-2xl">
                      <button
                        id="userStoryButton"
                        className={ (interactionToggle ? "text-gray-400 bg-transparent" : "text-cyanblack bg-white shadow-sm") + " text-xs uppercase tracking-wider p-2 rounded-lg transition-all duration-100 font-medium"}
                        onClick={() => setInteractionToggle(0)}>User Story</button>
                      <button
                        className={ (interactionToggle ? "text-cyanblack bg-white shadow-sm" : "text-gray-400 bg-transparent") + " text-xs uppercase tracking-wider p-2 rounded-lg transition-all duration-100 font-medium"}                    
                        onClick={() => setInteractionToggle(1)}>Design</button>
                    </div>
                    <div
                      className={(interactionToggle ? "hidden" : "") + " userStory max-w-2xl font-mono text-sm"}>
                      <p className="p-4 leading-2">As a user, I should see a confirmation screen before I submit my payment request.</p>
                      <p className="px-4 uppercase mb-4">---<br/><br/>Acceptance Criteria</p>
                      <p className="px-4 font-normal text-sm"><span className="text-syntaxBlue">GIVEN</span> the confirmation screen,<br/><span className="text-syntaxGreen">WHEN</span> I review the details,<br/><span className="text-syntaxOrange">THEN</span> I can see the amount total in my selected currency.<br/><br/><span className="text-syntaxBlue">GIVEN</span> the confirmation screen,<br/><span className="text-syntaxGreen">WHEN</span> I review the details,<br/><span className="text-syntaxOrange">THEN</span> I can see the amount total in my selected currency.</p>
                    </div>
                    <div className={"lg:hidden" + (interactionToggle ? "" : " hidden")}>
                      <Image
                        alt=""
                        src="/images/sample_d.png"
                        width={417}
                        height={515}
                        quality={100}
                      />                
                    </div>
                  </div>

                  <div className="hidden lg:block lg:px-8">
                    <Image
                      alt=""
                      src="/images/sample_d.png"
                      width={417}
                      height={515}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>          
        </div>
      
      </div>

      <Footer />
    </>
  )
}