import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Technology } from "../../data/TechnologyData";

import "../../style/Technology.css";

const TechnologySection = () => {
  return (
    <>

      <h1 className="TechnologyHeading mb-5" style={{ textAlign: "center", marginTop:"150px", fontFamily:"sans-serif", color:"crimson" }}>
        Technologies We Use
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Technology.map((tech) => (
          <SwiperSlide key={tech.id}>
            <div className="card-container">
              <div className="image-container">
                <img src={tech.image}></img>
              </div>
              <div className="card-content">
                <div className="card-title">
                  <p>{tech.title}</p>
                </div>

                <div className="card-body">
                  <p>{tech.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TechnologySection;
