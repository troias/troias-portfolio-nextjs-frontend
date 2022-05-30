import '../styles/globals.css'
import Head from 'next/head'



import Footer from '../components/navigation/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Create Next App</title>
        </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
  

}

export default MyApp
