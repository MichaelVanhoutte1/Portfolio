import Link from "../user-interface/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv, LanguagePopup } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageToggler from "../user-interface/language-toggle";
import LanguageItem from "../user-interface/language-item";

const NavbarComponent = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [isHomepage, setIsHomepage] = useState<boolean>(router.pathname === "/" ? true : false);
    const [isLanguageToggleActive, setIsLanguageToggleActive] = useState<boolean>(false);

    useEffect(() => {
        setIsHomepage(router.pathname === "/" ? true : false);
    }, [router.pathname]);

    return (
        <>
            <NavbarDiv className={cs({ notHomepage: !isHomepage })}>
                <LanguageToggler
                    isLanguageToggleActive={isLanguageToggleActive}
                    toggleLanguagePopup={setIsLanguageToggleActive}
                />
                <NameDiv>
                    <Link href="/">
                        <Name>Michael Vanhoutte</Name>
                    </Link>
                </NameDiv>
                <LanguagePopup className={cs({ active: isLanguageToggleActive })}>
                    <LanguageItem
                        toggleLanguagePopup={setIsLanguageToggleActive}
                        src="/images/icons/nl.svg"
                        alt="Dutch"
                        languageCode="NL"
                    />
                    <LanguageItem
                        toggleLanguagePopup={setIsLanguageToggleActive}
                        src="/images/icons/gb.svg"
                        alt="English"
                        languageCode="EN"
                    />
                </LanguagePopup>
                <BurgerMenu isMenuActive={isMenuActive} toggleMenuFunction={setIsMenuActive} />
                <ContentDiv
                    className={cs({ menuActivated: isMenuActive, notHomepage: !isHomepage })}
                >
                    <Link href="/about">
                        <Button>{t("navAbout")}</Button>
                    </Link>
                    <Link href="/blog">
                        <Button>{t("navBlog")}</Button>
                    </Link>
                    {isHomepage ? (
                        <>
                            <ScrollLink to="projects" smooth duration={1000}>
                                <Button>{t("navProjects")}</Button>
                            </ScrollLink>
                            <ScrollLink to="contact" smooth duration={1000}>
                                <Button>{t("navContact")}</Button>
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <Link href="/#projects">
                                <Button>{t("navProjects")}</Button>
                            </Link>
                            <Link href="/#contact">
                                <Button>{t("navContact")}</Button>
                            </Link>
                        </>
                    )}
                </ContentDiv>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
