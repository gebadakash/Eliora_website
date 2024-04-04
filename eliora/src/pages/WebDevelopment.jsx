import { useEffect } from "react";
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import WebsiteDevelopmentService from "../components/WebsiteDevelopmentPageComponents/WebsiteDevelopmentService";
import Frequently from "../components/WebsiteDevelopmentPageComponents/Frequently";
import ExperienceExcellence from "../components/WebsiteDevelopmentPageComponents/ExperienceExcellence";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";
import Showcasing from "../components/WebsiteDevelopmentPageComponents/Showcasing";
import VendorCarousel from "../components/WebsiteDevelopmentPageComponents/VendorCarousel";

const WebDevelopment = () => {

  const {updateWebDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateWebDevelopmentPage(), []);


  return (
    <>
    <PlacementHeader/>
    <WebsiteDevelopmentService/>
    <ExperienceExcellence/>
    <TechnologiesUsed/>
    <Showcasing/>
    <Frequently/>
    <VendorCarousel/>
    </>
  )
}

export default WebDevelopment
