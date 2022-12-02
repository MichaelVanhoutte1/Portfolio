import styled from "styled-components";
import { breakpoints } from "../variables.styled";

export const MainDiv = styled.div`
    margin: -13rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    @media (min-width: ${breakpoints.md}) {
        margin: 0 auto 5rem auto;
    }
`;
