import React from 'react'

const Newsletter = () => {
  return (
    <>
      <section>
        <div className='container  footer_section'>
            <div className='row'>
                <div className='col-12 col-md-6 mx-auto text-center'>
                    <h1>Subscribe NewsLetter</h1>
                    <form className=" my-4">
        <input className="form-control me-2 p-2 ps-4 border-radius-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn mybtn my-3 px-5 " type="submit">Subscribe</button>
      </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
