import BoxLabels from "../user-interface/box-labels";
import Button from "../user-interface/button";
import Title from "../user-interface/title";
import Image from "../user-interface/image";
import { ContentDiv, MainDiv, ButtonDiv, AboutDiv } from "./styles";
import Paragraph from "../user-interface/paragraph";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-export-i18n";

const AboutComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Fade triggerOnce>
                <Element name="about">
                    <MainDiv>
                        <Title noBottomMargin isMainTitle content={t("homepageAboutMeTitle")} />
                        <AboutDiv>
                            <Image isAboutPicture src="images/about.jpg" alt="sdf" />
                            <ContentDiv>
                                <BoxLabels
                                    labelArray={[
                                        "Javascript",
                                        "Typescript",
                                        "React",
                                        "Redux",
                                        "Next.js",
                                        "Styled-Components",
                                        "HTML",
                                        "CSS",
                                        "SASS",
                                        "Git",
                                        "Gatsby",
                                        "GraphQL",
                                        "Ember",
                                        "Firebase",
                                        "Jira",
                                        "SQL",
                                        "REST",
                                    ]}
                                />
                                <Title isAboutSubtitle content={t("homepageAboutMeSubtitle")} />
                                <Paragraph isAboutMe content={t("homepageAboutMeSummary")} />
                                <ButtonDiv>
                                    <Button
                                        href="/about"
                                        content={t("homepageAboutMeReadMoreButton")}
                                    />
                                    <Button
                                        isResumeButton
                                        content={t("homepageAboutMeResumeButton")}
                                    />
                                </ButtonDiv>
                            </ContentDiv>
                        </AboutDiv>
                    </MainDiv>
                </Element>
            </Fade>
        </>
    );
};

export default AboutComponent;
