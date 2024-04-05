import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import { useGlobalContext } from "../components/context"
import AllPortFolio from "../components/PortFolioComponents/AllPortFolio";


const Portfolio = () => {

  const {updatePortFolioPage} = useGlobalContext();

  useEffect(()=> updatePortFolioPage(), []);

  return (
    <>
      <PlacementHeader/>
      <AllPortFolio/>
    </>
  )
}

export default Portfolio