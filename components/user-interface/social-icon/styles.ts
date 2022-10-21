import styled from "styled-components";

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
            filter: invert(43%) sepia(73%) saturate(3964%) hue-rotate(344deg) brightness(100%) contrast(101%);
        }
    }
    &.arrowIcon{
        filter: brightness(100%);
        height: 16px;
        margin: 0;
    }
`;
