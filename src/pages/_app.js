import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js"),(AOS.init());
  }, []);
  
  return(
  <>
    
  <Component {...pageProps} />
 
  </>
  )
}
