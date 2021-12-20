import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Sandbox() {
	
	useEffect(() => {
		
		const heroTL = gsap.timeline();
		heroTL.to("#curtain", {
			yPercent: -100,
			ease: "circ.inOut",
			duration: 2
		})
		.fromTo("#hero", {
			scale: 1.5
		}, {
			scale: 1,
			duration: 5,
			ease: "none"
		}, ">-0.75");
		
		heroTL.to("#hero-img-wrapper", {
			width: "50vw",
			height: "50vh",
			duration: 30,
		}, ">-3");

	}, []);
	
  return (<>
			<div className="w-full min-h-screen">
				<div id="curtain" className="bg-black w-full min-h-screen absolute z-10"/>
				<Image
					id="hero"
					priority
					alt=""
					src="/images/hero.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>			
			</div>
  </>);
}