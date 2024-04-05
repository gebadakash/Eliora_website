import { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader";
import AboutHeroContent from "../components/AboutPageComponents/AboutHeroContent";
import IndustriesServed from "../components/AboutPageComponents/IndustriesServed";
import MissionVisionContainer from "../components/AboutPageComponents/MissionVisionContainer";
import "../components/AboutPageComponents/about.css";
import Facts from "../components/AboutPageComponents/Facts";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <>
        <PlacementHeader />
        <AboutHeroContent />
        <IndustriesServed />
        <MissionVisionContainer />
        <Facts/>
        {/* <AboutCards /> */}


    </>
  );
};

export default About;
