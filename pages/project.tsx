import type { NextPage } from "next";
import StackInfoComponent from "../components/user-interface/stack-info";
import Image from "../components/user-interface/image";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv } from "../styles/pages/project.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";

const Project: NextPage = () => {
    const text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus
    veritatis. Animi, inventore? Aut vel non ullam consequatur aspernatur
    quibusdam dolores neque laborum autem expedita vero, illo excepturi
    similique? Ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eos ducimus ratione, autem voluptatibus quam asperiores incidunt magni
    recusandae quas et? Corporis expedita debitis saepe numquam iusto sunt?
    Mollitia, eaque fuga.`;

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
                <Paragraph isLargeParagraph content={text} />
                <StackInfoComponent />
                <Image isProjectPicture src="https://picsum.photos/1000/550" alt="sdf" />
                <Title content="Project Purpose and Goal" />
                <Paragraph isLargeParagraph content={text} />
                <Title content="Personal website" />
                <Paragraph isLargeParagraph content={text} />
                <Title content="Personal website" />
                <Paragraph isLargeParagraph isWithMargin content={text} />
                <Image isProjectPicture src="https://picsum.photos/1000/550" alt="sdf" />
            </MainDiv>
        </>
    );
};

export default Project;
