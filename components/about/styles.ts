import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (min-width: $md) {
        background-color: red;
    }
`;

export const PictureDiv = styled.div`
    display: flex;
`;
export const ContentDiv = styled.div``;

export const ButtonDiv = styled.div`
    margin-top: 2rem;
`;
