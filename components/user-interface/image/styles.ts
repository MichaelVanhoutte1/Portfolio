import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";
export const Picture = styled.img`
    max-width: clamp(200px, 100%, 400px);
    max-height: 400px;
    &.aboutPicture {
        margin-right: 0;
        display: flex;
        align-self: center;
        @media (min-width: ${breakpoints.md}) {
            margin-right: 2rem;
            width: 28vw
        }
    }
`;