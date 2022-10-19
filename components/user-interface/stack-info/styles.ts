import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";

export const StackInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 3rem 0;
    @media (min-width: ${breakpoints.sm}) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 800px;
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