import Link from 'next/link'

const Footer = () => (
  <>
    <footer className="footer pt-16">
      <div className="max-w-screen-lg mx-auto items-center flex lg:flex-row flex-col justify-center space-y-5 lg:space-y-0 lg:space-x-16">
        <Link href="/sample">
          <a className="font-medium text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200">Sample Work</a>
        </Link>
        <Link href="/">
          <a className="font-medium text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200">About YASHA</a>
        </Link>
        <Link href="/contact">
          <a className="font-medium text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a>
        </Link>        
      </div>
      <p className="pt-16 pb-5 lg:pb-16 text-gray-400 font-light text-xs text-center">YASHA Studio © 2021 </p>
    </footer>
  </>
  
)

export default Footer