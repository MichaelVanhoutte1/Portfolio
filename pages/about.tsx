import type { NextPage } from "next";
import Button from "../components/user-interface/button";
import Paragraph from "../components/user-interface/paragraph";
import SocialIcon from "../components/user-interface/social-icon";
import Title from "../components/user-interface/title";
import { ContentDiv, MainDiv, PageTitle, SocialIconsDiv, Text } from "../styles/pages/about.styled";

const Home: NextPage = () => {
    const text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus
veritatis. Animi, inventore? Aut vel non ullam consequatur aspernatur
quibusdam dolores neque laborum autem expedita vero, illo excepturi
similique? Ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
Eos ducimus ratione, autem voluptatibus quam asperiores incidunt magni
recusandae quas et? Corporis expedita debitis saepe numquam iusto sunt?
Mollitia, eaque fuga.`;

    return (
        <>
            <MainDiv>
                <PageTitle>I have always loved tech</PageTitle>
                <Text>Looking for my CV?</Text>
                <ContentDiv>
                    <Title isAboutSubtitle content="My quick story" />
                    <Paragraph isLargeParagraph content={text} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a developer" />
                    <Paragraph isLargeParagraph content={text} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a person" />
                    <Paragraph isLargeParagraph content={text} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a colleague" />
                    <Paragraph isLargeParagraph content={text} />
                </ContentDiv>
                <Title content="Let's have a chat" />
                <Text>I'd love to hear from you</Text>
                <SocialIconsDiv>
                    <SocialIcon link="#" src="/icons/github-black.svg" alt="github" />
                    <SocialIcon link="#" src="/icons/linkedin-black.svg" alt="linkedin" />
                    <SocialIcon isMailIcon link="#" src="/icons/email-black.svg" alt="email" />
                </SocialIconsDiv>
                <Button content="Get in touch" />
            </MainDiv>
        </>
    );
};

export default Home;
