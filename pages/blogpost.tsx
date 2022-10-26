import type { NextPage } from "next";
import Image from "../components/user-interface/image";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv } from "../styles/pages/blogpost.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const BlogPost: NextPage = () => {
    const { t } = useTranslation();

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
                <Paragraph isAboutMe isWithMargin isLargeParagraph content={t("spinakerIntro")} />
                <Image isProjectPicture src="/images/katowiceUniversity.jpg" alt="sdf" />
                <Title content="Introduction and Project Goal" />
                <Paragraph isAboutMe isLargeParagraph content={t("spinakerGoal")} />
                <Title content="Project course" />
                <Paragraph isAboutMe isLargeParagraph content={t("spinakerCourse")} />
                <Title content="Result" />
                <Paragraph isAboutMe isLargeParagraph isWithMargin content={t("spinakerResult")} />
                <Image isProjectPicture src="/images/spinaker.jpg" alt="sdf" />
            </MainDiv>
        </>
    );
};

export default BlogPost;
