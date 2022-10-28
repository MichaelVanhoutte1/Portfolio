import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const LanguageIcon = styled.img`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 1.3rem;
    right: 3.3rem;
    filter: invert(100%) sepia(8%) saturate(7460%) hue-rotate(166deg) brightness(112%) contrast(113%);
    &:hover {
        filter: invert(57%) sepia(73%) saturate(3964%) hue-rotate(344deg) brightness(100%) contrast(101%);
    }
    @media (min-width: ${breakpoints.md}) {
        right: 1.3rem;
        width: 30px;
    }
`;
