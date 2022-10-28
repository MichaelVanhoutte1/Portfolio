import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";

export const LanguageIcon = styled.img`
    width: 20px;
`;

export const LanguageText = styled.p`
    width: 20px;
    margin-right: .3rem;
    font-weight: 600;
`;

export const LanguageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${colors.primary};
    margin: 0 auto;
    padding: .4rem;
    &:nth-child(odd){
        border-radius: .5rem .5rem 0 0;
    }
    &:nth-child(even){
        border-radius: 0 0 .5rem .5rem;
    }
    &:hover {
        cursor: pointer;
        background-color: ${colors.secondary};
        transition: background-color .5s;
        transition: color .3s;
        border: none;
        color: ${colors.primaryText};
    }
    @media (min-width: ${breakpoints.md}) {
        margin: 0 auto;
        padding: .5rem;
        &:nth-child(odd){
            border-radius: .5rem .5rem 0 0;
        }
        &:nth-child(even){
            border-radius: 0 0 .5rem .5rem;
        }
    }
`;
