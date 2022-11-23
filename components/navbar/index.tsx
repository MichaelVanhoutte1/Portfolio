import Link from "next/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv, LanguagePopup } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useEffect, useState } from "react";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

import LanguageToggler from "../user-interface/language-toggle";
import LanguageItem from "../user-interface/language-item";

const NavbarComponent = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

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
                    <Link href={{ pathname: "/", query: query }}>
                        <Name>Michael Vanhoutte</Name>
                    </Link>
                </NameDiv>
                <LanguagePopup className={cs({ active: isLanguageToggleActive })}>
                    <LanguageItem
                        toggleLanguagePopup={setIsLanguageToggleActive}
                        src="/images/icons/nl.svg"
                        alt="Dutch"
                        languageCode="nl"
                    />
                    <LanguageItem
                        toggleLanguagePopup={setIsLanguageToggleActive}
                        src="/images/icons/gb.svg"
                        alt="English"
                        languageCode="en"
                    />
                </LanguagePopup>
                <BurgerMenu isMenuActive={isMenuActive} toggleMenuFunction={setIsMenuActive} />
                <ContentDiv
                    className={cs({ menuActivated: isMenuActive, notHomepage: !isHomepage })}
                >
                    <Link href={{ pathname: "/about", query: query }}>
                        <Button className={router.pathname === '/about' ? 'isActive' : ''} onClick={() => setIsMenuActive(false)}>{t("navAbout")}</Button>
                    </Link>
                    <Link href={{ pathname: "/blog", query: query }}>
                        <Button className={router.pathname === '/blog' ? 'isActive' : ''} onClick={() => setIsMenuActive(false)}>{t("navBlog")}</Button>
                    </Link>
                    {isHomepage ? (
                        <>
                            <ScrollLink to="contact" smooth duration={1000}>
                                <Button onClick={() => setIsMenuActive(false)}>
                                    {t("navContact")}
                                </Button>
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <Link href={{ pathname: "/projects", query: query }}>
                                <Button className={router.pathname === '/projects' ? 'isActive' : ''} onClick={() => setIsMenuActive(false)}>
                                    {t("navProjects")}
                                </Button>
                            </Link>
                            <Link href={{ pathname: "/#contact", query: query }}>
                                <Button className={router.pathname === '/contact' ? 'isActive' : ''} onClick={() => setIsMenuActive(false)}>
                                    {t("navContact")}
                                </Button>
                            </Link>
                        </>
                    )}
                </ContentDiv>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
