import '../styles/globals.css'

import HeaderLinkjs from '../components/parts/HeaderLink.js'
import FooterLink from '../components/parts/FooterLink'

function MyApp({ Component, pageProps }) {





  return <>
  <HeaderLinkjs/>

  <Component {...pageProps} />

  <FooterLink/>
  
  </>
 


}

export default MyApp
