import Title from "../user-interface/title";
import BlogPost from "../user-interface/blogpost";
import { MainDiv, BlogPostDiv, BlogCTA } from "./styles";
import SocialIconComponent from "../user-interface/social-icon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

interface Props {}

const FeaturedBlogposts = (props: Props) => {
    const { t } = useTranslation();
    const [ isDesktopw, setisDesktopw ] = useState(false);
    if (typeof window !== "undefined") {
        useEffect(() => {
            setisDesktopw(window.innerWidth > 992);
        });
    }
    return (
        <>
            <MainDiv>
                <Title isMainTitle content={t('featuredBlogpostsTitle')} />
                <BlogPostDiv>
                    <BlogPost blogpost='spinaker' />
                    <BlogPost blogpost='commonEurope' />
                    {isDesktopw && <BlogPost blogpost='third'/>}
                </BlogPostDiv>
                <BlogCTA>
                {t('featuredBlogpostsMore')}
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
