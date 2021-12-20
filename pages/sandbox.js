import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Sandbox() {
	useEffect(() => {
		ScrollTrigger.create({
			trigger: "#section-1",
			start: "top top", 
			pin: true, 
			pinSpacing: false 
		});
		
  ScrollTrigger.create({
    trigger: "#section-2",
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });


	}, []);
	
  return (<>
		<div id="section-1" className="bg-blue-200 w-full min-h-screen">
			<span className="heading text-center">ONE</span>
		</div>
		<div id="section-2" className="bg-red-200 w-full min-h-screen">
			<span className="heading text-center">TWO</span>
		</div>
		<div id="section-3" className="bg-green-200 w-full min-h-screen">
			<span className="heading text-center">THREE</span>
		</div>		
  </>);
}