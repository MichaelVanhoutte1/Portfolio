import Link from "next/link";
import SocialIcon from "../user-interface/social-icon";
import {
    Text,
    Copyright,
    CopyrightDiv,
    Name,
    SocialIconsDiv,
    SocialsDiv,
    FooterDiv,
    ContentDiv,
    LinksDiv,
    LinkColumn,
    LinkText,
    LinkContent
} from "./styles";

const FooterComponent = () => {
    return (
        <>
            <FooterDiv>
                <ContentDiv>
                    <CopyrightDiv>
                    <Link href="/#about"><Name>Michael</Name></Link>
                    <Link href="/#about"><Name>Vanhoutte</Name></Link>
                        <Copyright>© 2022, Built by Michael Vanhoutte</Copyright>
                    </CopyrightDiv>
                    <LinksDiv>
                        <Text>Links</Text>
                        <LinkContent>
                            <LinkColumn>
                                <Link href="/about">
                                    <LinkText>About</LinkText>
                                </Link>
                                <Link href="/#projects">
                                    <LinkText>Projects</LinkText>
                                </Link>
                            </LinkColumn>
                            <LinkColumn>
                                <Link href="/blog">
                                    <LinkText>Blog</LinkText>
                                </Link>
                                <Link href="/#contact">
                                    <LinkText>Contact</LinkText>
                                </Link>
                            </LinkColumn>
                        </LinkContent>
                    </LinksDiv>
                    <SocialsDiv>
                        <Text>Follow me on</Text>
                        <SocialIconsDiv>
                            <SocialIcon
                                link="https://github.com/MichaelVanhoutte1"
                                src="/images/icons/github.svg"
                                alt="github"
                            />
                            <SocialIcon
                                link="https://www.linkedin.com/in/michael-vanhoutte/"
                                src="/images/icons/linkedin.svg"
                                alt="linkedin"
                            />
                            <SocialIcon
                                isMailIcon
                                link="mailto:contact@mvanhoutte.com"
                                src="/images/icons/email.svg"
                                alt="email"
                            />
                        </SocialIconsDiv>
                    </SocialsDiv>
                </ContentDiv>
            </FooterDiv>
        </>
    );
};

export default FooterComponent;
