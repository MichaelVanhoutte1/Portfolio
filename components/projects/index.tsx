import BoxLabels from "../user-interface/box-labels";
import Button from "../user-interface/button";
import Title from "../user-interface/title";
import Project from "../user-interface/project";
import {
    MainDiv,
} from "./styles";

interface Props {}

const ProjectsComponent = (props: Props) => {
    return (
        <>
            <MainDiv>
            <Title content='Projects' />
                <Project/>
                <Project/>
            </MainDiv>
        </>
    );
};

export default ProjectsComponent;
