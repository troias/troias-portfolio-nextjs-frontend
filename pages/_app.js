import '../styles/globals.css'

import Footer from '../components/navigation/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
   
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
  

}

export default MyApp
