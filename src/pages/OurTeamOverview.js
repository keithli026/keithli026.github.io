import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom";
const OurTeamOverview = () => {
    return(
        <>
        <Container className="overviews">
            <div className="overview">
                <Link to="/about/our-team/physiotherapists">
                    <img src={process.env.PUBLIC_URL + "image_3_to_2.png"} alt="Physiotherapists"></img>
                    <h2>Physiotherapists</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/about/our-team/remedial-massage-therapist">
                    <img src={process.env.PUBLIC_URL + "image_3_to_2.png"} alt="Remedial Massage Therapist"></img>
                    <h2>Remedial Massage Therapist</h2>
                </Link>
            </div>
        </Container>
    </>
    );
}

export default OurTeamOverview;