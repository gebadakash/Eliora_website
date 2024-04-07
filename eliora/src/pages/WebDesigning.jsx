import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/WebDesigningPageComponents/Frequently"
import { useGlobalContext } from "../components/context"
// import WebDesigningService from "../components/WebDesigningPageComponents/WebDesigningService";
// import DiscoverSection from "../components/WebDesigningPageComponents/DiscoverSection";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";

const WebDesigning = () => {

  const {updateWebDesigningPage} = useGlobalContext();

  useEffect(()=> updateWebDesigningPage(), []);

  return (
    <>
    <PlacementHeader/>
    <Discover/>
    <Service/>
    <Excellence/>
    {/* <WebDesigningService/> */}
    {/* <DiscoverSection/> */}
    <TechnologiesUsed/>
    <Frequently/>
    </>
  )
}

export default WebDesigning
