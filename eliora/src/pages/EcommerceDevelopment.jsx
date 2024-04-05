import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/E-commerceDevelopmentPageComponent/Frequently";
import EcommerceService from "../components/E-commerceDevelopmentPageComponent/EcommerceService";
import EcommerceAbout from "../components/E-commerceDevelopmentPageComponent/EcommerceAbout";
import TechnologiesUsed from "../components/WebsiteDevelopmentPageComponents/TechnologiesUsed";
import EcommerceOneStop from "../components/E-commerceDevelopmentPageComponent/EcommerceOneStop";
import { useGlobalContext } from "../components/context";

const Ecommerce = () => {

  const {updateEcommerceDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateEcommerceDevelopmentPage(), []);


  return (
    <>
    <PlacementHeader/>
    <EcommerceService/>
    <EcommerceAbout/>
    <EcommerceOneStop/>
    <TechnologiesUsed/>
    <Frequently/>
    </>
    
  )
}

export default Ecommerce
