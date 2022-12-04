import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "../GlobalStyle";
import Breadcrumb from "../components/Breadcrumb";

const Conditions = () => {
    return (
        <>
            <Container>
                <Breadcrumb />
            </Container>
            <Outlet />
        </>
    );
}

export default Conditions;