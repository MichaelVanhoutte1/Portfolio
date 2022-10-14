import Link from "next/link";
import { Button, NavbarDiv } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const NavbarComponent = () => {
    const router = useRouter();
    let isHomepage = router.pathname === "/";

    return (
        <>
            <NavbarDiv>
                <Link href="/">
                    <Button>
                        <a>Home</a>
                    </Button>
                </Link>
                <Link href="/about">
                    <Button>
                        <a>About</a>
                    </Button>
                </Link>
                {isHomepage ? (
                    <>
                        <ScrollLink to="projects" smooth duration={1000}>
                            <Button>Projects</Button>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth duration={1000}>
                            <Button>Contact</Button>
                        </ScrollLink>
                    </>
                ) : (
                    <>
                        <Link href="/#projects">
                            <Button>Projects</Button>
                        </Link>
                        <Link href="/#contact">
                            <Button>Contact</Button>
                        </Link>
                    </>
                )}
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
