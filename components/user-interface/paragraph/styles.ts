import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";
export const Paragraph = styled.p`
    width: clamp(300px, 100%, 800px);
    font-size: 1.5rem;
    &.withMargin {
        margin: 0 0 2rem 0;
    }
    @media (min-width: ${breakpoints.md}) {
        width: clamp(500px, 100%, 800px);
    }
`;
