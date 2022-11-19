import { Outlet, NavLink, Link} from "react-router-dom";
import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "../GlobalStyle";
import "../index.scss";

function About() {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs.length);
    let activeStyle = {
        color: "#1cb7ef"
    };
    return (
        <>
            <Container>
                <nav className="breadcrumb">
                    {breadcrumbs.map(({ match, breadcrumb }, index) => (
                        <React.Fragment key={match.pathname}> 
                            <NavLink
                                to={match.pathname}
                                // style={({ isActive }) =>
                                //     isActive ? activeStyle : undefined
                                // }
                            >
                                {breadcrumb}
                            </NavLink>
                            {index === breadcrumbs.length-1 ? null : (<span>/</span>)}
                        </React.Fragment>
                    ))}
                </nav>
            </Container>
            <Outlet />
        </>
    );
}

export default About;
