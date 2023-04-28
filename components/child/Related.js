import Image from "next/legacy/image";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher"
import Spinner from "./Spinner";
const Related = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  // if (console.log(data))
  if (isLoading) return <Spinner/>
  if (isError) return <div>Error</div>
  return (
    <>
      <section className="main-section">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <h1 className="">Business</h1>
           {
            data.map((value,index)=>{
              return(
              <Post key={index} data={value}></Post>
              )
            })
           }
            
          </div>
        </div>
      </section>
    </>
  );
};

function Post({data}) {
  const {id,title,category,img,pubished,author}=data;
  return (
    <Link href={`/posts/${id}`}>
      <div className="row">
        <div className="col-4 col-md-3 col-lg-3">
          <Image
            className="border p-1  my-4  img-fluid"
            src={img}
            height={150}
            width={150}
            alt="image not found"
          />
        </div>

        <div className="col-8 col-lg-8">
          <p className="cat text-danger mt-3">
            {category}
            <span className="text-secondary">{pubished}</span>
          </p>
          <p className="">{title}</p>

          {author? <Author
                  name={author.name}
                  imagesrc={author.img}
                  desig={author.designation}
                   />:<></>}
        </div>
      </div>
    </Link>
  );
}
export default Related;
