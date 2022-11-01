import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: clamp(300px, 100%, 1000px);
    margin: 0 auto;
`;

export const BlogPostDiv = styled.div`
    display: flex;
    max-width: clamp(300px, 100%, 1000px);
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const BlogCTA = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.secondary};
    margin: 0 auto 3rem 0;
    transition: filter 0.2s ease-in-out;
    &:hover {
        filter: brightness(80%);
    }
    @media (min-width: ${breakpoints.lg}) {
        margin: 1rem 0 2rem auto;
    }
`;
