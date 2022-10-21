import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const CopyrightDiv = styled.div``;
export const Name = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    :first-of-type {
        margin-top: 2.5rem;
    }
`;
export const Copyright = styled.p`
    font-size: 0.9rem;
    margin: 1rem 0;
    width: 14rem;
`;
export const SocialsDiv = styled.div`
    margin: 2rem 0;
`;
export const Text = styled.p``;
export const SocialIconsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

export const FooterDiv = styled.div`
    background-color: ${colors.primary};
    height: 18rem;
    color: ${colors.primaryText};
    padding: 0 2rem;
    @media (min-width: ${breakpoints.sm}) {
        height: 11rem;
    }
    &.notHomepage{
        width: 100%;
    }
`;
export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.primary};
    height: 18rem;
    color: ${colors.primaryText};
    max-width: clamp(300px, 100%, 1000px);
    margin: 0 auto;
    @media (min-width: ${breakpoints.sm}) {
        flex-direction: row;
        height: 11rem;
    }
`;
