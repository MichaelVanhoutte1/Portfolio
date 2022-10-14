import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: column;
    margin-bottom: 8rem;
    max-width: 1000px;
    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

export const ContentDiv = styled.div`
    margin-right: 2rem;
`;

export const ButtonDiv = styled.div``;

