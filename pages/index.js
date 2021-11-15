import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Home() {
    return (
      <>
        <Head>
          <title>YASHA</title>
        </Head>
        <NavBar dark={false} />
        <Hero />
      
        <div className="max-w-screen-lg mx-auto min-h-screen">  
          <h2 className="my-16 px-5 sm:px-6 md:px-8 lg:px-56 leading-none font-extrabold lg:text-center text-cyanblack text-3xl sm:text-5xl lg:text-5xl">YASHA. <span className="font-bold text-gray-400">A boutique UX design studio applying design thinking to bring you unparalleled UX.</span></h2>

          <section id="user-needs">
            <div className="px-5 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-cyanblack tracking-tight mb-8">Laser-focused user needs.</h2>
              <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-500">We guide you to refine what <span className="italic">you think your users want</span> to what <span className="italic">we know they really need.</span></p>
              <a href="#" className="font-medium text-cyanblack text-lg sm:text-2xl lg:text-2xl hover:underline hover:opacity-75 transition-opacity duration-200 focus:underline">Get in touch →</a>
            </div>
          </section>

          <section id="outcome-design">  
            <div className="px-5 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-cyanblack tracking-tight mb-8">Design for outcomes, not aesthetics.</h2>
              <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-500">As veterans in user research and A/B testing, we help you define measurable outcomes that impact real-life business goals, instead of targeting vanity metrics like how pretty things look.</p>
              <a href="#" className="font-medium text-cyanblack text-lg sm:text-2xl lg:text-2xl hover:underline hover:opacity-75 transition-opacity duration-200  focus:underline">Contact us →</a>
            </div>
          </section>
      
          <section id="scale-up">
            <div className="px-5 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-cyanblack tracking-tight mb-8">Rapid scale-up and integration.</h2>
              <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-500">We've worked with best in class in multiple domains, making it a breeze for us to fit in your current setup, with minimal cost to valuable resources like your time and people.</p>
              <a href="#" className="font-medium text-cyanblack text-lg sm:text-2xl lg:text-2xl hover:underline hover:opacity-75 transition-opacity duration-200  focus:underline">Book a call now →</a>      
            </div>
          </section>

          <section id="partners">
            <div className="px-5 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-cyanblack tracking-tight mb-8">We acquire partners, not clients.</h2>
              <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-500">We're not fans of the design-deliver-goodbye model. At YASHA, we invest in your success, staying on your team with flexible retainers to jump back in and assist you whenever you need.</p>
              <a href="#" className="font-medium text-cyanblack text-lg sm:text-2xl lg:text-2xl hover:underline hover:opacity-75 transition-opacity duration-200 focus:underline">Talk to us today →</a>
            </div>
          </section>
        </div>     
        <Footer />
      </>
    )
}

export default Home