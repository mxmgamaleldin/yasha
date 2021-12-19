import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { mdComponents } from '../components/mdx'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "SubSpace";
          src: url("/fonts/SubSpace-Regular.ttf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
      `}</style>
    </MDXProvider>
  )
}

export default MyApp