import React from 'react'
import BannerComp from '../../components/BannerComp'
import AboutSection from '../../components/AboutSection'
import Layout from '../../layout/Layout'

const about = () => {
  return (
    <>
    <Layout>
       <BannerComp
        title="About Us"
       />
       <AboutSection></AboutSection>
       </Layout>
    </>
  )
}

export default about
