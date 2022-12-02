import styled from "styled-components";
import { breakpoints } from "../variables.styled";

export const MainDiv = styled.div`
    margin: -10rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    @media (min-width: ${breakpoints.md}) {
        min-height: calc(100vh - 22.95rem);
        margin: 3rem auto 5rem auto;
    }
`;
