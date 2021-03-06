import React, { createRef, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import NavBar from '../components/NavBar'

gsap.registerPlugin(ScrollTrigger);

export default function Sample() {
	
	/*
			ANIMATION SECTIONS.
			
			A1. Intro group panel (headlines and icons)
			A2. Spotlight section
	*/
	
	// References used for animation.
	
  const icoLightning = createRef();
  const icoRocket = createRef();
  const icoMushroom = createRef();
  const headlineRefs = useRef([]);
	const spotlightRef = createRef();
	
	headlineRefs.current = [];
	const addToRefs = el => {
    if(el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };
  
  useEffect(() => {
		
		// A1. Intro group panel
		
		ScrollTrigger.create({
			trigger: "#hero",
			start: "top top", 
			pin: true, 
			pinSpacing: false,
		});
		
		ScrollTrigger.create({
			trigger: "#intro-group",
			start: "top top", 
			end: "top top",
			pin: true, 
			pinSpacing: false,
		});
		
    gsap.set(icoLightning.current, {
      strokeDasharray: 90,
      strokeDashoffset: 90,
      opacity: 0
    });
    
    const iconsTL1 = gsap.timeline({
      scrollTrigger: {
        trigger: icoLightning.current,
        start: "bottom bottom",
        end: "top center",
        scrub: 1
      }
    })
    .to(icoLightning.current, {
      opacity: 1,
      duration: 2,
      strokeDashoffset: 0
    });
    
    gsap.set(icoRocket.current, {
      strokeDasharray: 270,
      strokeDashoffset: 270,
      opacity: 0
    });
    
    const iconsTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: icoRocket.current,
        start: "bottom bottom",
        end: "top center",
        scrub: 1
      }
    })
    .to(icoRocket.current, {
      opacity: 1,
      duration: 2,
      strokeDashoffset: 0
    });    
        
    gsap.set(icoMushroom.current, {
      yPercent: -100,
      opacity: 0
    });
    
    const iconsTL3 = gsap.timeline({
      scrollTrigger: {
        trigger: icoMushroom.current,
        start: "bottom bottom",
        end: "top center",
        scrub: 1
      }
    })
    .to(icoMushroom.current, {
      opacity: 1,
      duration: 2,
      yPercent: 0,
      scale: 1.1,
      ease: "bounce.out"
    })
    .to(icoMushroom.current, {
      scale: 1,
      delay: 0.3,
      ease: "bounce.out",
      duration: 0.5
    })
    ;
    
    headlineRefs.current.forEach(headline => {
      gsap.set(headline, {
        opacity: 0
      });
      
      const introTextTL = gsap.timeline({
        scrollTrigger: {
          trigger: headline,
          start: "bottom bottom",
          end: "top 10%",
          scrub: 1
        }
      })
      .to(headline, { opacity: 1, duration: 0.5})
      .to(headline, { opacity: 0, duration: 0.2}, 1);      
    }); 
		
		// A2. Spotlight section
		
		const spotlightTL = gsap.timeline({
			scrollTrigger: {
				trigger: "#spotlight",
				start: "top 90%",
				end: "top top",
				scrub: 1
			}
		})
		.to(spotlightRef.current, {
			background: "#000",
			duration: 0.5
		});
		
  }, [addToRefs.current]);
  
  return (<>
		<NavBar />
		<div>
			<section id="hero" style={{ paddingTop: "10rem" }}>
				<div className="blocks container light">
					<h2 className="heading light">Bring your idea to life.</h2>
					<p>Donec cursus auctor euismod. Proin vitae dignissim massa, a varius tellus. Phasellus vulputate semper erat et faucibus. Proin a nibh tincidunt, volutpat urna non, mattis ipsum. Aliquam dapibus quis ipsum non sagittis. Mauris lobortis at mi sit amet mollis. Morbi tincidunt consequat luctus.</p>
				</div>					
			</section>
			<section id="intro-group" className="intro-group-wrapper">
				<div>  
					<svg viewBox="0 0 24 32" ref={icoLightning}>
						<polygon fill="none" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="12 11 20 0 2 11 8 17 0 28 18 17" transform="translate(2 2)"/>
					</svg>
					<h1 ref={addToRefs}>
						The world's most<br/>cutting-edge UX studio yet.
					</h1>
				</div>
				<div>
					<svg viewBox="-3 0 105 98" ref={icoRocket}>
						<g fill="none" fill-rule="evenodd" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" transform="translate(1 1)">
							<path d="M27.7894737,40.4210526 L0,40.4210526 L20.2105263,20.2105263 L55.5789474,20.2105263 L65.6842105,10.1053642 C71.3694316,4.42004211 77.8544842,0 85.8947368,0 L96,0 L96,10.1053642 C96,17.6842611 90.9473684,25.2632084 85.8947368,30.31584 L75.7894737,40.4210526 L75.7894737,75.7894737 L55.5789474,96 L55.5789474,68.2105263"/>
							<line x1="50.272" x2="25.263" y1="45.474" y2="70.483"/>
						</g>
					</svg>        
					<h1 ref={addToRefs}>
						Disruptive design<br/>certain to make an impact. 
					</h1>
				</div>
				<div>
					<svg viewBox="-2 -2 100 100" ref={icoMushroom}>
							<path fill="#9CA3AF" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m81.544 23.107c-2.4576 0.56738-2.6033 8.4226-0.4885 17.583 2.1148 9.1602 5.6892 16.157 8.1468 15.589 2.4576-0.56738 4.0039-7.3591 1.8891-16.519-2.114-9.161-7.089-17.221-9.547-16.653zm-74.732 45.567c-4.3819-5.246-5.8125-12.508-5.8125-21.598 0-13.988 5.8444-25.628 15.361-34.294 8.271-7.5316 19.351-11.782 31.346-11.782 14.072 0 24.859 4.3296 33.422 14.307 7.1343 8.3123 13.286 19.887 13.286 31.769 0 8.6494-1.4001 15.199-5.3973 20.352-3.2806 4.2293-7.8582 7.4188-13.293 9.7161-0.06661 4.9925-0.69044 10.405-6.2288 13.534-4.8461 2.7376-15.619 3.3214-22.451 3.3214-8.8851 0-17.766 0.13762-22.867-4.1518-3.277-2.754-4.646-8.417-4.932-12.512-5.015-2.058-9.284-4.89-12.434-8.661zm40.687-16.192c12.382 0 22.42-10.038 22.42-22.42s-10.038-22.42-22.42-22.42-22.42 10.038-22.42 22.42 10.038 22.42 22.42 22.42zm-41.403 2.67c2.4363 0.65281 6.2527-6.2145 8.6859-15.295 2.4332-9.0808 2.5617-16.936 0.12543-17.589-2.436-0.654-6.9895 4.617-9.4227 13.698s-1.8244 18.533 0.6119 19.186zm19.399 31.665c4.4687 2.9331 13.044 3.4463 21.174 3.4463 9.0167 0 19.014-0.03174 23.665-3.9387 2.741-2.3027 2.9062-8.7784 2.9062-11.753 0-1.2379-0.32761-3.0819-1.2455-4.2369-1.9638-2.4711-5.7605-4.0166-8.7187-5.3973-4.6188-2.1557-8.1814-2.4911-15.569-2.4911-6.813 0-11.988 0.65606-16.815 2.4911-3.8707 1.4716-8.5761 3.7606-9.9642 6.2276-0.52197 0.92768 0 2.2567 0 3.4066 0 3.4705 1.159 10.008 4.5669 12.245zm12.04-4.027c-1.3758 0-2.4911-1.3883-2.4911-8.3035 0-6.9153 1.1153-8.3035 2.4911-8.3035s2.4911 1.3883 2.4911 8.3035c0 6.9153-1.1153 8.3035-2.4911 8.3035zm19.928 0c-1.3758 0-2.4911-1.3883-2.4911-8.3035 0-6.9153 1.1153-8.3035 2.4911-8.3035s2.4911 1.3883 2.4911 8.3035c0 6.9153-1.1153 8.3035-2.4911 8.3035z"/>
					</svg>
					<h1 ref={addToRefs} style={{ maxWidth: "33rem" }}>
						Enchant your users. Level up your game.
					</h1>          
				</div>       
			</section>
			<section id="spotlight" className="w-full min-h-screen" ref={spotlightRef} />
		</div>
  </>);
}