import { useEffect } from "react"
import AgumentedSection from "../components/PlacementPageComponents/AgumentedSection"
import GetInTouch from "../components/PlacementPageComponents/GetInTouch"
import ITService from "../components/PlacementPageComponents/ITService"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import { useGlobalContext } from "../components/context"

const Placement = () => {
  const {updatePlacementPage} = useGlobalContext();

  useEffect(()=> updatePlacementPage(), []);
  
  return (
    <>
      <PlacementHeader/>
      <AgumentedSection/>
      <ITService/>
      <GetInTouch/>
    </>


  )
}

export default Placement
