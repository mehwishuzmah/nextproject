import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {ImSearch} from 'react-icons/im'
import {HiOutlineMenuAlt3} from 'react-icons/hi'


const Header = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
   <Link className="navbar-brand" href="/">
        <Image src='/images/logo.png' alt='logo' height={50} width={100} className='img-fluid'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      {/* <span className="navbar-toggler-icon"><HiOutlineMenuAlt3 size={25}/> </span> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center">
        <li className="nav-item">
         <Link className="nav-link "    href="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" href="/about">About</Link>
        </li>
       
        <li className="nav-item">
         <Link className="nav-link " href="/blogposts">Blogs</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link " href="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control ps-4 me-2 border-radius-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn mybtn" type="submit"><ImSearch/></button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
