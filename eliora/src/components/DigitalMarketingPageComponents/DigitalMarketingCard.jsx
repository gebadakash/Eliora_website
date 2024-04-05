const DigitalMarketingData = [
  {
    title: "Search Engine Optimization (SEO)",
    imageSrc: "images/DM4.png",
    description:
      "We specialize in personalized SEO solutions for businesses like yours. With our expert services, your website will rank higher on search engines, driving organic traffic and boosting visibility. We integrate Social Media Marketing, PPC, and Content Marketing to amplify your online presence.",
  },
  {
    title: "SEM",
    imageSrc: "images/DM5.png",
    description:
      "Boost your online visibility and drive targeted traffic to your website with our expert Search Engine Marketing (SEM) service. We optimize your website content, run strategic ad campaigns, and utilize powerful keywords to maximize your search engine presence and deliver tangible results for your business.",
  },
  {
    title: "Pay-per-click (PPC)",
    imageSrc: "images/DM6.png",
    description:
      "The secret to bringing high-quality traffic to your website is to use our Pay-Per-Click (PPC) service. We make sure that the correct audience sees your website content at the right moment with the use of clever ad campaigns and keyword optimisation. Our knowledgeable staff effectively uses your PPC money to achieve measurable outcomes and a high return on investment.",
  },
  {
    title: "Email Marketing",
    imageSrc: "images/DM7.png",
    description:
      "With Our Dynamic Email Marketing Service, Expand the Audience of Your Website! Utilize our user-friendly platform to see a rise in interaction, website traffic, and customer conversions.",
  },
  {
    title: "Social Media Marketing",
    imageSrc: "images/DM8.png",
    description:
      "Increase your online presence and engagement with our expert social media marketing service. Our team of skilled marketers will create personalized strategies to target your ideal audience, manage your social media accounts, and curate captivating content that drives traffic and fosters brand loyalty.",
  },
  {
    title: "Lead Generation",
    imageSrc: "images/DM9.png",
    description:
      "A lead generation service for websites is a strategic marketing solution designed to attract, capture, and nurture potential customers. Through various tactics such as optimized landing pages, compelling calls-to-action and data-driven lead. The service aims to drive qualified traffic to the website and convert them into actionable leads.",
  },
];

const ServiceItem = ({ title, imageSrc, description }) => (
  <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
    <div
      className="service-item bg-white rounded d-flex flex-column text-center align-items-center justify-content-center shadow p-5"
      style={{ minHeight: "550px" }}
    >
      <div>
        <img
          alt={title}
          src={imageSrc}
          style={{ width: "90px", paddingTop: "30px" }}
        />
      </div>
      <h3 className="mb-3 pt-3 fw-bold text-danger ">{title}</h3>
      <h6 className="m-0" style={{ textAlign: "justify", wordSpacing: "-3px" }}>
        {description}
      </h6>
    </div>
  </div>
);

const DigitalMarketingCard = () => {
  return (
    <div
      className="container-fluid py-5 wow fadeInUp mt-c mt-s"
      data-wow-delay="0.1s"
      style={{ marginTop: "-90px" }}
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-uppercase text-danger">TECHNOLOGIES WE USE</h5>
          <h1 className="mb-0">Digital Marketing</h1>
          <p className="mt-5">
            Our Comprehensive Digital Marketing Solutions Are Designed to Suit
            your Unique Needs, Enabling You To Achieve Your Online Goals And
            Maximise Your Brand's Potential.
          </p>
        </div>
        <div className="row g-5">
          {DigitalMarketingData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCard;
