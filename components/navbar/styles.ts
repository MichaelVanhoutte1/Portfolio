import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    margin: 0;
    padding: 0 2rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ContentDiv = styled.div`
    background-color: ${colors.primary};
    max-width: 1028px;
    visibility: hidden;
    padding-bottom: 1rem;
    @media (min-width: ${breakpoints.md}) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        visibility: visible;
    }
    &.menuActivated {
        visibility: visible;
    }
    &.notHomepage {
        height: 0;
        @media (min-width: ${breakpoints.md}) {
            height: auto;
        }
        &.menuActivated {
            height: 12.5rem;
            @media (min-width: ${breakpoints.md}) {
                height: auto;
            }
        }
    }
`;

export const NameDiv = styled.div`
    display: flex;
    background-color: ${colors.primary};
    max-width: (300px, 100%, 1028px);
    justify-content: center;
    padding-top: 1.3rem;
`;

export const LanguagePopup = styled.div`
    background-color: ${colors.primaryText};
    width: 3.3rem;
    height: 3.6rem;
    position: absolute;
    right: 1.3rem;
    border-radius: 0.5rem;
    top: 3rem;
    visibility: hidden;
    &.active {
        visibility: visible;
    }
    @media (min-width: ${breakpoints.md}) {
        top: 3.5rem;
        height: 3.95rem;
    }
`;

export const Name = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.primaryText};
    text-decoration: none;
    transition: color 0.5s;
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            color: ${colors.secondary};
        }
    }
`;

export const Button = styled.button`
    display: block;
    margin: 10px auto 10px;
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
    @media (min-width: ${breakpoints.md}) {
        margin: 10px 0 10px;
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
            display: block;
            opacity: 1;
            visibility: visible;
            height: 100%;
        }
        &.isActive {
            background: ${colors.secondary};
            transition: color 0.2s ease-in-out;
            &:hover{
                color: #cccccc;
            }
        }
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
