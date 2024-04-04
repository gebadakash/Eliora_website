import { useEffect } from "react";
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import CarrerPageCard from "../components/CarrerPageComponent/CarrerPageCard";

const Career = () => {

  const {updateCareerPage} = useGlobalContext();

  useEffect(()=> updateCareerPage(), []);

  return (
    <>
      <PlacementHeader/>
      <CarrerPageCard/>
    </>
  )
}

export default Career