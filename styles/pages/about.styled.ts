import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin-top: -13rem;
    width: clamp(300px, 100%, 1000px);
    @media (min-width: ${breakpoints.md}) {
        margin: auto;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    a {
        color: ${colors.secondary};
        text-decoration: none;
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.5rem;
    margin: 2rem 0;
    @media (min-width: ${breakpoints.md}) {
        font-size: 4rem;
`;

export const ContentDiv = styled.div``;

export const SocialIconsDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;
    filter: brightness(0%);
`;
