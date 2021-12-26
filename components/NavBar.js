import { useRef, useState, useEffect } from 'react'
import { useIsMount } from './useIsMount'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
	// load audio
	const [a_menuOpen] = useState(typeof Audio !== "undefined" && new Audio("/audio/menuopen.mp3"));
	const [a_menuClose] = useState(typeof Audio !== "undefined" && new Audio("/audio/menuclose.mp3"));
	
	// control first/subsequent renders separately (useEffect wrapper)
	const isMount = useIsMount();
	
	// reference to remember scrolled state of header
	const wasScrolled = useRef(false);
	
	// states to control menu toggle
	const [menuOpen, setMenuOpen] = useState(false);
	
	// menu toggle function
	const toggleMenu = () => {		
		// add animation classes to menu icon
		document.getElementById("menu-btn").classList.toggle("expanded");
		document.getElementById("menu-btn").classList.toggle("collapsed");
		
		// toggle state
		setMenuOpen(!menuOpen);
	}
	
	useEffect(() => {

		if(isMount) {	// first render
			
			// initially hide menu slide-out drawer
			gsap.set("#nav-menu", {
				height: 0
			});
			
			// initially hide navigation element
			gsap.set("#mobile-nav", {
				display: "none"
			});

			// adjust root height based on header
			let offsetTop = document.getElementById("nav-bar").offsetHeight;
			document.getElementById("__next").style.marginTop = offsetTop + "px";	

			// add ST to minify header bar and glassmorph on scroll
			ScrollTrigger.create({
				trigger: "#nav-bar",
				start: "top -50", 
				end: 9999,
				toggleClass: "scrolled"
			});	
			
		} else {	// subsequent renders

			// reference used to stagger menu list items
			let menuItems = document.getElementById("mobile-nav-links");
			let navBar = document.getElementById("nav-bar");

			// code block when menu is opening
			if(menuOpen) {
				// play menu open sound effect
				a_menuOpen.play();
				
				// prevent scrolling on page
				document.body.classList.toggle("noscroll");
				
				// remove scrolled class (malfunctions with animation) and remember state to add it back
				if(navBar.classList.contains("scrolled")) {
					wasScrolled.current = true;
					document.getElementById("nav-bar").classList.remove("scrolled");
				} else {
					wasScrolled.current = false;
				}
				
				// slide in menu drawer
				gsap.to("#nav-menu", {
					height: "100vh",
					background: "#000",
					duration: 0.4,
					ease: "circ.inOut"
				});

				// transition nav logo to white
				gsap.to("#nav-logo", {
					color: "#FFF",
					duration: 0.4,
					ease: "none"
				});

				// transition menu icon to white
				gsap.to([".firstBar", ".secondBar"], {
					background: "#FFF",
					duration: 0.4,
					ease: "none"
				});

				// display <nav> in DOM
				gsap.set("#mobile-nav", { display: "block" });

				// stagger reveal menu list items inside <nav> element
				gsap.fromTo(menuItems.children, {
					autoAlpha: 0,
					y: 0
				}, {
					autoAlpha: 1,
					y: 10,
					duration: 0.3,
					delay: 0.2,
					stagger: 0.1,
					ease: "Power2.easeInOut"
				});

			} else if (!menuOpen) {
				// code block when menu is closing
				
				// play menu closing sound effect
				a_menuClose.play();
				
				// restore scrolling on page
				document.body.classList.toggle("noscroll");
				
				// add scrolled class back if header was previously scrolled
				if(wasScrolled.current) {
					document.getElementById("nav-bar").classList.add("scrolled");
				}

				// slide out menu drawer
				gsap.to("#nav-menu", {
					height: 0,
					background: "#FFF",
					duration: 0.4,
					ease: "circ.inOut"
				});

				// transition nav logo back to default
				gsap.to("#nav-logo", {
					color: "#1D1D1F",
					duration: 0.4,
					ease: "none"
				});			

				// transition menu icon back to default
				gsap.to([".firstBar", ".secondBar"], {
					background: "#1D1D1F",
					duration: 0.4,
					ease: "none"
				});

				// hide <nav> element in DOM
				gsap.set("#mobile-nav", { display: "none" });

			}				
		}
		
	}, [menuOpen]);	// useEffect() called every time menuOpen is toggled through user action
	
	return (<>
		<div id="nav-bar">
			<div>
				<Link href="/">
					<a id="nav-logo">YASHA</a>
				</Link>				
			</div>
			<nav id="desktop-nav">
				<ul>
					<li>
						<Link href="/showcase">
							<a>Showcase</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Press</a>
						</Link>
					</li>					
					<li>
						<Link href="/sandbox">
							<a>Sandbox</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div id="menu-btn" className="collapsed" onClick={toggleMenu}>
				<div className="firstBar"/>
				<div className="bar-spacer"/>
				<div className="secondBar"/>
			</div>		
		</div>
		<div id="nav-menu">
			<nav id="mobile-nav">
				<ul	id="mobile-nav-links">
					<li>
						<Link href="/showcase">
							<a>Showcase</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Press</a>
						</Link>
					</li>					
					<li>
						<Link href="/sandbox">
							<a>Sandbox</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>			
		</div>			
	</>);
}
					
export default NavBar