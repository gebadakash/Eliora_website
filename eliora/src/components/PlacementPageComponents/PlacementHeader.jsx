import { NavLink } from "react-router-dom";
import "./PlacementHeader.css";
import { useGlobalContext } from "../context";

const PlacementHeader = () => {

  const {title, subTitle} = useGlobalContext();

  return (
    <div className={`container-fluid bg-primary py-5 bgHeader`} style={{marginBottom: "90px;"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">{title}</h1>
                    <NavLink to="/" className={`h5 me-2 text-white Head`} style={{textDecoration:"none"}}>Home</NavLink>
                    <i className="bi bi-circle text-white me-2"></i>
                    <NavLink href="" className={`h5 text-white Head`} style={{textDecoration:"none"}}>{subTitle}</NavLink>
                </div>
            </div>
        </div>
  );
}

export default PlacementHeader
