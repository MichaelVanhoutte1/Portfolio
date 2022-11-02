import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: auto;
    width: clamp(300px, 100%, 1000px);
    @media (min-width: ${breakpoints.md}) {
        min-height: calc(100vh - 17.95rem);
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    color: ${colors.primary};
    @media (min-width: ${breakpoints.sm}) {
        font-size: 3.5rem;
        line-height: 1.2;
    }
    @media (min-width: ${breakpoints.md}) {
        font-size: 3.6rem;
    }
    @media (min-width: ${breakpoints.lg}) {
        font-size: 4rem;
    }
    @media (min-width: ${breakpoints.xl}) {
        font-size: 5.6rem;
    }
`;

export const CTA = styled.a`
    font-size: 1.5rem;
    font-weight: 500;
    display: block;
    width: fit-content;
    cursor: pointer;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    padding: 0.75rem 1rem;
    margin: 1.5rem auto 0 auto;
    transition: all 0.5s;
    &:hover {
        color: ${colors.secondary};
        border: 2px solid ${colors.secondary};
    }
`;

export const ContentDiv = styled.div`
    padding: 14rem 0;
    width: clamp(300px, 100%, 1000px);
    text-align-last: center;
`;
