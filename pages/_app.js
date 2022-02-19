import '../styles/globals.css'
import Header from '../components/navigation/header/header'
import Footer from '../components/navigation/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
  
  

}

export default MyApp
