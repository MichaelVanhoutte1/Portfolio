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
    LinkContent,
    NameDiv,
} from "./styles";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const FooterComponent = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <>
            <FooterDiv>
                <ContentDiv>
                    <CopyrightDiv>
                        <NameDiv>
                            <Link href={{ pathname: "/", query: query }}>
                                <Name>Michael</Name>
                            </Link>
                            <Link href={{ pathname: "/", query: query }}>
                                <Name>Vanhoutte</Name>
                            </Link>
                        </NameDiv>
                        <Copyright>{t("footerBuiltBy")}</Copyright>
                    </CopyrightDiv>
                    <LinksDiv>
                        <Text>{t("footerLinks")}</Text>
                        <LinkContent>
                            <LinkColumn>
                                <Link prefetch href={{ pathname: "/about", query: query }}>
                                    <LinkText>{t("footerAbout")}</LinkText>
                                </Link>
                                <Link href={{ pathname: "/projects", query: query }}>
                                    <LinkText>{t("footerProjects")}</LinkText>
                                </Link>
                            </LinkColumn>
                            <LinkColumn>
                                <Link href={{ pathname: "/blog", query: query }}>
                                    <LinkText>{t("footerBlog")}</LinkText>
                                </Link>
                                <Link href={{ pathname: "/contact", query: query }}>
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
                                link="https://stackoverflow.com/users/17942665/michael-vanhoutte"
                                src="/images/icons/stackoverflow.svg"
                                alt="stackoverflow"
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
