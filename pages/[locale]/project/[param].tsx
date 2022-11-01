import type { NextPage } from "next";
import StackInfoComponent from "../../../components/user-interface/stack-info";
import Image from "../../../components/user-interface/image";
import Paragraph from "../../../components/user-interface/paragraph";
import { MainDiv } from "../../../styles/pages/project.styled";
import Title from "../../../components/user-interface/title";
import SEO from "../../../components/seo";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Project: NextPage = () => {
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
                <Paragraph isAboutMe isLargeParagraph content={t(param + "Intro")} />
                <StackInfoComponent />
                <Image isProjectPicture src={t(param + "IntroSrc")} alt={t(param + "IntroAlt")} />
                <Title content={t("projectGoalTitle")} />
                <Paragraph isAboutMe isLargeParagraph content={t(param + "Goal")} />
                <Title content={t("projectStackTitle")} />
                <Paragraph isAboutMe isWithMargin isLargeParagraph content={t(param + "Stack")} />
                <Image isProjectPicture src={t(param + "OutroSrc")} alt={t(param + "OutroAlt")} />
                <Title content={t("projectFurtherTitle")} />
                <Paragraph isAboutMe isLargeParagraph isWithMargin content={t(param + "Further")} />
            </MainDiv>
        </>
    );
};

export default Project;
