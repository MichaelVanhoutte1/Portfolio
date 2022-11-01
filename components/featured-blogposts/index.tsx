import Title from "../user-interface/title";
import BlogPost from "../user-interface/blogpost";
import { MainDiv, BlogPostDiv, BlogCTA } from "./styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

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
            <Fade triggerOnce>
                <MainDiv>
                    <Title isMainTitle content={t("featuredBlogpostsTitle")} />
                    <BlogPostDiv>
                        <BlogPost blogpost="spinaker" />
                        <BlogPost blogpost="commonEurope" />
                        {isDesktop && <BlogPost disabled blogpost="third" />}
                    </BlogPostDiv>
                    <BlogCTA>
                        <Link href="/blog">
                            <div>
                                {t("featuredBlogpostsMore")}
                                <img
                                    loading="lazy"
                                    src="/images/icons/right-arrow.svg"
                                    alt="rightarrow"
                                    height="15px"
                                    width="30px"
                                />
                            </div>
                        </Link>
                    </BlogCTA>
                </MainDiv>
            </Fade>
        </>
    );
};

export default FeaturedBlogposts;
