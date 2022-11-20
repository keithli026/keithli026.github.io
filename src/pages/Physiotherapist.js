import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, deletePhysiotherapist } from "../PhysiotherapistInfo";

function Physiotherapist() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let physiotherapist = getPhysiotherapist(parseInt(params.PhysiotherapistId, 10));
    console.log(location, params);

    return (
        <>
            <h1>Physiotherapist {params.PhysiotherapistId}</h1>
            <div>{physiotherapist.name}</div>
            <div>{physiotherapist.gender}</div>
            <div>{physiotherapist.title}</div>
            <button
                onClick={()=> {
                    deletePhysiotherapist(physiotherapist.pid);
                    navigate("/physiotherapist" + location.search);
                }}
            >
                Delete
            </button>
        </>
    );
}

export default Physiotherapist;