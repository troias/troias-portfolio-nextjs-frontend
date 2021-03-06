import '../styles/globals.css'
import Head from 'next/head'

import { getFooter } from '../utils/api'



import Footer from '../components/navigation/footer/footer'

function MyApp({ Component, pageProps, footer }) {
  // console.log("FooterDataappPage", footer);
  return (
    <>
      <Head>
        <title>Troy Flavell | Portfolio</title>
        <meta name="description" content="A portfolio made by Troy Favell" />
      </Head>
      <Component {...pageProps} />
      <Footer footer={footer} />
    </>
  )



}




MyApp.getInitialProps = async (ctx) => {
  const footer = await getFooter()
  // console.log("footer", footer)
  return {
    footer
  }
}

export default MyApp
