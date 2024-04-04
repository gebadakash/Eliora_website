const Showcasing = () => {
  const testimonials = [
    {
      imgSrc: "images/dev-3.png",
      company:
        "VFlyOrions - Driving Business Excellence as a Leading BPO Company in Nagpur",
      description:
        "VFlyOrions, a Nagpur-based BPO company, has achieved prominence through a client-centric approach, skilled talent, advanced technology, and rigorous quality control. Their flexibility and commitment to excellence have driven impressive growth and established them as a trusted outsourcing partner.",
      comment:
        "Immensely grateful to Eliora for crafting our remarkable website.",
    },
    {
      imgSrc: "images/dev-4.png",
      company:
        "Horn excellence consultancy- Preeminent solution provider for your business.",
      description:
        "Magna Industries Inc., a large automotive parts manufacturer, sought Horn Excellence Consultancy's expertise to optimize operations. Consultants analyzed processes, engaged the workforce and proposed efficient solutions. The outcome: increased productivity, reduced costs, improved quality, and a competitive edge, leading to sustained success in the market.",
      comment: "Thank you Eliora for building such a Wonderful site.",
    },
  ];

  return (
    <>
      <div className="section-title position-relative pb-3 mb-5 text-center">
        <h1 className="mb-0">Showcasing Our Success Stories </h1>
      </div>

      <div
        className="container-fluid py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div className="container py-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="row g-5"
              style={{
                border: "1px solid #6A6A6A",
                boxShadow: "0 20px 40px -14px rgba(0, 0, 0, 0.25)",
                background: "white",
                marginTop: `${index === 1 ? "5%" : ""}`,
              }}
            >
              <div className="col-lg-5">
                <div className="position-relative h-100">
                  <img
                    alt="Web Development"
                    className="w-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src={testimonial.imgSrc}
                    style={{
                      objectFit: "cover",
                      visibility: "visible",
                      animationDelay: "0.9s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-7" style={{ marginTop: "107px" }}>
                <h5
                  className="fw-bold text-uppercase"
                  style={{ color: "crimson" }}
                >
                  {testimonial.company}
                </h5>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  {testimonial.description}
                </p>
                <p style={{ fontSize: "12px" }}>
                  comment: {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Showcasing;
