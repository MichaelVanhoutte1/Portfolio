import Link from "next/link";
import { Button, NavbarDiv } from "./styles";
import { Link as ScrollLink } from "react-scroll";

const NavbarComponent = () => {
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
                <Link href="/">
                    <Button>
                        <ScrollLink to="projects" smooth duration={1000}>
                            Projects
                        </ScrollLink>
                    </Button>
                </Link>
                <Link href="/">
                    <Button>
                        <ScrollLink to="contact" smooth duration={1000}>
                            Contact
                        </ScrollLink>
                    </Button>
                </Link>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
