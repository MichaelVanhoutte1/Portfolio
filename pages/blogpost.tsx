import type { NextPage } from "next";
import Image from "../components/user-interface/image";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv } from "../styles/pages/blogpost.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";

const BlogPost: NextPage = () => {
    const text: string = `In early february I caught wind of an opportunity to go to Poland with some other student from my College to participate in a project called Spinaker. 
    To apply for this project you had to write an extensive essay on why you wanted to participate in this project and what you could bring to the table. 
    <span>The selection was based on your essay and previously achieved grades.</span> Some weeks later I got the news that I was selected to participate in this project.
    The project would take place from the 4th until the 9th of april.
`;
    const text1: string = `When I arrived in Katowice I was greeted by the other students that were selected to participate in this project. 
    <span>We were all from different countries and had different backgrounds.</span> Some of the students were fellow software engineers and some others were studying marketing or business.
    We started the day of by getting to know eachother a bit better over breakfast. After breakfast we were divided into groups and were assigned a mentor.
    My group was <span>tasked with creating a web application for the school</span> that was hosting the project. The website would allow the student of marketing and advertising 
    to test out their use cases in an interactive environment.`;

    const text2: string = `The remainder of the week was spent working on the website. We had to <span>create a design for the website and then implement it.</span>
    We had to take into account the use cases that the students of marketing and advertising had to test out. Together with our mentor we <span>created a workflow that would allow us to work efficiently.</span>
    We used the <span>agile methodology</span> to create the website. We had daily standups and we used the scrum board to keep track of our progress. 
    In the end we were able to create a website that was able to test out the use cases. `;

    const text3: string = `This project was a great experience. <span>I was able to work with students from all over Europe and I was able to learn a lot about the agile methodology. </span>
    Not only was the project a great experience but I also got to visit the beautiful city of Katowice and made some new friends from all over Europe who I will visit later this year.
    Definitely a recommendation for anyone who is interested in software development and wants to learn more about marketing and advertising.`;

    return (
        <>
            <SEO
                title="Portfolio Website | Michael Vanhoutte"
                description="Personal project to display my work and skills."
                name="Michael Vanhoutte"
                type="website"
            />
            <MainDiv>
                <Title content="Spinaker Project Katowice" />
                <Title isBlogPostDate content="April 27, 2022"/>
                <Paragraph isAboutMe isWithMargin isLargeParagraph content={text} />
                <Image isProjectPicture src="/images/katowiceUniversity.jpg" alt="sdf" />
                <Title content="Introduction and Project Goal" />
                <Paragraph isAboutMe isLargeParagraph content={text1} />
                <Title content="Project course" />
                <Paragraph isAboutMe isLargeParagraph content={text2} />
                <Title content="Result" />
                <Paragraph isAboutMe isLargeParagraph isWithMargin content={text3} />
                <Image isProjectPicture src="/images/spinaker.jpg" alt="sdf" />
            </MainDiv>
        </>
    );
};

export default BlogPost;
