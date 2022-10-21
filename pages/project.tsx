import type { NextPage } from "next";
import StackInfoComponent from "../components/user-interface/stack-info";
import Image from "../components/user-interface/image";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv } from "../styles/pages/project.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";

const Project: NextPage = () => {
    const text: string = `As a software engineer it's very important to be able to properly present yourself and show that you are capable in <span>creating complex web solutions.</span>
    What better way is there than to create a website designed specifically for that purpose. I developed this website to showcase my skills and previous projects,
    so that it might help my future employer to get a <span>better understanding of who I am and what I can do.</span>`;
    const text1: string = `This website was intended to be a simple personal project where I display some of the projects which I have developed and show who I am as a person.
    Later on I decided to add a blog section to the website where I could write about <span>my experiences as a software engineer</span> and share some of the knowledge I have gained over the years.
    I also decided to add translations to the website so that it would be accessible to a wider audience. <br/><br/>
    
    In general I wanted to <span>add as much useful functionality as possible to further learn
    about different technologies</span> that I was using.`;
    const text2: string = `For this project I wanted to go with a framework that would allow me to create <span>a website that is fast and SEO friendly</span>. 
    Next.js is a great framework for that purpose. Next.js has SSR (Server Side Rendering) which allows your website to be rendered on the server side instead of on the client side.
    This makes it so that <span>when a user visits your website the content is already there</span> and the user doesn't have to wait for the content to be loaded. I added styled-components to the project
    to make it easier to style the website. I also added a few other libraries to the project to make it easier to create certain components. For example I used react-helmet-async
    to <span>add meta tags and page titles to the website to optimise my SEO and SEA.</span> I chose these technologies not only for the advantages they bring but also because 
    <span>I wanted to learn more about them.</span>`;
    const text3: string = `I think for the time being I don't have any plans to add any new features to this website. I might add a few more projects to the website and maybe add a few more blog posts.
    I'm still considering <span>adding a few more languages to the website</span> but I'm not sure if I will do that. I might also add a few more pages to the website to make it more interesting.`;

    return (
        <>
        <SEO
                title="Portfolio Website | Michael Vanhoutte"
                description="Personal project to display my work and skills."
                name="Michael Vanhoutte"
                type="website"
            />
            <MainDiv>
                <Title content="Personal website" />
                <Paragraph isAboutMe isLargeParagraph content={text} />
                <StackInfoComponent />
                <Image isProjectPicture src="https://picsum.photos/1000/550" alt="sdf" />
                <Title content="Project Purpose and Goal" />
                <Paragraph isAboutMe isLargeParagraph content={text1} />
                <Title content="Web Stack and Explanation" />
                <Paragraph isAboutMe isWithMargin isLargeParagraph content={text2} />
                <Image isProjectPicture src="https://picsum.photos/1000/550" alt="sdf" />
                <Title content="Further work" />
                <Paragraph isAboutMe isLargeParagraph isWithMargin content={text3} />
            </MainDiv>
        </>
    );
};

export default Project;
