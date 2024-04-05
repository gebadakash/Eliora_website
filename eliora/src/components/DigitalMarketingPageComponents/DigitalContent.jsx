const DigitalContentData = [
  {
    title: "Blog",
    image: "images/DM10.png",
    description:
      "Blog is a powerful tool designed to enhance your website's impact and engagement. Drive traffic, boost SEO, Share valuable content, industry insights, updates, and notices to keep your audience informed and intrigued with our cutting-edge Blog Service.",
  },
  {
    title: "Website",
    image: "images/DM11.png",
    description:
      "At Eliora, we believe in the magic of words. As a leading provider of top-notch writing services, we are dedicated to helping websites with content of the highest quality that captivates, converts, and connects with their target audiences.",
  },
  {
    title: "SEO",
    image: "images/DM18.png",
    description:
      "In today's digital landscape, content marketing and SEO have become the dynamic duo that drives online success. Combining the art of storytelling and keywords with the science of search engine optimization, businesses can create a powerful strategy that not only engages their target audience but also boosts their online visibility.",
  },
  {
    title: "Poster",
    image: "images/DM12.png",
    description:
      "At Eliora, we don't just specialize in digital content; we also excel at creating captivating content for eye-catching posters. Whether you need a poster for a business event, a product launch, a social cause, or any other occasion, our skilled team of writers is here to craft the perfect message that grabs attention, communicates your essence, and leaves a lasting impact on your audience.",
  },
  {
    title: "Reels",
    image: "images/DM13.png",
    description:
      "One of the most engaging and popular formats on platforms like Instagram, youtube is Reels – short, snappy, and visually appealing that allow you to tell your brand's story in a matter of seconds. At Eliora, we don't just excel in traditional content; we're also experts in crafting Reels content that leaves a lasting impression and sparks meaningful connections with your followers.",
  },
  {
    title: "Videos",
    image: "images/DM14.png",
    description:
      "We understand the power of video content in today's digital world. Videos have the unique ability to captivate audiences, Communicate messages effectively, and leave a lasting impression. We provide compelling and engaging content that complements the visual storytelling to truly maximize the impact of your videos.",
  },
  {
    title: "E-mail & Newsletter",
    image: "images/DM15.png",
    description:
      "In the fast-paced digital world, where attention spans are fleeting, email marketing remains a powerful tool for businesses to engage with their audience directly. We don't just stop at web copy and blog posts; we extend our expertise to create content for your emails and newsletters as well. Writing services can elevate your email campaigns and newsletters, transforming them into captivating messages that drive meaningful results.",
  },
];

const ServiceItem = ({ title, image, description }) => (
  <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
    <div
      className="service-item bg-white rounded d-flex flex-column text-center align-items-center justify-content-center shadow p-5"
      style={{ minHeight: "550px" }}
    >
      <div>
        <img
          alt={title}
          src={image}
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

const DigitalContent = () => {
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
          <h1 className="mb-0">Content Marketing</h1>
          <p className="mt-5">
            With the help of our content marketing services, you can increase
            your online visibility and foster meaningful interactions with your
            target audience.
          </p>
        </div>
        <div className="row g-5">
          {DigitalContentData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalContent;
