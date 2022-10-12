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
                <Title isProjectSubtitle content='Personal project' />
                <Title isProjectTitle content='Portfolio website' />
                    <BoxLabels isProjectLabelDiv
                        labelArray={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "styled-components",
                            "Next.js",
                            "More",
                        ]}
                    />
                    <Paragraph content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                        exercitationem, ducimus at iure facere eius! Amet consectetur possimus
                        repellat earum? Porro optio quibusdam perspiciatis non deleniti, iure dolor
                        neque quasi?' />                      
                        <Button isProjectButton content="View project" />
                </ContentDiv>
                    <Image src="https://picsum.photos/400/400" alt="sdf" />
                </MainDiv>
        </>
    );
};

export default ProjectComponent;
