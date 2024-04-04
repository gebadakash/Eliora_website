import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../style/TopBarSection.module.css";

const TopBarSection = () => {
    return (
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
              <div className={`${styles.topSection} d-inline-flex align-items-center`} style={{ height: '45px' }}>
                <a href="contact" className="text-white" style={{textDecoration:'none', fontWeight:"500"}}><small className="me-3 text-light tx-l"><i className="bi bi-geo-alt-fill  mt-2 me-2"></i>Trimurti Nagar,Nagpur</small></a>
                <a href="tel:+91 8956101181" className="text-white"  style={{textDecoration:'none', fontWeight:"500"}}><small className="me-3 text-light tx-l"><i className="bi bi-telephone-fill  mt-2 me-2"></i> +91 8956101181 </small></a>
                <a href="mailto:info@elioratechno.com" className="text-white"  style={{textDecoration:'none', fontWeight:"500"}}><small className="text-light tx-l"><i className="bi bi-envelope-at-fill  mt-2 me-2"></i>info@elioratechno.com &nbsp;</small></a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL"><i className="bi bi-facebook" style={{ marginTop: '4px' }}></i></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/eliora-it-services/"><i className="bi bi-instagram" style={{ marginTop: '4px' }}></i></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA=="><i className="bi bi-linkedin"  style={{ marginTop: '4px' }}></i></a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default TopBarSection
