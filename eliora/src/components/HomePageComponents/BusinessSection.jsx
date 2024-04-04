import styles from "../../style/Business.module.css";

const BusinessSection = () => {
  const rows = [
    {
      header: "Automate",
      content:
        "Want To Lower Overhead Costs By 40%? Our automation process has assisted our clients in scaling their businesses 2-10 times while reducing overhead costs by 40%.",
      image: "./images/b1.png",
    },
    {
      header: "Saving",
      content:
        "What Do Additional Savings Of 100+ Hours Mean For Your Business? Our clients claim that the automation of our processes and technology allows them to save more than 100 hours each month.",
      image: "./images/b2.png",
    },
    {
      header: "NDA",
      content:
        "Worried That The Wrong People Might Get Your Idea? We treat your technology and ideas as if they were our own, and demand the same of all of our partners and vendors.",
      image: "./images/b3.png",
    },
    {
      header: "ROI",
      content:
        "You Think Development Is Costly And It Doesnt Have To Be That Way? Our Proprietary Solutions Allow Your Business To See A Return On Investment, In Some Cases, Clients Have Seen And Increase In 200% - 500% In Revenue Or Up To 40% Reduction In Excessive Overhead Costs Due To Outdated Technology.",
      image: "./images/b4.png",
    },

    {
      header: "Agile",
      content:
        "You Think Development Is Costly And It Doesnt Have To Be That Way? Our Proprietary Solutions Allow Your Business To See A Return On Investment, In Some Cases, Clients Have Seen And Increase In 200% - 500% In Revenue Or Up To 40% Reduction In Excessive Overhead Costs Due To Outdated Technology.",
      image: "./images/b5.png",
    },

    {
      header: "Business Goal",
      content:
        "Which Business Goals Do You Have? Growth? Creating revenue? Whether its growth, revenue generation, or process improvement, we shape technology to meet your desired business goals. We Trust in the Results!",
      image: "./images/b6.png",
    },
  ];

  return (
    <div className={`${styles.Buisness} container py-5`}>
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h1 className={`${styles.heading}`}>
          Our Businesss By Adopting The Solution
        </h1>
      </div>
      <div className="row g-5">
        {rows.map((row, index) => (
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
                src={row.image}
                style={{ width: "100px", marginBottom: "15px" }}
              ></img>
              <h4 className="mb-3">{row.header}</h4>
              <p
                className="m-0"
                style={{ textAlign: "justify", fontFamily: "sans-serif" }}
              >
                {row.content}
              </p>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BusinessSection;
