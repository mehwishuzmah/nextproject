import Link from "next/link";
import Image from "next/image";
import fetcher from "../../lib/fetcher";
import Author from "../../components/child/author";
import Spinner from "../../components/child/Spinner";
import Layout from "../../layout/Layout";
import BannerComp from "../../components/BannerComp";
const blogposts = () => {
  


  const { data, isLoading, isError } = fetcher("/api/posts");
  // if (console.log(data))
  if (isLoading) return <Spinner/>
  if (isError) return <div>Error</div>
    return (
      <>
      <Layout>
      <BannerComp 
        title="Our Blogs"
      />
        <section className=" section2 container">
          <div className="row py-3">
            <div className="col text-center">
              <h1 className="main-title">Our Blogs Content</h1>
            </div>
          </div>
          <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {data && data.map((value, index) => {
              return(
              <Post data={value} key={index}></Post>
              )
              
            })}
          </div>
        </section>
        </Layout>
      </>
    );
};

function Post({ data }) {
  const { id, title, category,description, img, published, author } = data;
  return (
    <>
      <div className="col py-4 px-4">
        <Link href={`/posts/${id}`}>
          <div className="item" style={{
           
          }}>
            <div className="card p-2 border-0">
              <Image
                src={img||"/"}
                height={250}
                width={350}
                objectFit="cover"
                objectPosition="center"
                alt="image not found"
                className=" item_image"
              />
              
              <div className="card-body">
                <p className="cat text-danger mt-3">
                 {category||"Unknown"}<br/>
                  <span className="text-secondary">{published||'Unknown'}</span>
                </p>
                <h5 className="card-title">
                  {title.substring(0,50) ||"Unknown"}
                </h5>
                <p className="card-text">{description.substring(0,200)||"Unknown"}</p>
               
               
                {author? <Author
                  name={author.name}
                  imagesrc={author.img}
                  desig={author.designation}
                   />:<></>}


                <center>
                  {/* <button className="btn mybtn ">Learn More  <VscArrowRight/></button> */}
                </center>
              </div>
            </div>
        </div>
        </Link>
      </div>
    </>
  );
}



export default blogposts
