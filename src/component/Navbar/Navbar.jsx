import React from 'react';
import navStyle from "../../assets/styles/NavBar.module.css";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
            id: 1,
            LinksName: "About",
            LinksTo: "/about",
        },
        {
            id: 2,
            LinksName: "Resume",
            LinksTo: "/resume",
        },
        {
            id: 3,
            LinksName: "Portfolio",
            LinksTo: "/portfolio",
        },
        {
            id: 4,
            LinksName: "Contact",
            LinksTo: "/contact", 
        }
    ];

    const activeLinkStyle = {
        color: "#fcd26b", 
    };

    const location = useLocation();

    return (
        <div className={navStyle.navlink}>
            {links.map((link) => (
                <NavLink
                    to={link.LinksTo}
                    key={link.id}
                    style={location.pathname === link.LinksTo ? activeLinkStyle : {}}
                >
                    {link.LinksName}
                </NavLink>
            ))}
        </div>
    );
};

export default Navbar;
