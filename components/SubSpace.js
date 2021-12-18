import { useRef, useState, useEffect } from 'react'
import Head from "next/head";
import Link from "next/link";

const SubSpace = () => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  
  const canvas = useRef(null);
  const gameView = useRef(null);
  
  const scrollSpeed = useRef(1);
  const maxScrollSpeed = 4;
  
  function draw(canvas) {
    console.log("draw() called");
    
    const ctx = canvas.getContext("2d");
    
    var images = [];
    var imageURLs = [
      '/images/star1.png',
      '/images/star2.png',
      '/images/star3.png'
    ];
    var imagesLoaded = 0;
    var imagesLength = imageURLs.length;
    
    for(var i=0; i < imagesLength; i++) {
      images[i] = new Image();
      images[i].onload = () => {
        imagesLoaded++;
        if(imagesLoaded == imagesLength) allLoaded();
      }
      images[i].src = imageURLs[i];
    }
    
    function allLoaded() {
      console.log("All loaded");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let colorMap = ["#EEEEEE", "#767575", "#636363"];

      // seed base starfield
      for(var i=0; i<100; i++) {
        let x = Math.floor(Math.random() * canvas.width);
        let y = Math.floor(Math.random() * canvas.height);
        ctx.fillStyle = colorMap[Math.floor(Math.random() * 3)];
        ctx.fillRect(x, y, 2, 2);
     }

      for(var i=0; i<imagesLength ; i++) {
        for(var j=0; j<3; j++){
          let x = Math.floor(Math.random() * canvas.width);
          let y = Math.floor(Math.random() * canvas.height);        
          ctx.drawImage(images[i], x, y);
        }
      }
      
      var starField = document.createElement("img");
      starField.src = canvas.toDataURL();      
    
      var starsOffset = 0;
      requestAnimationFrame(panStarField);
      
      function panStarField() {
        starsOffset = (starsOffset + scrollSpeed.current) % canvas.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(starField, 0, starsOffset);
        ctx.drawImage(starField, 0, starsOffset - starField.height);    

        requestAnimationFrame(panStarField);      
      }      
    } 
        
    // draw warbird sprite
    drawWarbird();
  }
  
  function drawWarbird() {
    console.log("drawWarbird() called.");
    
    // draw Warbird sprite on foreground canvas
    let gv = gameView.current.getContext("2d");
    var warbird = new Image();
    warbird.onload = function() {
      console.log("warbird sprite loaded. ", dimensions.width, dimensions.height);
      let shipX = Math.floor(dimensions.width / 2) - warbird.width;
      let shipY = Math.floor(dimensions.height) - warbird.height - Math.floor(0.2 * dimensions.height);
      gv.drawImage(warbird, shipX, shipY);
      gv.font = "12px SubSpace";
      gv.fillStyle = "#F3B710";
      gv.fillText("a quiet boy (23)", shipX + warbird.width + 2, shipY + warbird.height + 8);
    };
    warbird.src = '/images/warbird.png';

  }
  
  function createStarField(canvas) {
    console.log("createStarField() called");
   
    const ctx = canvas.getContext("2d");

    return starfield;
  }

  function debounce(fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  
  const debouncedResize = debounce(() => {
    console.log("debouncedResize called.");
    canvas.current.width = gameView.current.width = window.innerWidth;
    canvas.current.height = gameView.current.height = window.innerHeight;
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, 100);
  
  const onKeyDown = ({key}) => {
    if(key == 'ArrowUp') {
      if(scrollSpeed.current < maxScrollSpeed) scrollSpeed.current++;
    }
    else if(key == 'ArrowDown') {
      if(scrollSpeed.current > 0) scrollSpeed.current--;
    }
  }    
  
  useEffect(() => {
    console.log("useEffect called");

    canvas.current.width = gameView.current.width = window.innerWidth;
    canvas.current.height = gameView.current.height = window.innerHeight;
    
    console.log("canvas size adjusted.");
    
    window.addEventListener("resize", debouncedResize);
    window.addEventListener("keydown", onKeyDown);
    
    console.log("event listeners added.");
    
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    console.log("dimensions set.");
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("keydown", onKeyDown);
    }
  }, [])
  
  useEffect(() => {
    console.log("redraw triggered.");
    draw(canvas.current);
  }, [dimensions])
  
  useEffect(() => {
    console.log("Scroll speed changed: ", scrollSpeed.current);

    window.addEventListener("keydown", onKeyDown);
    
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollSpeed])
  
  return (<>
    <Head>
      <link rel="preload" href="fonts/SubSpace-Regular.ttf" as="font" crossOrigin=""/>
    </Head>
    <div className="w-full min-h-screen relative">
      <canvas ref={canvas} style={{ background: "black", position: "absolute" }} />
      <canvas ref={gameView} style={{ position: "absolute" }} />
    </div>    
  </>)
}

export default SubSpace