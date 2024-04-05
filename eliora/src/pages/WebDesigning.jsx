import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/WebDesigningPageComponents/Frequently"
import { useGlobalContext } from "../components/context"
import WebDesigningService from "../components/WebDesigningPageComponents/WebDesigningService";
import DiscoverSection from "../components/WebDesigningPageComponents/DiscoverSection";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";

const WebDesigning = () => {

  const {updateWebDesigningPage} = useGlobalContext();

  useEffect(()=> updateWebDesigningPage(), []);

  return (
    <>
    <PlacementHeader/>
    <WebDesigningService/>
    <DiscoverSection/>
    <TechnologiesUsed/>
    <Frequently/>
    </>
  )
}

export default WebDesigning
