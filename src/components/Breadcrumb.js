import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <nav className="breadcrumb">
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
                <React.Fragment key={match.pathname}>
                    <NavLink
                        to={match.pathname}
                    >
                        {breadcrumb}
                    </NavLink>
                    {index === breadcrumbs.length - 1 ? null : (<span>{">"}</span>)}
                </React.Fragment>
            ))}
        </nav>
    );
}

export default Breadcrumb;