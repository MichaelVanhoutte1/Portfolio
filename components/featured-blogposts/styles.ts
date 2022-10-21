import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 1028px;
    margin: 0 auto;
`;

export const BlogPostDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 1028px;
    justify-content: space-between;
`;

export const BlogCTA = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.secondary};
    margin: 3.5rem 0 0 auto;
`;
