import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const Image = styled.img`
    margin: 0 0.5rem;
    cursor: pointer;
    filter: brightness(80%);
    &.mailIcon {
        position: relative;
        top: 4px;
    }
    &:hover {
        filter: brightness(100%);
    }
    &.fillOnHover {
        filter: brightness(0%);
        &:hover {
            filter: brightness(0%);
            //change the color of the icon when the user hovers over it
        }
    }
`;
