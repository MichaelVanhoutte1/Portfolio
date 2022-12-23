import type { NextPage } from "next";
import SEO from "../components/seo";
import Button from "../components/user-interface/button";
import Paragraph from "../components/user-interface/paragraph";
import SocialIcon from "../components/user-interface/social-icon";
import Title from "../components/user-interface/title";
import { ContentDiv, MainDiv, PageTitle, SocialIconsDiv, Text } from "../styles/pages/about.styled";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const About: NextPage = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <>
            <SEO
                title="About Michael Vanhoutte"
                description="I am a software engineer specialized in web development. My toolset includes javascript, typescript, react, html, css and a whole lot of creativity."
                name="Michael Vanhoutte"
                type="website"
            />
            <MainDiv>
                <Fade triggerOnce>
                    <PageTitle>{t("aboutMeTitle")}</PageTitle>
                    <Text>
                        {t("aboutMeSubtitle")}
                        <Link target="_blank" rel="noreferrer" href={{pathname: "https://www.mvanhoutte.cloud", query: query }}>
                            CV
                        </Link>
                        ?
                    </Text>
                    <ContentDiv>
                        <Title isAboutSubtitle content={t("aboutMeQuickStoryTitle")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("aboutMeQuickStory")} />
                    </ContentDiv>
                    <ContentDiv>
                        <Title isAboutSubtitle content={t("aboutMeAsDeveloperTitle")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("aboutMeAsDeveloper")} />
                    </ContentDiv>
                    <ContentDiv>
                        <Title isAboutSubtitle content={t("aboutMeAsPersonTitle")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("aboutMeAsPerson")} />
                    </ContentDiv>
                    <ContentDiv>
                        <Title isAboutSubtitle content={t("aboutMeAsColleagueTitle")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("aboutMeAsColleague")} />
                    </ContentDiv>
                    <Title content={t("contactTitle")} />
                    <Text>{t("contactSubtitle")}</Text>
                    <SocialIconsDiv>
                        <SocialIcon
                            fillOnHover
                            link="https://github.com/MichaelVanhoutte1"
                            src="/images/icons/github.svg"
                            alt="github"
                        />
                        <SocialIcon
                            fillOnHover
                            link="https://www.linkedin.com/in/michael-vanhoutte/"
                            src="/images/icons/linkedin.svg"
                            alt="linkedin"
                        />
                        <SocialIcon
                            fillOnHover
                            link="https://stackoverflow.com/users/17942665/michael-vanhoutte"
                            src="/images/icons/stackoverflow.svg"
                            alt="stackoverflow"
                        />
                        <SocialIcon
                            fillOnHover
                            isMailIcon
                            link="mailto:contact@mvanhoutte.com"
                            src="/images/icons/email.svg"
                            alt="email"
                        />
                    </SocialIconsDiv>
                    <Button href="mailto:contact@mvanhoutte.com" content={t("contactCTA")} />
                </Fade>
            </MainDiv>
        </>
    );
};

export default About;
