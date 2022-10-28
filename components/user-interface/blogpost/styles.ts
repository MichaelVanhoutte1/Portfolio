import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";
export const MainDiv = styled.div`
    max-width: 1000px;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ButtonDiv = styled.div``;

export const BlogLink = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.secondary};
    margin: 3rem 0;
    width: fit-content;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;
    &:hover {
        filter: brightness(80%);
    }
`;
