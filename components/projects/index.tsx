import Title from "../user-interface/title";
import Project from "../user-interface/project";
import { MainDiv } from "./styles";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "../../translations/i18n";

interface Props {}

const ProjectsComponent = (props: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <Fade triggerOnce>
                <Element name="projects">
                    <MainDiv id={"Projects"}>
                        <Title isMainTitle content={t("projectsTitle")} />
                        <Project
                            stackTags={[
                                "React",
                                "Typescript",
                                "Firebase",
                                "Styled-Components",
                                "Next.js",
                                "Redux",
                                "SASS",
                                "Netlify",
                            ]}
                            project="portfolio"
                        />
                        <Project
                            disabled
                            stackTags={[
                                "React",
                                "Typescript",
                                "Firebase",
                                "Styled-Components",
                                "Next.js",
                                "Redux",
                                "SASS",
                            ]}
                            project="fitnessApp"
                        />
                    </MainDiv>
                </Element>
            </Fade>
        </>
    );
};

export default ProjectsComponent;
