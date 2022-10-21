import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ContentDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    width: 1028px;
    justify-content: space-between;
`;

export const NameDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    width: 1028px;
    justify-content: center;
    padding-top: 1.3rem;
`;

export const Name = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.primaryText};
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
        color: ${colors.secondary};
    }
`;

export const Button = styled.button`
    display: block;
    margin: 10px 0 10px;
    width: fit-content;
    font-size: 1rem;
    font-family: "Merriweather", sans-serif;
    font-weight: 700;
    cursor: pointer;
    padding: 10px 10px 4px 10px;
    color: ${colors.primaryText};
    background: transparent;
    border: none;
    text-align: center;
    border-bottom: 5px solid ${colors.secondary};
    position: relative;
    z-index: 1;
    transition: all 0.5s;
    &:hover {
        color: ${colors.primaryText};
    }
    &:after {
        transition: all 0.5s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin-top: auto;
        width: 100%;
        height: 1px;

        content: ".";
        color: transparent;
        background: ${colors.secondary};
        visibility: none;
        opacity: 0;
        z-index: -1;
    }
    &:hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }

    @-webkit-keyframes fill {
        0% {
            width: 0%;
            height: 1px;
        }
        50% {
            width: 100%;
            height: 1px;
        }
        100% {
            width: 100%;
            height: 100%;
            background: #333;
        }
    }
`;
