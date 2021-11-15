import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact YASHA</title>
      </Head>
      <NavBar minified={true} />
    
      <div>
        <div className="max-w-screen-lg mx-auto min-h-screen">  
          <div className="px-5 py-3 lg:p-2.5 lg:px-0">
            <Link href="/">
              <a className="font-bold text-lg text-white">YASHA</a>
            </Link>        
          </div>
          <div className="mx-auto px-5 lg:px-8 mt-8 mb-8 pb-8">
            <p className="mb-8 max-w-4xl text-lg lg:text-2xl tracking-tight text-cyanblack">⏱ ⚡ Average response time: <span className="font-extrabold">45 mins.</span></p>
            <ContactForm />
            <p className="mt-5 lg:mt-2 text-xs lg:text-sm text-gray-400 text-center lg:text-right">Talk to you soon! 👋 💬</p>
          </div>
        </div>      
      </div>
    </>
  )
}