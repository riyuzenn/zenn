import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header';
import Footer from '../components/footer';

function zenn({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='flex flex-col h-screen justify-center my-5'>
        <div className='w-[90%] h-[90%] max-h-xl xl:max-w-[50%] lg:max-w-[50%] md:max-w-[50%] sm:max-w-[90%] mr-auto ml-auto'>
          <Header />
          <div className="my-10">
            <Component {...pageProps} />  
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default zenn;
