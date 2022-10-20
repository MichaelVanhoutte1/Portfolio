import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    width: 100%;
    justify-content: center;
    &.homepage {
        position: absolute;
        top: 100vh;
    }
`;

export const ContentDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    width: 1028px;
    justify-content: space-between;
    &.homepage {
        position: absolute;
        top: 100vh;
    }
`;

export const Button = styled.button`
    display: block;
    margin: 10px 0 10px;
    width: 80px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    padding: 10px;
    color: ${colors.white};
    background: transparent;
    border: none;
    text-align: center;

    position: relative;
    z-index: 1;
    transition: all .5s;
    &:hover {
        color: ${colors.white};
        transition: all .5s;
    }
    &:after {
        transition: all .5s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
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
