import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from "../lib/fetcher";
import Spinner from "./child/Spinner";
// Import Swiper styles
import "swiper/css";
const Section = () => {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (console.log(data)) if (isLoading) return <Spinner />;
  if (isError) return <div>Error</div>;
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section className="container-fluid bannerSection ">
        <div className="row py-5 ">
          <div className="col text-center">
            <h1>Trending</h1>
          </div>
        </div>
        <div className="container-fluid">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
          >
            {data &&
              data.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    
                    <Slide data={value} ></Slide>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
function Slide({ data }) {
  const { id, title, category, description, img, published, author } = data;
  return (
    <div className="row ">
      <div className="col-12 col-md-6 col-lg-6 imgCol my-auto mx-auto text-center">
        <Link href="/">
          <Image
            src={img || "/"}
            alt="image not found"
            width={500}
            height={300}
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="col-12 col-md-6 col-lg-6 infoCol p-lg-5 p-md-3">
        <Link href="/">
          <p className="cat text-danger">
            {category || "Unknown"}
            <br />{" "}
            <span className="text-secondary">{published || "Unknown"}</span>
          </p>
          <h1 className="title mb-5">{title || "Unknown"}</h1>
          <p className="sub-title">{description || "Unknown"}</p>

          {author? <Author
                  name={author.name}
                  imagesrc={author.img}
                  desig={author.designation}
                   />:<></>}
        </Link>
      </div>
    </div>
  );
}

export default Section;
