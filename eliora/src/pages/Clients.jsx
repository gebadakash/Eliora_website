import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import { useGlobalContext } from "../components/context"
import OurClientsSection from "../components/ClientPageComponents/OurClientsSection";

const Clients = () => {

  const {updateClientPage} = useGlobalContext();

  useEffect(()=> updateClientPage(), []);

  return (
    <>
    <PlacementHeader/>
    <OurClientsSection/>
    </>
  )
}

export default Clients