import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = (props) => {
  const [navBarOpen, setNavBarOpen] = useState(0);
  
  const toggleMenu = () => {
    document.getElementById("menuButton").classList.toggle("expanded");
    document.getElementById("menuButton").classList.toggle("collapsed");
    
    let navBar = document.getElementById("navBar");
    
    if(navBarOpen) {     
      navBar.style.maxHeight = "0px";
    } else {
      navBar.style.maxHeight = "100vh";
    }
    
    setNavBarOpen(!navBarOpen);
  }

  return (
    <>
      <div
        id="navBar"
        className={(props.dark ? "navBarDark" : "navBarLight")}>
        <div className="flex flex-row px-5 py-2.5 lg:px-2.5 lg:py-3 items-center">
          <div className="w-full flex justify-between lg:max-w-screen-lg lg:mx-auto">
            <Link href="/">
              <a className={(props.dark ? "text-white " : "text-cyanblack ") + "lg:block font-extrabold text-lg"}>
              YASHA
              </a>
            </Link>
            <div className="hidden">
              <Link href="/">
                <a>
                  <Image
                    alt=""
                    src="/images/logo.png"
                    width={20}
                    height={20}
                    quality={100}
                  />                  
                </a>
              </Link>
            </div>
            <ul
              className={(props.minified ? "lg:hidden " : "lg:flex ") + (props.dark ? "lg:text-white " : "lg:text-black ") + "hidden lg:space-x-16 lg:text-xs lg:items-center"}>
              <li>
                <Link href="/sample">
                  <a className="lg:opacity-75 hover:opacity-100 transition-opacity duration-200">Sample Work</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="lg:opacity-75 hover:opacity-100 transition-opacity duration-200">About YASHA</a>
                </Link>              
              </li>
              <li className="lg:bg-buttonBlue lg:hover:bg-buttonBlueLight lg:cursor-pointer lg:rounded-full lg:px-4 lg:py-1 lg:text-white">
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>                
              </li>        
            </ul>            
          </div>
          <button
            id="menuButton"
            className={(props.minified ? "hidden " : "") + "collapsed lg:hidden"}
            onClick={toggleMenu}
            >
            <div id="first-bar" className={"firstBar" + (props.dark ? " dark" : " light")}/>
            <div className="my-1.5"/>
            <div id="second-bar" className={"secondBar" + (props.dark ? " dark" : " light")}/>
          </button>
        </div>
        <ul
          className={(props.dark ? "text-white " : "text-black ") + "lg:hidden py-12 opacity-75 text-sm tracking-widest font-medium uppercase text-center space-y-12"}>
          <li>
            <Link href="/sample">
              <a>Sample Work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About YASHA</a>
            </Link>              
          </li>
          <li>
            <Link href="/contact">
              <a className="font-bold">Contact Us</a>
            </Link>              
          </li>               
        </ul>
        <div className="min-h-screen"/>
      </div>
    </>
  )
}

export default NavBar