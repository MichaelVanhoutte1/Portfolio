import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: -13rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    @media (min-width: ${breakpoints.md}) {
        margin: 0 auto 5rem auto;
    }
    h2 {
        font-weight: 600;
        margin: 0;
        padding: 0;
        font-size: 2rem;
    }
    strong {
        font-weight: 600;
    }
    a {
        color: ${colors.secondary};
        font-weight: 600;
        text-decoration: none;
    }
`;
