import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import DynamicDigital from "../components/DigitalMarketingPageComponents/DynamicDigital";
import DigitalContent from "../components/DigitalMarketingPageComponents/DigitalContent";
import Frequently from "../components/DigitalMarketingPageComponents/Frequently";
import { useGlobalContext } from "../components/context";
import DigitalMarketingCard from "../components/DigitalMarketingPageComponents/DigitalMarketingCard";
import Discover from "../components/Discover";
import Service from "../components/Service";
import Excellence from "../components/Excellence";



const DigitalMarketing = () => {

  const {updateDigitialMarketingPage} = useGlobalContext();

  useEffect(()=> updateDigitialMarketingPage(), []);


  return (
    <>
      <PlacementHeader/>
      <Discover/>
      <Service/>
      <Excellence/>
      <DynamicDigital/>
      <DigitalMarketingCard/>
      <DigitalContent/>
      <Frequently/>
    </>
    
  )
}

export default DigitalMarketing
