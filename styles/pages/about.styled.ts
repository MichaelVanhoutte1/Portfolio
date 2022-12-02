import styled from "styled-components";
import { colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: auto;
    width: clamp(300px, 100%, 1000px);
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    a{
        color: ${colors.secondary};
        text-decoration: none;
    }
`;

export const PageTitle = styled.h1`
    font-size: 4rem;
    margin: 2rem 0;
`

export const ContentDiv = styled.div``;

export const SocialIconsDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;
    filter: brightness(0%);
`;