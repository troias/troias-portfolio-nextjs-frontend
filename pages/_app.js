import '../styles/globals.css'
import Head from 'next/head'


import Footer from '../components/navigation/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
  

}

export default MyApp
