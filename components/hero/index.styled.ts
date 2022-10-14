import styled from "styled-components";
import { breakpoints, colors } from "../../styles/variables.styled";
export const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    font-weight: 400;
    color: ${colors.white};
    @media (max-width: 1125px) {
        align-items: flex-start;
    }

    // If you want to set a background image on the hero section, uncomment these with yout custom image

    /* background: url("/src/assets/[your-image].png");
    background-position: center;
    background-size: cover; */

    .hero-title {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 3.2rem;
        text-align: left;
        @media (min-width: ${breakpoints.sm}) {
            font-size: 3.5rem;
            line-height: 1.5;
        }
        @media (min-width: ${breakpoints.md}) {
            font-size: 3.6rem;
        }
        @media (min-width: ${breakpoints.lg}) {
            font-size: 4rem;
        }
        @media (min-width: ${breakpoints.xl}) {
            font-size: 5.6rem;
        }
    }

    .hero-cta {
        display: flex;
        @media (min-width: ${breakpoints.md}) {
            justify-content: center;
        }
        & a {
            font-size: 2.4rem;
            @media (max-width: ${breakpoints.sm}) {
                font-size: 2rem;
            }
        }
    }
`;
