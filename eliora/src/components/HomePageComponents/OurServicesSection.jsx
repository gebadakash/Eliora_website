import styles from "../../style/OurServicesSection.module.css";

const OurServicesSection = () => {

  const services = [
    {
      imgSrc: "images/webdev.png",
      title: "Web Design",
      description: "Web design is the artful process of shaping a website's visual and functional elements...",
      link: "websitedesign"
    },
    {
      imgSrc: "images/app.png",
      title: "Web Development",
      description: "Web development refers to the process of creating websites and web applications...",
      link: "websitedevelopment"
    },
    {
      imgSrc: "images/app.png",
      title: "App Development",
      description: "App development is the process of creating software applications for mobile devices...",
      link: "appdevelopment"
    },
    {
      imgSrc: "images/word.png",
      title: "WordPress",
      description: "Popular content management systems (CMS) like WordPress are used to create websites and blogs...",
      link: "wordpressdevelopment"
    },
    {
      imgSrc: "images/e-commerce.png",
      title: "E-Commerce",
      description: "In an ecommerce ecosystem, websites or online platforms act as virtual storefronts...",
      link: "ecommercedevelopment"
    },
    {
      imgSrc: "images/digital.png",
      title: "Digital Marketing",
      description: "Digital marketing is the art of reaching and engaging audiences through the power of technology...",
      link: "digitalandcontentmarketing"
    },
    {
      imgSrc: "images/graphics.png",
      title: "Graphic Designing",
      description: "Graphic designing, where imagination takes flight, colors dance and ideas ignite...",
      link: "graphicsandlogo"
    },
    {
      imgSrc: "images/conentwriter.png",
      title: "Content Writing",
      description: "Content writing is the art of crafting words that captivate, inform, and inspire...",
      link: "digitalandcontentmarketing"
    },
    {
      imgSrc: "images/ux.png",
      title: "UI UX Designing",
      description: "A UI/UX designer creates user interfaces and experiences...",
      link: "uiuxdesign"
    }
  ];


  return (
    <div className={`${styles.Buisness} container py-5`}>
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h3 className="text-dark">OUR SERVICES</h3>
        <h1 className={`${styles.heading}`}>
          Experience Quality Service
        </h1>
      </div>
      <div className="row g-5">
        {services.map((row, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 wow zoomIn"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "zoomIn",
            }}
          >
            <div
              className={`${styles.serviceItem} rounded d-flex flex-column align-items-center justify-content-center text-center card-container`}
            >
              <img
                alt="staffing services,  recruitment, staffing company, staffing agency"
                src={row.imgSrc}
                style={{ width: "100px", marginBottom: "15px" }}
              ></img>
              <h4 className="mb-3">{row.title}</h4>
              <p
                // className="m-0"
                style={{ textAlign: "justify", fontFamily: "sans-serif" }}
              >
                {row.description}
              </p>
              <br />
              <a className="btn btn-lg rounded" href={row.link}>
                  <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
