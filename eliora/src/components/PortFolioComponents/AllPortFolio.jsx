import { BsLink45Deg } from "react-icons/bs";
import "./AllPortFolio.css";


const PortfolioItem = ({ imgUrl, link }) => (
  <div className="col-lg-4 wow slideInUp gap-3" style={{ visibility: "visible", animationName: "slideInUp" }}>
    <div className="team-item bg-light rounded overflow-hidden">
      <div className="team-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={imgUrl} alt="Portfolio Item" />
        <div className="team-social">
          <a className="btn btn-lg btn-lg-square rounded" href={link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg style={{ width: "50px" }} title="Link" aria-hidden="true" />
            {/* <i className="fa fa-link" aria-hidden="true"></i> */}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AllPortFolio = () => {
  const portfolioData = [
    { imgUrl: "images/Photo1.png", link: "https://surprisemeee.com/" },
    { imgUrl: "images/Photo2.png", link: "https://thedreamsalon.com/" },
    { imgUrl: "images/Photo3.png", link: "https://hornexcellenceconsulting.com/" },
    { imgUrl: "images/Photo4.png", link: "https://digitalcallsmedia.com/" },
    { imgUrl: "images/Photo5.png", link: "https://hasthkala.co.in/" },
    { imgUrl: "images/Photo6.png", link: "https://tripodtechnologies.com/" },
    { imgUrl: "images/Photo7.png", link: "https://affordablehealthinsurancequotes.com/" },
    { imgUrl: "images/Photo8.png", link: "https://tutorial.vflyorions.in/" },
    { imgUrl: "images/Photo9.png", link: "https://vflyorions.com/" },

  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp", marginTop: "-7%" }}>
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-3 mt-5 mx-auto " style={{ maxWidth: "600px" }}>
          <h1 className="mb-0">Our Portfolio</h1>
          <h5 className="fw-bold text-danger text-uppercase">100% satisfied thanks to the fair prices</h5>
        </div>
        {[...Array(Math.ceil(portfolioData.length / 3))].map((_, rowIndex) => (
          <div key={rowIndex} className="row g-5 p-3">
            {portfolioData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item, index) => (
              <PortfolioItem key={index} imgUrl={item.imgUrl} link={item.link} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPortFolio;
