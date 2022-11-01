import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: 0 auto 5rem auto;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    @media (min-width: ${breakpoints.sm}) {
        min-height: calc(100vh - 19.4rem);
    }
    @media (min-width: ${breakpoints.md}) {
        min-height: calc(100vh - 22.95rem);
    }
`;

export const BlogPost = styled.div``;

export const BlogTitle = styled.h1`
    font-size: 2rem;
    margin: 3rem 0 1rem 0;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.secondary};
    transition: filter 0.2s ease-in-out;
    &:hover {
        filter: brightness(80%);
    }
    &.disabled{
        color: ${colors.disabled};
        cursor: default;
        &:hover {
            filter: brightness(100%);
        }
    }
`;
