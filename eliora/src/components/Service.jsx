import { useGlobalContext } from "./context";

const Service = () => {
  const { ServiceTitle, ServiceContent } = useGlobalContext();

  return (
    <div
      className="wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        marginTop: "-40px",
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "url(images/bannew.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
          <h1 className="mb-0 text-white">{ServiceTitle}</h1>
        </div>
        <div className="col-lg-12">
          <div className="row g-0 mb-3">
            <div
              className="col-sm-2 wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            ></div>
            <div
              className="col-sm-8 wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            >
              <p style={{ color: "#fff", textAlign: "center" }}>
                {ServiceContent}
              </p>
              <p></p>
            </div>
            <div
              className="col-sm-2 wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
