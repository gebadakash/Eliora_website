import Video from "../../assets/h-vv1.mp4";
import "./NavBarCarousel.css";

const NavBarCarouselSection = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline preload="metadata" style={{ width: "100%"}}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default NavBarCarouselSection;
