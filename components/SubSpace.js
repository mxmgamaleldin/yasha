import { useRef, useState, useEffect } from 'react'

const SubSpace = () => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  const canvas = useRef(null);
  
  const debouncedResize = debounce(() => {
    console.log("debouncedResize called.");
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, 100);
  
  useEffect(() => {
    console.log("useEffect called to set initial.");
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    setDimensions({ width: window.innerWidth, height: window.innerHeight });    
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  })
  
  useEffect(() => {
    draw(canvas.current, dimensions.width, dimensions.height);
  }, [dimensions])
  
  return (<>
    <div className="w-full min-h-screen">
      <canvas ref={canvas} style={{ background: "black" }} />
    </div>
  </>)
}

function draw(canvas, width, height) {
  console.log("draw() called with " + width, height);
  
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  for(let i = 0; i < 200; i++) {
    let starX = Math.floor(Math.random() * width);
    let starY = Math.floor(Math.random() * height);
    let starRadius = Math.floor(Math.random() * 3);
    ctx.arc(starX, starY, starRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }    
  
  ctx.fillStyle = "gray";
  ctx.fill();
  
  var starfield = document.createElement("img");
  starfield.src = canvas.toDataURL();
}

function createStarfield(){
  
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

export default SubSpace