import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom";
const AboutOverview = () => {
    return (
        <>
            <Container>
                <h1>About</h1>
            </Container>
            <Container className="overviews">
                <div className="overview">
                    <Link to="/about/our-team">
                        <img src={process.env.PUBLIC_URL + "image_3_to_2.png"} alt="Our Team"></img>
                        <h2>Our Team</h2>
                    </Link>
                </div>
                <div className="overview">
                    <Link to="/about/pricing">
                        <img src={process.env.PUBLIC_URL + "image_3_to_2.png"} alt="Pricing"></img>
                        <h2>Pricing</h2>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default AboutOverview;