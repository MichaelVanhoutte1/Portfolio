import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const LanguageIcon = styled.img`
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 1.3rem;
    right: 3.3rem;
    @media (min-width: ${breakpoints.md}) {
        right: 1.3rem;
    }
`;
