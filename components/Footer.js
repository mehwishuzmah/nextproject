
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import Link from 'next/link'
import Newsletter from './Newsletter';
const Footer = () => {
  const bg={
    backgroundImage:"url('/images/bg2.png')",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center"
  }
  return (
    <><div >
      <div className='main-section ' style={bg}>
        <div className='container mx-auto '>
         <Newsletter/>
         <div className='row '>
          <div className='col d-flex justify-content-center'>
            <Link href='/' ><FaFacebookF className='mx-2' size={25} ></FaFacebookF></Link>
            <Link href='/' ><FaYoutube className='mx-2' size={25}></FaYoutube></Link>
            <Link href='/' ><FaTwitter className='mx-2' size={25}></FaTwitter></Link>
          </div>
         </div>
         <div className='row'>
          <div className='col py-5 text-center footer_text'>
            <p className=' text-secondary'>Copyright @2023 All rights reserved</p>
            <p className='text-secondary'>Terms and Conditions</p>
          </div>
         </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer
