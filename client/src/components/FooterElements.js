import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #4c1482; /* Match the navbar color */
    padding: 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    color: #fff; /* White text color */
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
        color: #fff
    }
`;

export const FooterLink = styled(Link)`
    color: #fff; /* White text color */
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        text-decoration: underline; /* Underline on hover */
    }
`;
