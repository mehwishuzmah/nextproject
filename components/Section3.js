import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { VscArrowRight } from "react-icons/vsc";
import Author from "./child/author";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from "../lib/fetcher";
import Spinner from "./child/Spinner";
const Section3 = () => {
  SwiperCore.use([Autoplay]);
  const { data, isLoading, isError } = fetcher("api/popular");
  // if (console.log(data))
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error</div>;
  return (
    <>
      <div className="container section3 main-section">
        <div className="row py-3">
          <div className="col text-center">
            <h1 className="main-title">Most Popular</h1>
          </div>
        </div>

        <div className="row ">
        <div className="col-12 col-md-12 col-lg-10 col-xl-12 mx-auto ">
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
             
              0: {
      slidesPerView: 1,
    },
    400:{
      slidesPerView:1,
    },
    767: {
      slidesPerView: 2,
    },
    991:{
      slidesPerView:2
    },
    1000:{
      slidesPerView:2
    }
  }}
          >
            {data &&
              data.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                   
                    <Post data={value} ></Post>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      </div>
    </>
  );
};
function Post({data}) {
  const { id, title, category, description, img, published, author } = data;
  return (
    <>
      <div className="  main-section ">
       
          <Link href="/">
            <div className="item mx-auto">
              <div className="card p-2 border-0">
                <Image
                  src={img||"/"}
                  height={300}
                  width={350}
                  alt="image not found"
                  className="text-center "
                  style={{width:"100%",}}
                />
                <div className="card-body">
                  <p className="cat text-danger mt-3">
                    {category||"No Category"}<br/>
                    <span className="text-secondary">{published||"No Caption"}</span>
                  </p>
                  <h5 className="card-title">
                    {title||"No Title"}
                  </h5>
                  <p className="card-text">
                    {description.substring(0,152)||"No Description"}
                  </p>
                  {author? <Author
                  name={author.name}
                  imagesrc={author.img}
                  desig={author.designation}
                   />:<></>}
                </div>
              </div>
            </div>
          </Link>
        </div>
      
    </>
  );
}
export default Section3;
