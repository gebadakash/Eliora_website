
import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/WordPressDevelopmentPageComponent/Frequently";
import { useGlobalContext } from "../components/context";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";

const WordPress = () => {

  const {updateWordPressDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateWordPressDevelopmentPage(), []);


  return (
    <>
      <PlacementHeader/>
      <Discover/>
      <Service/>
      <Excellence/>
      <Frequently/>
    </>
    
  )
}

export default WordPress
