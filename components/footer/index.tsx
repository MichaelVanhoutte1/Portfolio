import Link from "../user-interface/link";
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
    LinkContent,
    NameDiv,
} from "./styles";
import { useTranslation } from "next-i18next";

const FooterComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <FooterDiv>
                <ContentDiv>
                    <CopyrightDiv>
                        <NameDiv>
                            <Link href="/#about">
                                <Name>Michael</Name>
                            </Link>
                            <Link href="/#about">
                                <Name>Vanhoutte</Name>
                            </Link>
                        </NameDiv>
                        <Copyright>{t("footerBuiltBy")}</Copyright>
                    </CopyrightDiv>
                    <LinksDiv>
                        <Text>{t("footerLinks")}</Text>
                        <LinkContent>
                            <LinkColumn>
                                <Link href="/about">
                                    <LinkText>{t("footerAbout")}</LinkText>
                                </Link>
                                <Link href="/#projects">
                                    <LinkText>{t("footerProjects")}</LinkText>
                                </Link>
                            </LinkColumn>
                            <LinkColumn>
                                <Link href="/blog">
                                    <LinkText>{t("footerBlog")}</LinkText>
                                </Link>
                                <Link href="/#contact">
                                    <LinkText>{t("footerContact")}</LinkText>
                                </Link>
                            </LinkColumn>
                        </LinkContent>
                    </LinksDiv>
                    <SocialsDiv>
                        <Text>{t("footerFollowMe")}</Text>
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
