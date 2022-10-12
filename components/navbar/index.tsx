import Link from "next/link";
import { Button, NavbarDiv } from "./styles";

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
                        <a>Portfolio</a>
                    </Button>
                </Link>
                <Link href="/">
                    <Button>
                        <a>Contact</a>
                    </Button>
                </Link>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
