import Link from "next/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv, LanguagePopup } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useEffect, useState } from "react";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { debounce } from "lodash";
import LanguageToggler from "../user-interface/language-toggle";
import LanguageItem from "../user-interface/language-item";

const NavbarComponent = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    const router = useRouter();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [isHomepage, setIsHomepage] = useState<boolean>(router.pathname === "/" ? true : false);
    const [isLanguageToggleActive, setIsLanguageToggleActive] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [noSticky, setNoSticky] = useState<boolean>(false);
    if (typeof window !== "undefined") {
        var lastScrollTop = window.pageYOffset;
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsHomepage(location.pathname === "/" ? true : false);
        }
    }, [router.pathname]);

    let scrollFunction = () => {
        var st = window.pageYOffset;
        if (st > lastScrollTop) {
            setIsSticky(false);
            if (location.pathname === "/" && st < window.visualViewport!.height) {
                setNoSticky(false);
            } else {
                console.log(st, lastScrollTop);
                if (isMenuActive) {
                    setIsMenuActive(false);
                }
                setNoSticky(true);
            }
        } else if (location.pathname === "/" && st < window.visualViewport!.height) {
            setIsSticky(false);
            setNoSticky(false);
        } else {
            if (location.pathname === "/" && st < lastScrollTop) {
                setIsSticky(true);
                setNoSticky(false);
            } else if (location.pathname !== "/") {
                setIsSticky(true);
                setNoSticky(false);
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    };

    scrollFunction = debounce(scrollFunction, 100);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollFunction);
    }

    return (
        <>
            <NavbarDiv
                className={cs({
                    notHomepage: !isHomepage,
                    sticky: isSticky,
                    noSticky: noSticky,
                    menuActivated: isMenuActive,
                })}
            >
                <LanguageToggler
                    isLanguageToggleActive={isLanguageToggleActive}
                    toggleLanguagePopup={setIsLanguageToggleActive}
                />
                <NameDiv
                    className={cs({
                        sticky: isSticky,
                        menuActivated: isMenuActive,
                        notHomepage: !isHomepage,
                    })}
                >
                    <Link href={{ pathname: "/", query: query }}>
                        <Name
                            onClick={() => {
                                setIsMenuActive(false);
                                setIsSticky(false);
                            }}
                        >
                            Michael Vanhoutte
                        </Name>
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
                        <Button
                            className={router.pathname === "/about" ? "isActive" : ""}
                            onClick={() => {
                                setIsMenuActive(false);
                                setIsSticky(false);
                            }}
                        >
                            {t("navAbout")}
                        </Button>
                    </Link>
                    <Link href={{ pathname: "/blog", query: query }}>
                        <Button
                            className={router.pathname === "/blog" ? "isActive" : ""}
                            onClick={() => {
                                setIsMenuActive(false);
                                setIsSticky(false);
                            }}
                        >
                            {t("navBlog")}
                        </Button>
                    </Link>
                    <Link href={{ pathname: "/projects", query: query }}>
                        <Button
                            className={router.pathname === "/projects" ? "isActive" : ""}
                            onClick={() => {
                                setIsMenuActive(false);
                                setIsSticky(false);
                            }}
                        >
                            {t("navProjects")}
                        </Button>
                    </Link>
                    {isHomepage ? (
                        <>
                            <ScrollLink to="contact" smooth duration={1000}>
                                <Button
                                    onClick={() => {
                                        setIsMenuActive(false);
                                        setIsSticky(false);
                                    }}
                                >
                                    {t("navContact")}
                                </Button>
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <Link href={{ pathname: "#contact", query: query }}>
                                <Button
                                    className={router.pathname === "/contact" ? "isActive" : ""}
                                    onClick={() => {
                                        setIsMenuActive(false);
                                        setIsSticky(false);
                                    }}
                                >
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
