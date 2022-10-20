import BoxLabels from "../user-interface/box-labels";
import Button from "../user-interface/button";
import Title from "../user-interface/title";
import Image from "../user-interface/image";
import { ContentDiv, MainDiv, ButtonDiv, AboutDiv } from "./styles";
import Paragraph from "../user-interface/paragraph";
import { Element } from "react-scroll";

const AboutComponent = () => {
    return (
        <>
            <Element name="about">
                <MainDiv>
                    <Title isMainTitle content="My Skills" />
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
                            <Title isAboutSubtitle content="I love building stuff" />
                            <Paragraph
                                isAboutMe
                                content="I started playing with computers from a young age. 
                            I was always fascinated by the way they worked and how they could be used to create things. 
                            I started with simple games and animations, and then moved on to building websites. 
                            I love the feeling of creating something from scratch and seeing it come to life. 
                            I am always looking for new challenges and ways to improve my skills."
                            />
                            <ButtonDiv>
                                <Button href="/about" content="Read more" />
                                <Button isResumeButton content="Resume" />
                            </ButtonDiv>
                        </ContentDiv>
                    </AboutDiv>
                </MainDiv>
            </Element>
        </>
    );
};

export default AboutComponent;
