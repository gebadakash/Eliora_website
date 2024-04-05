
import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import Frequently from "../components/WordPressDevelopmentPageComponent/Frequently";
import { useGlobalContext } from "../components/context";
import WordPressDevelopmentServices from "../components/WordPressDevelopmentPageComponent/WordPressDevelopmentServices";
import WordPressDevelopmentAbout from "../components/WordPressDevelopmentPageComponent/WordPressDevelopmentAbout";
import WordPressOneStopShop from "../components/WordPressDevelopmentPageComponent/WordPressOneStopShop";

const WordPress = () => {

  const {updateWordPressDevelopmentPage} = useGlobalContext();

  useEffect(()=> updateWordPressDevelopmentPage(), []);


  return (
    <>
      <PlacementHeader/>
      <WordPressDevelopmentServices/>
      <WordPressDevelopmentAbout/>
      <WordPressOneStopShop/>
      <Frequently/>
    </>
    
  )
}

export default WordPress
