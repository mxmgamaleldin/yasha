import { useRef, useState, useEffect } from 'react'

const SubSpace = () => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  
  const canvas = useRef(null);
  const gameView = useRef(null);
  
  const scrollSpeed = useRef(1);
  const maxScrollSpeed = 4;
  
  function draw(canvas) {
    console.log("draw() called");
    
    const ctx = canvas.getContext("2d");
    var starField = createStarField(canvas);
    var starsOffset = 0;
    
    requestAnimationFrame(panStarField);
    
    // draw warbird sprite
    drawWarbird();
    
    function panStarField () {
      starsOffset = (starsOffset + scrollSpeed.current) % canvas.height;
        
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(starField, 0, starsOffset);
      ctx.drawImage(starField, 0, starsOffset - starField.height);    

      requestAnimationFrame(panStarField);      
    }
    
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
    };
    warbird.src = '/images/warbird.png';

  }
  
  function createStarField(canvas) {
    console.log("createStarField() called");

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    for(let i = 0; i < 200; i++) {
      let starX = Math.floor(Math.random() * canvas.width);
      let starY = Math.floor(Math.random() * canvas.height);
      let starRadius = Math.floor(Math.random() * 3);
      ctx.arc(starX, starY, starRadius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }    
    ctx.fillStyle = "gray";
    ctx.fill();

    var starfield = document.createElement("img");
    starfield.src = canvas.toDataURL();
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
      if(scrollSpeed.current < maxScrollSpeed) scrollSpeed.current += 1;
    }
    else if(key == 'ArrowDown') {
      if(scrollSpeed.current > 0) scrollSpeed.current -= 1;
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
    <div className="w-full min-h-screen relative">
      <canvas ref={canvas} style={{ background: "black", position: "absolute" }} />
      <canvas ref={gameView} style={{ position: "absolute" }} />      
    </div>    
  </>)
}

export default SubSpace