import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";

export const CopyrightDiv = styled.div``;

export const NameDiv = styled.div`
    filter: brightness(80%);
    width: fit-content;
    transition: filter 0.2s ease-in-out;
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            filter: brightness(100%);
        }
    }
`;

export const Name = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;

    width: fit-content;
    &:first-of-type {
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
export const Text = styled.p`
    color: ${colors.lightgray};
    font-weight: 500;
`;
export const SocialIconsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`;

export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
`;

export const LinkContent = styled.div`
    display: flex;
    align-items: left;
    margin-top: 0.5rem;
    flex-direction: row;
`;

export const LinkText = styled.p`
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0.5rem 0 0 0;
    cursor: pointer;
    width: fit-content;
    transition: filter 0.2s ease-in-out;
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            filter: brightness(80%);
        }
    }
`;

export const FooterDiv = styled.div`
    background-color: ${colors.primary};
    height: 27rem;
    color: ${colors.primaryText};
    padding: 0 2rem;
    @media (min-width: ${breakpoints.md}) {
        height: 11rem;
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
    @media (min-width: ${breakpoints.md}) {
        flex-direction: row;
        height: 11rem;
    }
`;
