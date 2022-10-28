import Link from "next/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

const NavbarComponent = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [isHomepage, setIsHomepage] = useState<boolean>(router.pathname === "/" ? true : false);

    useEffect(() => {
        setIsHomepage(router.pathname === "/" ? true : false);
    },[router.pathname]);

    return (
        <>
            <NavbarDiv className={cs({ notHomepage: !isHomepage })}>
                <NameDiv>
                    <Link href="/">
                        <Name>Michael Vanhoutte</Name>
                    </Link>
                </NameDiv>
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
