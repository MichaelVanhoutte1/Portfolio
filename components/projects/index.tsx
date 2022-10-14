import BoxLabels from "../user-interface/box-labels";
import Button from "../user-interface/button";
import Title from "../user-interface/title";
import Project from "../user-interface/project";
import { MainDiv } from "./styles";
import { Element } from "react-scroll";

interface Props {}

const ProjectsComponent = (props: Props) => {
    return (
        <>
            <Element name="projects">
                <MainDiv>
                    <Title content="Projects" />
                    <Project />
                    <Project />
                </MainDiv>
            </Element>
        </>
    );
};

export default ProjectsComponent;
