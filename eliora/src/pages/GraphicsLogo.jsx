import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/GraphicsAndLogoPageComponents/Frequently";
import GraphicsService from "../components/GraphicsAndLogoPageComponents/GraphicsService";
import GraphicsDesignAbout from "../components/GraphicsAndLogoPageComponents/GraphicsDesignAbout";
import GraphicsOneStop from "../components/GraphicsAndLogoPageComponents/GraphicsOneStop";
import { useGlobalContext } from "../components/context";
import GraphicsData from "../components/GraphicsAndLogoPageComponents/GraphicsData";


const GraphicsLogo = () => {

  const {updateGraphicsAndLogoPage} = useGlobalContext();

  useEffect(()=> updateGraphicsAndLogoPage(), []);


  return (
    <>
      <PlacementHeader/>
      <GraphicsService/>
      <GraphicsDesignAbout/>
      <GraphicsOneStop/>
      <GraphicsData/>
      <Frequently/>
    </>
    
  )
}

export default GraphicsLogo
