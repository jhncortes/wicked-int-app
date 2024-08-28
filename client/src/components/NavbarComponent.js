import React from "react";
import { Nav, NavLink, NavMenu, Logo, BookButton } from "./NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Nav><Link to='/'>
                <Logo src="logo.png" alt="Logo" />
                </Link>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/info" activeStyle>
                        Info
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    {/* Use the new BookButton styled component */}
                    <BookButton to="/BookingForm">
                        Book Consultation
                    </BookButton>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
