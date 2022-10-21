import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";
export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    margin: 5rem 0 2rem 0;
    &.aboutSubtitle {
        font-size: 1.5rem;
        font-weight: bold;
    }
    &.projectTitle {
        margin: 1.2rem 0;
        font-size: 4rem;
        font-weight: 400;
    }
    &.projectSubtitle {
        font-size: .95rem;
        letter-spacing: .1rem;
        margin: 0;
        font-family: 'Merriweather',sans-serif;
    }
    &.emailTitle {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        font-weight: 500;
    }
    &.stackInfoTitle {
        font-size: 1.5rem;
        margin: 1rem 0;
        font-weight: 700;
    }
`;

export const MainTitle = styled.p`
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 5px;
    width: fit-content;
    margin: 3rem 0;
    -webkit-text-stroke-width: 2px;
    -moz-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${colors.primary};
    -moz-text-stroke-color: ${colors.primary};
    color: transparent;
    transition: .3s;
    text-shadow: -3px -3px ${colors.secondary};
    &:hover {
        text-shadow: 0px 0px ${colors.secondary};
        transition: .3s;
    }
    &.noBottomMargin {
        margin: 3rem 0;
        @media (min-width: ${breakpoints.md}) {
            margin: 3rem 0 0 0;
        }
    }
`;
