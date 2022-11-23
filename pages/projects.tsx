import type { NextPage } from "next";
import { MainDiv } from "../styles/pages/projects.styled";
import SEO from "../components/seo";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";
import Project from "../components/user-interface/project";

const Blog: NextPage = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

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
                            "SASS",
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
                            "SASS",
                        ]}
                        project="fitnessApp"
                    />
                </MainDiv>
            </Fade>
        </>
    );
};

export default Blog;
