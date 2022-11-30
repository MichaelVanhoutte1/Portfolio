import styled from "styled-components";
import { breakpoints } from "../../styles/variables.styled";
export const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (min-width: ${breakpoints.md}) {
        justify-content: center;
        flex-direction: column;
        max-width: 1000px;
        flex-wrap: nowrap;
        margin: auto;
    }
`;

export const AboutDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: ${breakpoints.md}) {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
`;

export const ContentDiv = styled.div`
    max-width: 800px;
    @media (min-width: ${breakpoints.md}) {
        display: flex;
        flex-direction: column;
    }
`;

export const ButtonDiv = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    button{
        margin 1rem 2rem 1rem 0;
    }
`;
