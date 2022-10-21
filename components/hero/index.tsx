import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HeroSection } from "./styled";

const Header = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }, []);

    return (
        <HeroSection>
            <>
                <Fade
                    direction={isDesktop ? "left" : "up"}
                    duration={1000}
                    delay={250}
                >
                    <h1 className="hero-title">
                        Hi, I'm Michael | Software Engineer
                    </h1>
                </Fade>
                <Fade
                    direction={isDesktop ? "left" : "up"}
                    duration={1000}
                    delay={750}
                >
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                { "Know more"}
                            </Link>
                        </span>
                    </p>
                </Fade>
            </>
        </HeroSection>
    );
};

export default Header;
