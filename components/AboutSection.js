import React from 'react'
import fetcher from '../lib/fetcher'
import Spinner from './child/Spinner';
import Image from 'next/legacy/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const AboutSection = () => {
    const { data, isLoading, isError } = fetcher("api/aboutUs");
  if (isLoading) return <Spinner/>
  if (isError) return <div>Error</div>
  // AOS.init();
  return (
    <>
    <section className='content-section'>
      <div className="container">
            <div className="row">
            
               
                       <div className="col-12 col-md-6  "  >
                            <h1 className='main-title text-center '>{data[0].title}</h1>
                            <p className='sub-title '>{data[0].description}</p>
                        </div>
                        <div className="col-12 col-md-6 text-center my-auto ">
                                <Image data-aos="zoom-in" data-aos-duration="4000"
                                
                                    src={data[0].img}
                                    height={400}
                                    width={400}
                                    style={{ borderRadius:"50%" ,objectPosition:"center"}}
                                    
                                    alt='About Image'
                                    className='p-lg-3 p-5'
                                ></Image>

                            </div>
             
            </div>
            <div className='row text-center main-section ' >
                <div className='col-12 col-md-11 col-lg-9 mx-auto main-title' data-aos="zoom-in-down" data-aos-duration="2000">
                   <h1 className=''>{data[1].title}</h1> 
                   <p className='sub-title lh-base fst-italic text-center '>"{data[1].description}"</p>
                </div>
            </div>
          </div>
          </section>
    </>
  )
}

export default AboutSection
