import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/GraphicsAndLogoPageComponents/Frequently";
import { useGlobalContext } from "../components/context";
import GraphicsData from "../components/GraphicsAndLogoPageComponents/GraphicsData";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";


const GraphicsLogo = () => {

  const {updateGraphicsAndLogoPage} = useGlobalContext();

  useEffect(()=> updateGraphicsAndLogoPage(), []);


  return (
    <>
      <PlacementHeader/>
      <Discover/>
      <Service/>
      <Excellence/>
      <GraphicsData/>
      <Frequently/>
    </>
    
  )
}

export default GraphicsLogo
