import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import NavBar from '../components/NavBar'

gsap.registerPlugin(ScrollTrigger);

export default function Sandbox() {
	
	useEffect(() => {
		
		const heroTL = gsap.timeline();
		heroTL.("#hero-wrapper", {
			duration: 1,
			height: "auto"
		});

	}, []);
	
  return (<>
			<NavBar />
			<div className="container dark">
				<Image
					priority
					id="hero"
					alt=""
					src="/images/hero.jpeg"
					layout="fill"
					objectFit="cover"
					objectPosition="0 0"
					quality={100}
				/>						
			</div>
  </>);
}