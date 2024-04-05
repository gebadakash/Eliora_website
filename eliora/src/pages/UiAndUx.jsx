import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/UIAndUXDesigningPageComponents/Frequently";
import { useGlobalContext } from "../components/context";
import UIAndUXServices from "../components/UIAndUXDesigningPageComponents/UIAndUXServices";
import UIAndUXAbout from "../components/UIAndUXDesigningPageComponents/UIAndUXAbout";
import UIAndUXPartner from "../components/UIAndUXDesigningPageComponents/UIAndUXPartner";
import UIAndUXServicesData from "../components/UIAndUXDesigningPageComponents/UIAndUXServicesData";

const UiAndUx = () => {

  const {updateUiAndUxDesignPage} = useGlobalContext();

  useEffect(()=> updateUiAndUxDesignPage(), []);

  return (
    <>
    <PlacementHeader/>
    <UIAndUXServices/>
    <UIAndUXAbout/>
    <UIAndUXPartner/>
    <UIAndUXServicesData/>
    <Frequently/> 
    </>
    
  )
}

export default UiAndUx
