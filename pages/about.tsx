import type { NextPage } from "next";
import SEO from "../components/seo";
import Button from "../components/user-interface/button";
import Paragraph from "../components/user-interface/paragraph";
import SocialIcon from "../components/user-interface/social-icon";
import Title from "../components/user-interface/title";
import { ContentDiv, MainDiv, PageTitle, SocialIconsDiv, Text } from "../styles/pages/about.styled";

const About: NextPage = () => {
    const quickStory: string = `<span>I was introduced to computers at 6 years old.</span> Back then I only played videogames, 
    but as I grew older I started to get interested in how they worked. I started with making simple games and animations,
    and then moved on to building simple websites. When I went to secondary school <span>I started to learn how to properly code</span>. Coming from that background,
    doing a bachelor in computer science was a great way to learn more about the field and to get a better understanding of it. <br/><br/>
    
    <span>I haven't stopped learning and creating since then.</span> I'm involved in multiple projects and I'm always looking for new challenges.<br/><br/>
    
    In the last few years, I have been increasingly <span>working on software development both in my professional and personal life</span>. 
    I've been lucky to have worked alongside senior developers and designers, who have taught me what's expected from a quality product.<br/><br/>`;

    const developer: string = `I pay close <span>attention to the readability of my code</span>. I might put something together as quickly as possible to make it work, but afterwards I like to spend
    a good amount of time commenting and organizing everything so that it's <span>easy to understand and maintain.</span><br/><br/>
    
    <span>Clean, consistent, readable and maintainable code.</span> It's great when features work, but it's even greater when they continue working, regardless of who's working on them.
    That's why I always try to write tests for my code. It's a great way to make sure that everything works as expected and that it will continue to work in the future.<br/><br/>
    
    I'm always excited to work on new projects. They allow me to <span>learn something new every time</span>. I'm excited to see what the future holds.`;

    const person: string = `I'm a very <span>social and resourceful person</span>. I love to meet new people and learn about their lives. 
    I love taking a problem and breaking it into smaller bits to find a solution. I'm always open to new experiences and I'm always looking for new challenges.<br/><br/>
    
    <span>I'm very disciplined by nature and I love to keep myself busy.</span> Time is precious and I try to make the most of it. That's why I always try to invest it wisely on either learning or 
    making memories with people close to me.`;

    const colleague: string = `<span>I'm a team player</span>, I feel comfortable interacting with both the <span>technically oriented</span> people as well as the <span>artistically oriented</span> ones.
    I will always try to go the extra mile to help my team.<br/><br/>
    
    My communication skills are excellent. I'm always open to feedback and I'm always willing to listen to other people's opinions. These experiences have made me feel comfortable 
    at <span>conveying ideas and explaining my thought process in a way everybody can understand.</span><br/><br/>
    
    My experience working for smaller companies have given me exposure to all the different aspects of a project. <span>I've been involved in the design, development and deployment of multiple projects.</span>
    I've also been lucky enough to be involved in the business side of things, which has given me a better understanding of how a company works.<br/><br/>
    
    I'm always <span>excited to learn new things and meet new people</span>, so be sure to reach out if you want to get to know me better or work together.`;

    return (
        <>
            <SEO
                title="About Michael Vanhoutte"
                description="I am a software engineer specialized in web development. My toolset includes javascript, typescript, react, html, css and a whole lot of creativity."
                name="Michael Vanhoutte"
                type="website"
            />
            <MainDiv>
                <PageTitle>I have always loved tech</PageTitle>
                <Text>
                    Looking for my{" "}
                    <a target="_blank" rel="noreferrer" href="CV-Michael-Vanhoutte.pdf">
                        CV
                    </a>
                    ?
                </Text>
                <ContentDiv>
                    <Title isAboutSubtitle content="My quick story" />
                    <Paragraph isAboutMe isLargeParagraph content={quickStory} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a developer" />
                    <Paragraph isAboutMe isLargeParagraph content={developer} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a person" />
                    <Paragraph isAboutMe isLargeParagraph content={person} />
                </ContentDiv>
                <ContentDiv>
                    <Title isAboutSubtitle content="As a colleague" />
                    <Paragraph isAboutMe isLargeParagraph content={colleague} />
                </ContentDiv>
                <Title content="Let's have a chat" />
                <Text>I'd love to hear from you</Text>
                <SocialIconsDiv>
                    <SocialIcon
                        fillOnHover
                        link="https://github.com/MichaelVanhoutte1"
                        src="/images/icons/github.svg"
                        alt="github"
                    />
                    <SocialIcon
                        fillOnHover
                        link="https://www.linkedin.com/in/michael-vanhoutte/"
                        src="/images/icons/linkedin.svg"
                        alt="linkedin"
                    />
                    <SocialIcon
                        fillOnHover
                        isMailIcon
                        link="mailto:contact@mvanhoutte.com"
                        src="/images/icons/email.svg"
                        alt="email"
                    />
                </SocialIconsDiv>
                <Button href="mailto:contact@mvanhoutte.com" content="Get in touch" />
            </MainDiv>
        </>
    );
};

export default About;
