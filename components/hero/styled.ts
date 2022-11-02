import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";
export const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
    background: ${colors.primary};
    font-weight: 400;
    color: ${colors.primaryText};
    @media (max-width: 1125px) {
        align-items: flex-start;
    }

    .hero-title {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 3.2rem;
        margin-top: 10vh;
        text-align: left;
        @media (min-width: ${breakpoints.sm}) {
            font-size: 3.5rem;
            line-height: 1.5;
        }
        @media (min-width: ${breakpoints.md}) {
            font-size: 3.6rem;
            margin-top: 30vh;
        }
        @media (min-width: ${breakpoints.lg}) {
            font-size: 4rem;
        }
        @media (min-width: ${breakpoints.xl}) {
            font-size: 5.6rem;
        }
    }

    .hero-cta {
        cursor: pointer;
        display: flex;
        border: 3px solid ${colors.primaryText};
        padding: 1.2rem 2.4rem;
        transition: all 0.5s;
        @media (min-width: ${breakpoints.md}) {
            justify-content: center;
            &:hover {
                color: ${colors.secondary};
                border: 3px solid ${colors.secondary};
            }
        }
        & span {
            font-size: 2.4rem;
            @media (max-width: ${breakpoints.sm}) {
                font-size: 2rem;
            }
        }
    }
`;
