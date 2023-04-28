import Link from "next/link";
import Image from "next/legacy/image";
import Author from "./child/author";
import Spinner from "./child/Spinner";
import fetcher from "../lib/fetcher";
const Section4 = () => {
  const { data, isLoading, isError } = fetcher("api/popular");
  // if (console.log(data))
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error</div>;

  return (
   
    <>
      <div className="container main-section ">
        <div className="row">
          <div className="col">
            <div className="category_item">
              <h1 className="">Business</h1>
            </div>
            {data[1] ? <Post data={data[1]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
            {data[3] ? <Post data={data[3]}></Post> : <></>}
            {/* {Post()} */}
          </div>
          <div className="col">
            <div className="category_item">
              <h1 className="">Travel</h1>
            </div>
            {data[1] ? <Post data={data[1]}></Post> : <></>}
            {data[3] ? <Post data={data[3]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

function Post({ data }) {
  const { id, title, category, description, img, published, author } = data;
  return (
    <Link href="/">
      <div className="row section4 ">
        <div className="col-12 col-md-4 " data-aos="fade-right" data-aos-duration="3500">
          <Image  
            className="border p-1  my-4 img-fluid"
            src={img}
            height={160}
            width={150}
            alt="image not found"
          ></Image>
          
        </div>

        <div className="category_info col-12 col-md-7"  data-aos="fade-left" data-aos-duration="3500">
          <p className="cat text-danger mt-3">
            {category || "no Category"}
            <br />
            <span className="text-secondary">{published || "Unknown"}</span>
          </p>
          <p className="">{title || "No Title"}</p>

          {author ? (
            <Author
              name={author.name.substring(0,12)}
              imagesrc={author.img}
              desig={author.designation}
              
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
}
export default Section4;
