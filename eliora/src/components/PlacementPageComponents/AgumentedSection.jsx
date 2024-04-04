// import styles from "../../style/AgumentedSection.module.css";
import "./AgumentedSection.css";
import { useGlobalContext } from "../context";

const AgumentedSection = () => {

    const {AgumentedTitle, AgumentedContent1,AgumentedContent2,AgumentedImage} = useGlobalContext();


  return (
    <section className="about-section">
            <div className="container">
                <div className="row">                
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 industries" style={{ marginTop: '10px' }}>
                        <div className="inner-column px-3">
                            <div className="section-title position-relative pb-3 mb-5 text-center">
                                <h1 className="mb-0 text-danger">{AgumentedTitle}</h1>
                            </div>
                            <div className="text mb-4">{AgumentedContent1}</div>
                            <div className="text mb-4">
                                {AgumentedContent2}
                            </div>
                            <div className="btn-box">
                                <a href="#call" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12 mt-sc">
                    <div className="inner-column wow fadeInLeft" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                        <figure className={`image1`}><a href="#" className="lightbox-image" data-fancybox="images"><img src={AgumentedImage} alt="Placement_and_recruitment, staffing services,  recruitment, staffing company, staffing agency" className="AgumentedImage"/></a></figure>
                     
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AgumentedSection
