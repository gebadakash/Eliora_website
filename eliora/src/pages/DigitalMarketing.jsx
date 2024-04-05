import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import DigitialMarketingContent from "../components/DigitalMarketingPageComponents/DigitialMarketingContent";
import DigitalMarketingAbout from "../components/DigitalMarketingPageComponents/DigitalMarketingAbout";
import DynamicDigital from "../components/DigitalMarketingPageComponents/DynamicDigital";
import DigitalContent from "../components/DigitalMarketingPageComponents/DigitalContent";
import Contentmarketing from "../components/DigitalMarketingPageComponents/Contentmarketing";
import Frequently from "../components/DigitalMarketingPageComponents/Frequently";
import { useGlobalContext } from "../components/context";
import DigitalMarketingCard from "../components/DigitalMarketingPageComponents/DigitalMarketingCard";



const DigitalMarketing = () => {

  const {updateDigitialMarketingPage} = useGlobalContext();

  useEffect(()=> updateDigitialMarketingPage(), []);


  return (
    <>
      <PlacementHeader/>
      <DigitialMarketingContent/>
      <DigitalMarketingAbout/>
      <Contentmarketing/>
      <DynamicDigital/>
      <DigitalMarketingCard/>
      <DigitalContent/>
      <Frequently/>
    </>
    
  )
}

export default DigitalMarketing
