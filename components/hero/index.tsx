import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HeroSection, SocialIconsDiv } from "./styled";
import { useTranslation } from "next-export-i18n";
import SocialIcon from "../user-interface/social-icon";

const Header = () => {
    const { t } = useTranslation();
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
                <Fade direction={isDesktop ? "left" : "up"} duration={1000} delay={250}>
                    <div>
                        <h1 className="hero-title">{t("heroTitle")}</h1>
                        <SocialIconsDiv>
                            <SocialIcon
                                isHeroIcon
                                link="https://github.com/MichaelVanhoutte1"
                                src="/images/icons/github-orange.svg"
                                alt="github"
                            />
                            <SocialIcon
                                isHeroIcon
                                link="https://www.linkedin.com/in/michael-vanhoutte/"
                                src="/images/icons/linkedin-orange.svg"
                                alt="linkedin"
                            />
                            <SocialIcon
                                isHeroIcon
                                link="https://stackoverflow.com/users/17942665/michael-vanhoutte"
                                src="/images/icons/stackoverflow-orange.svg"
                                alt="stackoverflow"
                            />
                            <SocialIcon
                                isHeroIcon
                                isMailIcon
                                link="mailto:contact@mvanhoutte.com"
                                src="/images/icons/email-orange.svg"
                                alt="email"
                            />
                        </SocialIconsDiv>
                    </div>
                </Fade>

                <Fade direction={isDesktop ? "left" : "up"} duration={1000} delay={750}>
                    <Link to="about" smooth duration={1000}>
                        <p className="hero-cta">
                            <span className="cta-btn cta-btn--hero">{t("heroCTA")}</span>
                        </p>
                    </Link>
                </Fade>
            </>
        </HeroSection>
    );
};

export default Header;
