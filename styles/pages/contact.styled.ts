import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: -10rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    @media (min-width: ${breakpoints.md}) {
        min-height: calc(100vh - 26.95rem);
        margin: 3rem auto 5rem auto;
    }
`;

export const MailContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 15rem;
    align-self: center;
`;

export const EmailText = styled.p`
    margin-top: 0.8rem;
    line-height: 1.5rem;
`;
