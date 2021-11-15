import Image from 'next/image'

const Hero = () => (
  <div className="heroContainer">
    <Image
      priority
      alt=""
      src="/images/ame.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute pt-72">
      <h2 className="font-bold text-2xl text-white mb-4">YASHA</h2>
      <h1 className="mx-6 lg:mx-56 font-extrabold text-white text-4xl lg:text-7xl leading-tight">Best-in-class UX.<br/>Designed to set you apart.</h1>
    </div>
  </div>
)

export default Hero