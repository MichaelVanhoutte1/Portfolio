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
    margin-top: 3rem;
    cursor: pointer;
`;

