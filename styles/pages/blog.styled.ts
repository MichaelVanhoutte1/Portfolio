import styled from "styled-components";
import { colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: 0 auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
`;

export const BlogPost = styled.div``;

export const BlogTitle = styled.h1`
    font-size: 2rem;
    margin: 3rem 0 1rem 0;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.secondary};
`;
