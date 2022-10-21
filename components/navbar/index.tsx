import Link from "next/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
    const router = useRouter();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [isHomepage, setIsHomepage] = useState<boolean>(router.pathname === "/" ? true : false);

    useEffect(() => {
        setIsHomepage(router.pathname === "/" ? true : false);
    });

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
                        <Button>about</Button>
                    </Link>
                    <Link href="/blog">
                        <Button>blog</Button>
                    </Link>
                    {isHomepage ? (
                        <>
                            <ScrollLink to="projects" smooth duration={1000}>
                                <Button>projects</Button>
                            </ScrollLink>
                            <ScrollLink to="contact" smooth duration={1000}>
                                <Button>contact</Button>
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <Link href="/#projects">
                                <Button>projects</Button>
                            </Link>
                            <Link href="/#contact">
                                <Button>contact</Button>
                            </Link>
                        </>
                    )}
                </ContentDiv>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
