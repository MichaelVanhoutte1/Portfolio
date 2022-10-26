import Title from "../user-interface/title";
import Project from "../user-interface/project";
import { MainDiv } from "./styles";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

interface Props {}

const ProjectsComponent = (props: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <Element name="projects">
                <MainDiv  id={"Projects"}>
                    <Title isMainTitle content={t("projectsTitle")} />
                    <Project project="portfolio" />
                    <Project project="fitnessApp"/>
                </MainDiv>
            </Element>
        </>
    );
};

export default ProjectsComponent;
