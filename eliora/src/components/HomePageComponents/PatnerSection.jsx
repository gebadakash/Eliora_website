import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../style/PartnerSection.module.css";

const PartnerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className={`${styles.mainContainer} py-5`}>
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px;" }}
      >
        <h5 className="fw-bold text-uppercase">Our Partners</h5>
        <h1 className="mb-0 text-danger">
          Some Of Past Companies We Have Worked For
        </h1>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="./images/p1.png" alt="Partner Logo" />
          </div>
          <div>
            <img src="./images/p2.png" alt="Partner Logo" />
          </div>
          <div>
            <img src="./images/p3.png" alt="Partner Logo" />
          </div>
          <div>
            <img src="./images/p5.png" alt="Partner Logo" />
          </div>
          <div>
            <img src="./images/p6.png" alt="Partner Logo"/>
          </div>
          <div>
            <img src="./images/p7.png" alt="Partner Logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSection;
