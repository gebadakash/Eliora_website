import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/AppDevelopmentComponents/Frequently";
import { useGlobalContext } from "../components/context";
import AppData from "../components/AppDevelopmentComponents/AppData";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";


const AppDevelopment = () => {

  const {updateAppDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateAppDevelopmentPage(), []);

  return (
    <>
      <PlacementHeader/>
      <Discover/>
      <Service/>
      <Excellence/>
      <AppData/>
      <Frequently/>
    </>
    
  )
}

export default AppDevelopment
