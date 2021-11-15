import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ABTest = () => {
  const [variant, setVariant] = useState(true);
  
  useEffect(() => {
    
  });
  
  return (
    <>
      <div className="px-16 flex flex-col items-center">
        <Image
          alt=""
          src={(variant? "/images/sample_b.png" : "/images/sample_c.png" )}
          width={442}
          height={872}
          quality={100}
        />  
        <div className="mt-2 flex flex-row items-center">
          <button
            onClick={() => setVariant(0)}
            className="p-3 hover:text-white transition-color duration-200 text-2xl text-gray-300 font-medium"
            >←</button>
          <label className="text-white text-lg lg:text-2xl font-medium px-4">A/B</label>
          <button
            onClick={() => setVariant(1)}
            className="p-3 hover:text-white transition-color duration-200 text-2xl text-gray-300 font-medium"
            >→</button>             
        </div>  
      </div>
    </>
  )
}

export default ABTest