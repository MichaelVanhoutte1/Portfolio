import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: column;
    margin-bottom: 8rem;
    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

export const ContentDiv = styled.div`
    margin-right: 2rem;
    max-width: 800px;
`;

export const ButtonDiv = styled.div``;

