import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";
export const Picture = styled.img`
    max-width: clamp(200px, 100%, 400px);
    max-height: 400px;
    margin-right: auto;
    &.aboutPicture {
        margin-right: 0;
        display: flex; 
        align-self: center;
        @media (min-width: ${breakpoints.md}) {
            margin: 0 2rem 0 0;
            width: 28vw
        }
    }
    @media (min-width: ${breakpoints.lg}) {
        margin-left: 2rem;
    }
`;