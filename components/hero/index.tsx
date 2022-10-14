import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HeroSection } from "./index.styled";

const Header = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <HeroSection>
            <>
                <Fade
                    direction={isDesktop ? "left" : "up"}
                    duration={1000}
                    delay={500}
                >
                    <h1 className="hero-title">
                        {"Hi, my name is"}{" "}
                        <span className="text-color-main">{ "Your Name"}</span>
                        <br />
                        { "I'm the Unknown Developer."}
                    </h1>
                </Fade>
                <Fade
                    direction={isDesktop ? "left" : "up"}
                    duration={1000}
                    delay={1000}
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
