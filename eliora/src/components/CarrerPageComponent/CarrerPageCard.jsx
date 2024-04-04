import "./CarrerPageCard.css";

const CarrerPageCard = () => {

    const rows =[
        {
            header:"PROFESSIONAL HR",
            Location:"Nagpur",
            Qualification:"MCA/BCA",
            ExperienceRequired:"2+ Yrs.",
            ApplicationDeadline:"19/10/2024",

        },

        {
            header:"FULL STACK DEVELOPER",
            Location:"Nagpur",
            Qualification:"MCA/BCA",
            ExperienceRequired:"2+ Yrs.",
            ApplicationDeadline:"19/10/2024",

        },

        {
            header:"PHP WEB DEVELOPER",
            Location:"Nagpur",
            Qualification:"MCA/BCA",
            ExperienceRequired:"2+ Yrs.",
            ApplicationDeadline:"19/10/2024",

        },


    ]
  return (

     <div className= "container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h1>
          Current Openings
        </h1>
      </div>
      <div className="row g-5">
        {rows.map((row, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center wow zoomIn"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "zoomIn",
            }}
          >
            <div
              className={`rounded d-flex flex-column align-items-center justify-content-center text-center card-container careerCard`}
            >
              <h4 className="mb-3 mt-4 fw-medium">{row.header}</h4>
              <ul
              className="card-details list-unstyled"
              style={{ marginTop: "20px", textAlign: "justify" }}
            >
              <li>
                <p className="">Location: {row.Location}</p>
              </li>
              <li>
                <p className="mt-2">Qualification: {row.Qualification}</p>
              </li>
              <li>
                <p className="mt-2">Experience Required: {row.ExperienceRequired}</p>
              </li>
              <li>
                <p className="mt-2">Application Deadline: {row.ApplicationDeadline}</p>
              </li>
            </ul>

              <br />
              <a href="#" className="btn btn-danger" style={{ padding: "12px" }}>
              Apply Now
            </a>

            <div className="fw-bold" style={{ marginTop: "10px", marginBottom:"10px" }}>
              Posted 2 days ago
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CarrerPageCard;
