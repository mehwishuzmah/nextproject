
import { Inter } from 'next/font/google'
import Layout from '../../layout/Layout'
import Section from '../../components/Section'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import Section4 from '../../components/Section4'


//components


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      
      <Layout title="My Blog">
       <Section/>
       <Section2/>
       <Section3/>
       <Section4/>

      </Layout>
       
    </>
  )
}
