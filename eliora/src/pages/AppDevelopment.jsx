import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import AppDevelopmentService from "../components/AppDevelopmentComponents/AppDevelopmentService";
import AppDevelopmentAbout from "../components/AppDevelopmentComponents/AppDevelopmentAbout";
import AppDevelopmentOneStop from "../components/AppDevelopmentComponents/AppDevelopmentOneStop";
import Frequently from "../components/AppDevelopmentComponents/Frequently";
import { useGlobalContext } from "../components/context";
import AppData from "../components/AppDevelopmentComponents/AppData";


const AppDevelopment = () => {

  const {updateAppDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateAppDevelopmentPage(), []);

  return (
    <>
      <PlacementHeader/>
      <AppDevelopmentService/>
      <AppDevelopmentAbout/>
      <AppDevelopmentOneStop/>
      <AppData/>
      <Frequently/>
    </>
    
  )
}

export default AppDevelopment
