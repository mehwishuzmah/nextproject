import Layout from "../../../layout/Layout"
import Author from "../../../components/child/author"
import Image from "next/image"
import { Figtree } from "next/font/google"
import Related from "../../../components/child/Related"
import getPost from "../../../lib/getPost"
import fetcher from "../../../lib/fetcher"
import Spinner from "../../../components/child/Spinner"
import { useRouter } from "next/router"
import { SWRConfig } from "swr"
// import { getStaticPaths,getStaticProps } from "next"

export default function Page({fallback}){
  const router=useRouter()
  const {pageId}=router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${pageId}`)
  
  if(isLoading) return <Spinner />
  if(isError) return <div>Error</div>

  return(
    <SWRConfig value={{fallback}}>
           <Article {...data} ></Article>
    </SWRConfig>

    
  )
}
function Article  ({ title,  subtitle, description, img,  author}) {
   
  return (
    <>
    <Layout>
      <section className="main-section mt-5"> 
      <div className="container">
      
       <div className="row  ">
        <div className="col-12 col-md-10 col-lg-8 mx-auto  ">
        {author? <Author
                  name={author.name}
                  imagesrc={author.img}
                  desig={author.designation}
                   />:<></>}
          <div className="post py-4 ">
         
            <h1 className="text-center pb-4">{title||"No Title"}</h1>
           <p class="footer_text text-center text-secondary fw-bold">{subtitle||"No Subtitle"}</p>
            <div className="py-4 text-center">
            <Image src={img}
             height={500} 
             width={700} 
             className="border img-fluid"
            >
            </Image>
            </div>
            <div className="post_content py-5">
               {description||"No Description"}
            </div>
          </div>
        </div>
       </div>
       <Related/>
      </div>
      </section>
      </Layout>
    </>
  )
}



export async function getStaticProps({params}){
  const posts=await  getPost(params.pageId)
  
 
   return{
    // isko opar page mai access krna hai destructure kr k 
    props:{
      fallback:{
        '/api/posts':posts
      }
   }
}
}

export async function getStaticPaths(){
  const posts=await getPost();
  
   const paths=posts.map(value=>{
    return{
      params:{
       pageId:value.id.toString(),
     
      }
    }
   })
 return {
  paths,
  fallback:false
 }
}