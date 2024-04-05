// import servicesData from "./data.js";
const servicesData = [
    {
      title: "Social Media Post",
      imageSrc: "images/GD3.png",
      description: "Are you ready to level up your social media presence? At Eliora, we specialize in delivering top-notch social media services that will help your brand shine in the digital landscape. Our dedicated team of experts is committed to creating engaging content, increasing your followers, and driving meaningful results for your business.",
   
    },
    {
      title: "Video",
      imageSrc: "images/GD5.png",
      description: "Tell your brand's story with clarity and professionalism. At Eliora, we specialize in creating captivating videos that leave a lasting impact on your audience. Our expert video services cater to businesses, organizations, and individuals seeking to enhance their visual storytelling and engage their viewers on a deeper level.",
     
    },
    // Add other service items here in a similar format
    {
      title: "Logo",
      imageSrc: "images/GD4.png",
      description: "Elevate your brand with our professional logo design services. We craft unique and memorable logos that leave a lasting impression on your target audience. Our expert designers work closely with you to understand your vision and translate it into a versatile and timeless logo. Whether you're a small business, a startup, or an established brand, our logo design service is crafted to meet your specific needs and budget.",
  
    },
    // Add other service items here in a similar format
    {
      title: "Banner",
      imageSrc: "images/GD6.png",
      description: "Our banner designs are made to suit your unique requirements. Whether you need banners for social media, websites, events, or promotions, we'll create designs that align perfectly with your brand identity and messaging.",
  
    },
    // Add other service items here in a similar format
    {
      title: "Brochure",
      imageSrc: "images/GD7.png",
      description: "We believe that each business is unique, and so should be its brochure. Whether you need a corporate brochure, product catalog, or event pamphlet, our expert designers will create a captivating and professionally designed brochure that effectively communicates your message.",
   
    },
    // Add other service items here in a similar format
    {
      title: "Flyer / Poster",
      imageSrc: "images/GD8.png",
      description: "We believe that a well-designed poster can make a powerful impact and effectively convey your message to the world. Our poster design service offers a creative and professional solution for businesses, events, and organizations looking to grab attention and leave a lasting impression.",
   
    },
    {
      title: "Business Card",
      imageSrc: "images/GD9.png",
      description: "Make a lasting impression with Eliora's premium business card design services. Our expert designers craft personalized business cards that reflect your brand's identity and leave a memorable impact on clients and prospects.",
   
    }
  ];
  
  
  const ServiceItem = ({ title, imageSrc, description }) => (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
      <div className="service-item bg-white rounded d-flex flex-column text-center align-items-center justify-content-center shadow p-5" style={{ minHeight: "550px" }}>
        <div>
          <img alt={title} src={imageSrc} style={{ width: "90px", paddingTop: "30px" }} />
        </div>
        <h3 className="mb-3 pt-3 fw-bold text-danger ">{title}</h3>
        <h6 className="m-0" style={{ textAlign: "justify", wordSpacing: "-3px" }}>
          {description}
        </h6>
      </div>
    </div>
  );
  
  const GraphicsData = () => (
    <div className="container-fluid py-5 wow fadeInUp mt-c mt-s" data-wow-delay="0.1s" style={{ marginTop: "-90px" }}>
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          <h5 className="fw-bold text-uppercase">Our Services</h5>
          <h1 className="mb-0">Technologies We Use</h1>
        </div>
        <div className="row g-5">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default GraphicsData;