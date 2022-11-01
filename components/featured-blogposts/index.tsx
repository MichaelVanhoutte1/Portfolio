import Title from "../user-interface/title";
import BlogPost from "../user-interface/blogpost";
import { MainDiv, BlogPostDiv, BlogCTA } from "./styles";
import SocialIconComponent from "../user-interface/social-icon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const FeaturedBlogposts = (props: Props) => {
    const { t } = useTranslation();
    const [isDesktop, setisDesktop] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setisDesktop(window.innerWidth > 992);
        }
    }, []);
    return (
        <>
            <MainDiv>
                <Title isMainTitle content={t("featuredBlogpostsTitle")} />
                <BlogPostDiv>
                    <BlogPost blogpost="spinaker" />
                    <BlogPost blogpost="commonEurope" />
                    {isDesktop && <BlogPost blogpost="third" />}
                </BlogPostDiv>
                <BlogCTA>
                    {t("featuredBlogpostsMore")}
                    <SocialIconComponent
                        isArrowIcon
                        link="/blog"
                        src="/images/icons/right-arrow.svg"
                        alt="rightarrow"
                    />{" "}
                </BlogCTA>
            </MainDiv>
        </>
    );
};

export default FeaturedBlogposts;
