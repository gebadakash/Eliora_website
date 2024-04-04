import { useEffect } from "react";
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import { useGlobalContext } from "../components/context"
import GalleryImages from "../components/GalleryPageComponents/GalleryImages";

const Gallery = () => {

  const {updateGalleryPage} = useGlobalContext();

  useEffect(()=> updateGalleryPage(), []);

  return (
    <>
    <PlacementHeader/>
    <GalleryImages/>
    </>
  )
}

export default Gallery