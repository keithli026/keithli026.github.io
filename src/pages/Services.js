import React from 'react';
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "../GlobalStyle";

const Services = () => {
    return (
        <>
            <Container>
                <Breadcrumb />
            </Container>
            <Outlet />
        </>
    );
}

export default Services;