import { BiAward, BiCheck, BiUser } from "react-icons/bi";

const Facts = () => {
  return (
    <div className="container-fluid g-0 mb-5" style={{ marginTop: "40px" }}>
      <div className="container">
        <div className="row gx-0">
          <div
            className="col-lg-3  wow zoomIn"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "zoomIn",
            }}
          >
            <div
              className=" shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "200px", width: "300px" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <BiUser
                  className="text-black "
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#000000",
                  }}
                />
              </div>
              <div className="ps-3">
                <h4 className="text-danger mb-0">Years Of Experience</h4>
                <h1
                  className="mb-0"
                  data-toggle="counter-up"
                  style={{ display: "inline" }}
                >
                  3
                </h1>{" "}
                <h1 style={{ display: "inline" }}> +</h1>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 wow zoomIn"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "zoomIn",
            }}
          >
            <div
              className=" shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "200px", width: "300px" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <BiCheck
                  className="text-black "
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#000000",
                  }}
                />{" "}
              </div>
              <div className="ps-4">
                <h4 className="text-danger mb-0">Professional Experts</h4>
                <h1
                  className="mb-0"
                  data-toggle="counter-up"
                  style={{ display: "inline" }}
                >
                  15
                </h1>{" "}
                <h1 style={{ display: "inline" }}> +</h1>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 wow zoomIn"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "zoomIn",
            }}
          >
            <div
              className=" shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "200px", width: "300px" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <BiAward
                  className="text-black "
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#000000",
                  }}
                />{" "}
              </div>
              <div className="ps-4">
                <h4 className="text-danger mb-0">Satisfied Clients</h4>
                <h1
                  className="mb-0"
                  data-toggle="counter-up"
                  style={{ display: "inline" }}
                >
                  135
                </h1>{" "}
                <h1 style={{ display: "inline" }}> +</h1>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 wow zoomIn"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "zoomIn",
            }}
          >
            <div
              className=" shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "200px", width: "300px" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <BiCheck
                  className="text-black "
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#000000",
                  }}
                />{" "}
              </div>
              <div className="ps-4">
                <h4 className="text-danger mb-0">
                  Software &amp; App Built
                </h4>
                <h1
                  className="mb-0"
                  data-toggle="counter-up"
                  style={{ display: "inline" }}
                >
                  103
                </h1>{" "}
                <h1 style={{ display: "inline" }}> +</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
