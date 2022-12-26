import type { NextPage } from "next";
import { MainDiv } from "../styles/pages/projects.styled";
import SEO from "../components/seo";
import { Fade } from "react-awesome-reveal";
import Project from "../components/user-interface/project";

const Projects: NextPage = () => {
    return (
        <>
            <SEO
                title="Projects"
                description="Take a look at my projects."
                name="Michael Vanhoutte"
                type="website"
            />
            <Fade triggerOnce>
                <MainDiv>
                    <Project
                        stackTags={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "Styled-Components",
                            "Next.js",
                            "Redux",
                            "SaSS",
                            "Netlify",
                        ]}
                        project="portfolio"
                    />
                    <Project
                        disabled
                        stackTags={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "Styled-Components",
                            "Next.js",
                            "Redux",
                            "SaSS",
                        ]}
                        project="fitnessApp"
                    />
                </MainDiv>
            </Fade>
        </>
    );
};

export default Projects;
