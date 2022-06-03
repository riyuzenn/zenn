import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header';
import Footer from '../components/footer';
import { MDXProvider } from '@mdx-js/react';

function zenn({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='flex flex-col h-auto justify-center my-5'>
        <div className='w-[90%] h-[90%] max-h-xl xl:max-w-[50%] lg:max-w-[50%] md:max-w-[50%] sm:max-w-[90%] mr-auto ml-auto'>
          <Header />
          <div className="my-10">
            <MDXProvider>
              <Component {...pageProps} />  
            </MDXProvider>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default zenn;
