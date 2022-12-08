import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";

export const StackInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 3rem 0;
    @media (min-width: ${breakpoints.sm}) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1rem;
    }
`;

export const TypeDiv = styled.div`
    margin: 0;
`;

export const StackDiv = styled.div`
    margin: 0;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export const LiveDiv = styled.div`
    margin: 0;
`;

export const ListItem = styled.li`
    line-height: 1.75;
    
`;

export const ProjectLink = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${colors.secondary};
    width: fit-content;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            filter: brightness(80%);
        }
    }
`;