import styled from "styled-components";
import { breakpoints } from "../../styles/variables.styled";
export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: ${breakpoints.md}) {
        flex-wrap: nowrap;
    }
`;

export const ContentDiv = styled.div`
max-width: 800px;
@media (min-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
}`;

export const ButtonDiv = styled.div`
    margin-top: 2rem;
`;
