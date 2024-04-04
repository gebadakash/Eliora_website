import { useEffect } from "react";
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader";
import AgumentedSection from "../components/PlacementPageComponents/AgumentedSection";
import FormSection from "../components/ContractPageComponents/FormSection";
import TechnologiesSection from "../components/ContractPageComponents/TechnologiesSection";


const Contract = () => {

    const {updateContractPage} = useGlobalContext();

    useEffect(()=> updateContractPage(), []);

  return (
    <>
    <PlacementHeader/>
    <AgumentedSection/>
    <FormSection/>
    <TechnologiesSection/>
    </>
  )
}

export default Contract
