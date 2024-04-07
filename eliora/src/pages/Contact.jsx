import { useEffect } from "react";
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"
import ContactPage from "../components/ContactPageComponents/ContactPage";

const Contact = () => {


    const {updateContactPage} = useGlobalContext();

    useEffect(()=> updateContactPage(), []);

  return (
    <>
        <PlacementHeader/>
        <ContactPage/>
    </>
  )
}

export default Contact
