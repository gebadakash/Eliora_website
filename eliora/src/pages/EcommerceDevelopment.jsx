import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/E-commerceDevelopmentPageComponent/Frequently";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";
import { useGlobalContext } from "../components/context";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";

const Ecommerce = () => {

  const {updateEcommerceDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateEcommerceDevelopmentPage(), []);


  return (
    <>
    <PlacementHeader/>
    <Discover/>
    <Service/>
    <Excellence/>
    <TechnologiesUsed/>
    <Frequently/>
    </>
    
  )
}

export default Ecommerce
