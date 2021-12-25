import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Sandbox() {
	
	useEffect(() => {
		
//		const heroTL = gsap.timeline();
//		heroTL.("#hero-wrapper", {
//			duration: 1,
//			height: "auto"
//		});

	}, []);
	
  return (<>
			<div className="w-full min-h-screen bg-black">
				<div id="hero-wrapper">
					<Image
						priority
						id="hero"
						alt=""
						src="/images/hero-2.jpeg"
						layout="fill"
						objectFit="cover"
						objectPosition="0 0"
						quality={100}
					/>						
				</div>		
			</div>
  </>);
}