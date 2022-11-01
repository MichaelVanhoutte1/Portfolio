import type { NextPage } from "next";
import Image from "../../../components/user-interface/image";
import Paragraph from "../../../components/user-interface/paragraph";
import { MainDiv } from "../../../styles/pages/blogpost.styled";
import Title from "../../../components/user-interface/title";
import SEO from "../../../components/seo";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const BlogPost: NextPage = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { param } = router.query;

    return (
        <>
            <SEO
                title="Portfolio Website | Michael Vanhoutte"
                description="Personal project to display my work and skills."
                name="Michael Vanhoutte"
                type="website"
            />
            <MainDiv>
                <Title content={t(param + "Title")} />
                <Title isBlogPostDate content={t(param + "Date")} />
                <Paragraph isAboutMe isWithMargin isLargeParagraph content={t(param + "Intro")} />
                <Image isProjectPicture src={t(param + "IntroSrc")} alt={t(param + "IntroAlt")} />
                <Title content={t("blogpostGoalTitle")} />
                <Paragraph isAboutMe isLargeParagraph content={t(param + "Goal")} />
                <Title content={t("blogpostCourseTitle")} />
                <Paragraph isAboutMe isLargeParagraph content={t(param + "Course")} />
                <Title content={t("blogpostResultTitle")} />
                <Paragraph isAboutMe isLargeParagraph isWithMargin content={t(param + "Result")} />
                <Image isProjectPicture src={t(param + "OutroSrc")} alt={t(param + "OutroAlt")} />
            </MainDiv>
        </>
    );
};

export default BlogPost;
