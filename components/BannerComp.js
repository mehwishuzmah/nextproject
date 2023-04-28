import React from "react";
import Layout from "../layout/Layout";
import Image from "next/legacy/image";

const BannerComp = (props) => {
  return (
    <>
      
        <section className="section_banner bg-light">
          <div className="main_div">
            <div className="row">
              <div className="col-6">
                <h1 className="main-title text-uppercase"  data-aos="fade-right" data-aos-duration="3500">{props.title}</h1>
              </div>
            </div>
          </div>
          <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,256L26.7,256C53.3,256,107,256,160,234.7C213.3,213,267,171,320,144C373.3,117,427,107,480,117.3C533.3,128,587,160,640,186.7C693.3,213,747,235,800,208C853.3,181,907,107,960,90.7C1013.3,75,1067,117,1120,144C1173.3,171,1227,181,1280,165.3C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
      
    </>
  );
};

export default BannerComp;
