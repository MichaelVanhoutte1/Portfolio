import Title from "../user-interface/title";
import Project from "../user-interface/project";
import { MainDiv } from "./styles";
import { Element } from "react-scroll";

interface Props {}

const ProjectsComponent = (props: Props) => {
    return (
        <>
            <Element name="projects">
                <MainDiv id={"Projects"}>
                    <Title content="Projects" />
                    <Project />
                    <Project />
                </MainDiv>
            </Element>
        </>
    );
};

export default ProjectsComponent;
