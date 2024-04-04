import styles from "../../style/StaffingSection.module.css";


const StaffingSection = () => {
  return (
    <div className={`${styles.staffingSection} container-fluid py-5 wow fadeInUp mt-c mt-in`} data-wow-delay="0.1s" style={{ marginTop: "-72px" }}>
      <div className="container py-5">
        <div className={`${styles.sectionTitle} text-center position-relative pb-3 mb-5 mx-auto`} style={{ maxWidth: "600px" }}>
          <h5 className="mb-0 fw-bold text-uppercase">Staffing</h5>
          <h1 className="text-danger">Staffing Solutions, Where Full-Time Meets Contract Success!</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 mt-c" style={{ minHeight: "500px" }}>
            <div className={`${styles.ImageSection} position-relative h-100`}>
              <img alt="employment agencies near me" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="images/staf.png" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className={`${styles.employmentSection} col-lg-6 mt-sc`}>
            <div className={`position-relative pb-2 mb-2`}>
              <h3 className="mb-0 text-dark">Full Time Employment Staffing</h3>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>Responsible for performing job duties on a full-time basis in accordance with company policies and standards. Additionally, full-time employment staffing requires consistent dedication and commitment to meet the organizations goals and objectives.</p>
            <a href="placementandrecruitment" className="btn btn-danger py-2 px-2 mt-2 wow zoomIn" data-wow-delay="0.9s">Learn More</a>
            <br /><br />
            <div className="position-relative pb-2 mb-2">
              <h3 className="mb-0 text-dark">Contract to Contract Staffing</h3>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>Engaged in short-term, project-based contracts with the company, providing specialized services for defined durations. This flexible arrangement allows the company to access specialized expertise as needed while providing contractors with opportunities to work on diverse projects.</p>
            <a href="contractstaffing" className="btn btn-danger py-2 px-2 mt-2 wow zoomIn" data-wow-delay="0.9s">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingSection;
