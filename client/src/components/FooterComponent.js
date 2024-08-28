import React from "react";
import { FooterContainer, FooterContent, FooterLink } from "./FooterElements"; // Adjust the import based on your file structure

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <div><p>2024 Wicked Interactive Storytelling. All rights reserved.</p></div>
                <div>
                    <FooterLink to="/contact">Contact Us</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                </div>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
