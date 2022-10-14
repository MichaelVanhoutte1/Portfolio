import BoxLabels from "../box-labels";
import Button from "../button";
import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv } from "./styles";

interface Props {}

const ProjectComponent = (props: Props) => {
    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isProjectSubtitle content="Personal project" />
                    <Title isProjectTitle content="Portfolio website" />
                    <BoxLabels
                        isProjectLabelDiv
                        labelArray={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "Styled-Components",
                            "Next.js",
                            "Redux",
                            "SASS",
                        ]}
                    />
                    <Paragraph
                        content="I built this website to showcase my work and skills, and to allow people to have a better insight into who I am."
                    />
                    <Button isProjectButton content="View project" />
                </ContentDiv>
                <Image src="https://picsum.photos/400/400" alt="sdf" />
            </MainDiv>
        </>
    );
};

export default ProjectComponent;
