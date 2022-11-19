import { Outlet } from "react-router-dom";
import { Container } from "../GlobalStyle";
function OurTeam() {
    return(
        <>
            <Container>
                <h1>Our Team</h1>
            </Container>
            <Outlet />
        </>
    );
}

export default OurTeam;