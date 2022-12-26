import Title from "../user-interface/title";
import Project from "../user-interface/project";
import { MainDiv } from "./styles";
import { useTranslation } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";

const ProjectsComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <Fade triggerOnce>
                <MainDiv id={"projects"}>
                    <Title isMainTitle content={t("projectsTitle")} />
                    <Project
                        stackTags={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "Styled-Components",
                            "Next.js",
                            "Redux",
                            "SaSS",
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
                            "SaSS",
                        ]}
                        project="fitnessApp"
                    />
                </MainDiv>
            </Fade>
        </>
    );
};

export default ProjectsComponent;
