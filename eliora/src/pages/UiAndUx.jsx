import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/UIAndUXDesigningPageComponents/Frequently";
import { useGlobalContext } from "../components/context";
import UIAndUXServicesData from "../components/UIAndUXDesigningPageComponents/UIAndUXServicesData";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";

const UiAndUx = () => {

  const {updateUiAndUxDesignPage} = useGlobalContext();

  useEffect(()=> updateUiAndUxDesignPage(), []);

  return (
    <>
    <PlacementHeader/>
    <Discover/>
    <Service/>
    <Excellence/>
    <UIAndUXServicesData/>
    <Frequently/> 
    </>
    
  )
}

export default UiAndUx
