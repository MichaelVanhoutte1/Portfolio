import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const BurgerMenu = styled.img`
    width: 20px;
    position: absolute;
    top: 1.3rem;
    right: 2rem;
    @media (min-width: ${breakpoints.md}) {
        display: none;
    }
    &.notHomepage{
        right: -2rem;
    }
`;
