import "./home.css";
import BlogPost from '../components/HomePageComponents/BlogPost.jsx'
import PatnerSection from '../components/HomePageComponents/PatnerSection.jsx';
import TechnologySection from '../components/HomePageComponents/TechnologySection.jsx';
import TestiMonials from '../components/HomePageComponents/Testimonials.jsx';
import BusinessSection from "../components/HomePageComponents/BusinessSection.jsx";
import PlacementSection from "../components/HomePageComponents/PlacementSection.jsx";
import ServiceSection from "../components/HomePageComponents/ServiceSection.jsx";
import WebsiteDesignSection from "../components/HomePageComponents/WebsiteDesignSection.jsx";
import WhyChooseUsSection from "../components/HomePageComponents/WhyChooseUsSection.jsx";
import OurServicesSection from "../components/HomePageComponents/OurServicesSection.jsx";
import StaffingSection from "../components/HomePageComponents/StaffingSection.jsx";
import NavBarCarouselSection from "../components/HomePageComponents/NavBarCarouselSection.jsx";


const Home = () => {
  return (
    <>
      <NavBarCarouselSection/>
      <ServiceSection/>
      <WebsiteDesignSection/>
      <WhyChooseUsSection/>
      <OurServicesSection/>
      <StaffingSection/>
      <PlacementSection/>
      <BusinessSection/>
      <PatnerSection/>
      <BlogPost/>
      <TestiMonials/>
      <TechnologySection/>
    </>
  );
};

export default Home;
