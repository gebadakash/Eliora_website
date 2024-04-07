import { useEffect } from "react";
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/WebsiteDevelopmentPageComponents/Frequently";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";
import Showcasing from "../components/WebsiteDevelopmentPageComponents/Showcasing";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";

const WebDevelopment = () => {

  const {updateWebDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateWebDevelopmentPage(), []);


  return (
    <>
    <PlacementHeader/>
    <Discover/>
    <Service/>
    <Excellence/>
    <TechnologiesUsed/>
    <Showcasing/>
    <Frequently/>
    </>
  )
}

export default WebDevelopment
