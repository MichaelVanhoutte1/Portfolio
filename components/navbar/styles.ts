import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    position: relative;
    width: 100%;
    top: 100vh;
`;

export const Button = styled.button`
    display: block;
    margin: 10px 10px 10px 0;
    width: 80px;
    padding: 10px;
    color: ${colors.white};
    background: transparent;

    border: 2px solid ${colors.primary};
    border-radius: 4px;
    text-align: center;
`;
