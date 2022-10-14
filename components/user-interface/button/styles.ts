import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    margin: 2rem 2rem 2rem 0 ;
    color: ${colors.white};
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    &::after {
        content: "";
        background-color: ${colors.secondary};
        width: 100%;
        position: absolute;
        z-index: -1;
        height: 100%;
        top: -7px;
        left: -7px;
        transition: 0.3s;
    }
    &:hover::after {
        top: 0px;
        left: 0px;
    }
`;
