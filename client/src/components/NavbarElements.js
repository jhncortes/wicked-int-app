import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #4c1482; /* Purple background */
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff; /* White text color */
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        font-weight: bold;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px; /* Adjust or remove this margin */
    padding-right: 20px; /* Add some padding to prevent overflow */
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.img`
    max-width: 50px; /* Adjust size as necessary */
    margin-right: 20px;
`;

// New styled component for the button
export const BookButton = styled(Link)`
    background-color: #ffcc00; /* Desired button background color */
    color: #000; /* Text color */
    padding: 10px 20px; /* Adjust padding as necessary */
    border-radius: 25px; /* Rounded corners */
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px; /* Decrease the margin to move it inwards */
    transition: background-color 0.3s;

    &:hover {
        background-color: #e6b800; /* Darker shade on hover */
    }
`;
