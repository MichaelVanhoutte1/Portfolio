import styled from "styled-components";

export const BoxLabel = styled.div`
background-color: #252525;
margin: .25rem;
width: fit-content;
padding: .5rem .5rem;
font-weight: 500;
font-size: .9rem;
color: white;
`;

export const LabelDiv = styled.div`
display: flex;
width: clamp(300px, 100%, 700px);
flex-wrap: wrap;
justify-content: center;
margin-top: 2rem;
    &.projectLabelDiv{
        justify-content: flex-start;
        margin: 0 0 1rem 0;
    }
`;