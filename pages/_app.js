import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Services />
      <Footer />
    </>

  )

}

export default MyApp
