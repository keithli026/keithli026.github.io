import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, deletePhysiotherapist } from "../PhysiotherapistInfo";
import { Container } from "../GlobalStyle";

const Physiotherapist = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let physiotherapist = getPhysiotherapist(parseInt(params.physiotherapistId, 10));
    console.log(location, params.physiotherapistId);
    return (
        <>
            <Container>
                <h1>Physiotherapist {params.physiotherapistId}</h1>
                <img src={physiotherapist.photo} alt={physiotherapist.name} />
                <h1>{physiotherapist.name}</h1>
                <div>{physiotherapist.title}</div>
                <button
                    onClick={() => {
                        deletePhysiotherapist(physiotherapist.pid);
                        navigate("/physiotherapist" + location.search);
                    }}
                >
                    Delete
                </button>
            </Container>
        </>
    );
}

export default Physiotherapist;