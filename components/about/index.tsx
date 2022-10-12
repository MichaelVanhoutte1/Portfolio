import BoxLabels from "../user-interface/box-labels";
import Button from "../user-interface/button";
import Title from "../user-interface/title";
import Image from "../user-interface/image";
import {
    ContentDiv,
    MainDiv,
    PictureDiv, 
    ButtonDiv,
} from "./styles";
import Paragraph from "../user-interface/paragraph"

const AboutComponent = () => {
    return (
        <>
                <Title content="My Skills"/>
            <MainDiv>
                    <Image src="https://picsum.photos/400/400" alt="sdf" />
                <ContentDiv>
                    <BoxLabels labelArray={['React','Typescript','Firebase','styled-components','Next.js','More']} />
                    <Title isAboutSubtitle content="I love building stuff"/>
                    <Paragraph content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                        exercitationem, ducimus at iure facere eius! Amet consectetur possimus
                        repellat earum? Porro optio quibusdam perspiciatis non deleniti, iure dolor
                        neque quasi?'/>
                    <ButtonDiv>
                        <Button content='Read more about me'/>
                        <Button content='Resume' />
                    </ButtonDiv>
                </ContentDiv>
            </MainDiv>
            </>
    );
};

export default AboutComponent;
