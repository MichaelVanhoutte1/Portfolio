import type { NextPage } from "next";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv, BlogPost, BlogTitle } from "../styles/pages/blog.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "../translations/i18n";

const Blog: NextPage = () => {
    const { t } = useTranslation();
    const text: string = `A recap about the Common Europe Congress 2022 hosted in Alicante, Spain. 
    Where I was selected with 20 other students from all over Europe to participate in the congress. The congress was held from the 13th to the 16th of June 2022.`;

    const text2: string = `A recap about an international project hosted in the economical heart of Poland, Katowice. 
    I was selected to be part of the software engineering team together with 7 other students of my university.`;

    return (
        <>
            <SEO
                title="Blog"
                description="Read my blog posts."
                name="Michael Vanhoutte"
                type="website"
            />
            <Fade triggerOnce>
                <MainDiv>
                    <BlogPost>
                        <Link href="/blogpost/commonEurope">
                            <BlogTitle>{t("commonEuropeTitle")}</BlogTitle>
                        </Link>
                        <Title isBlogPostDate content={t("commonEuropeDate")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("commonEuropeRecap")} />
                    </BlogPost>
                    <BlogPost>
                        <Link href="/blogpost/spinaker">
                            <BlogTitle>{t("spinakerTitle")}</BlogTitle>
                        </Link>
                        <Title isBlogPostDate content={t("spinakerDate")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("spinakerRecap")} />
                    </BlogPost>
                    <BlogPost>
                        <BlogTitle className="disabled">{t("thirdTitle")}</BlogTitle>
                        <Title isBlogPostDate content={t("featuredBlogpostsDisabled")} />
                        <Paragraph isAboutMe isLargeParagraph content={t("thirdRecap")} />
                    </BlogPost>
                </MainDiv>
            </Fade>
        </>
    );
};

export default Blog;
