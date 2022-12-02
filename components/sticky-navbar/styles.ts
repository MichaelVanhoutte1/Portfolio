import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const NavbarDiv = styled.div`
    display: flex;
    background: linear-gradient(
        to bottom,
        ${colors.primary} 0%,
        ${colors.primary} 21%,
        transparent 21%,
        transparent 100%
    );
    padding: 0 2rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: fill-available;
    top: 0;
    z-index: 1;
    visibility: hidden;
    &.notHomepage {
        z-index: 1;
        &.menuActivated {
            height: auto;
            background-color: ${colors.primary};
        }
    }
    &.sticky {
        background: linear-gradient(
            to bottom,
            ${colors.primary} 0%,
            ${colors.primary} 21%,
            transparent 21%,
            transparent 100%
        );
        visibility: visible;
        position: fixed;
        width: fill-available;
        top: 0;
        z-index: 1;
        height: 252.39px;
        animation: moveInMobile 0.35s linear;
        @media (min-width: ${breakpoints.md}) {
            animation: moveInDesktop 0.35s linear;
            height: auto;
            background-color: ${colors.primary};
        }
        &.menuActivated {
            height: auto;
            background-color: ${colors.primary};
        }
        &.notHomepage {
            height: auto;
        }
        @keyframes moveInDesktop {
            0% {
                top: -112px;
            }
            100% {
                top: 0px;
            }
        }
        @keyframes moveInMobile {
            0% {
                top: -52px;
            }
            100% {
                top: 0px;
            }
        }
    }
    &.noSticky {
        background: linear-gradient(
            to bottom,
            ${colors.primary} 0%,
            ${colors.primary} 21%,
            transparent 21%,
            transparent 100%
        );
        position: fixed;
        visibility: visible;
        width: fill-available;
        top: -112px;
        z-index: 1;
        height: 252.39px;
        animation: moveOutMobile 0.35s linear;
        @media (min-width: ${breakpoints.md}) {
            animation: moveOutDesktop 0.35s linear;
            height: auto;
            background-color: ${colors.primary};
        }
        &.menuActivated {
            height: auto;
            background-color: ${colors.primary};
        }
        &.notHomepage {
            height: auto;
        }
        @keyframes moveOutDesktop {
            0% {
                top: 0px;
            }
            100% {
                top: -112px;
            }
        }
        @keyframes moveOutMobile {
            0% {
                top: 0px;
            }
            100% {
                top: -52px;
            }
        }
    }
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
        &.sticky,
        &.noSticky {
            visibility: visible;
        }
    }
    &.menuActivated {
        visibility: visible;
    }
    &.notHomepage {
        @media (min-width: ${breakpoints.md}) {
            height: auto;
        }
        &.menuActivated {
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
    &.sticky {
        position: sticky;
        @media (min-width: ${breakpoints.md}) {
            position: relative;
        }
        &.menuActivated {
            position: relative;
        }
    }
`;

export const LanguagePopup = styled.div`
    background-color: ${colors.primaryText};
    width: 3.3rem;
    height: 3.6rem;
    position: absolute;
    right: 1.3rem;
    border-radius: 0.5rem;
    top: 3rem;
    z-index: 2;
    visibility: hidden;
    &.active {
        visibility: visible;
    }
    @media (min-width: ${breakpoints.md}) {
        top: 1.3rem;
        height: 2rem;
        display: flex;
        right: 4rem;
        width: auto;
    }
    @media (min-width: ${breakpoints.xl}) {
        top: 3.5rem;
        height: 3.95rem;
        width: 3.3rem;
        right: 1.3rem;
        display: block;
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
            &:hover {
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
