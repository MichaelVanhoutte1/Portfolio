import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";

export const BoxLabel = styled.div`
background-color: ${colors.primary};
margin: .25rem;
width: fit-content;
padding: .5rem .75rem;
font-weight: 500;
font-size: 1rem;
color: ${colors.white};
`;

export const LabelDiv = styled.div`
display: flex;
width: clamp(300px, 100%, 700px);
flex-wrap: wrap;
justify-content: center;
@media (min-width: ${breakpoints.md}) {
    justify-content: flex-start;
}
margin-top: 2rem;
    &.projectLabelDiv{
        justify-content: flex-start;
        margin: 0 0 1rem 0;
    }
`;