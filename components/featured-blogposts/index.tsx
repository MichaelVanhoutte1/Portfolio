import Title from "../user-interface/title";
import BlogPost from "../user-interface/blogpost";
import { MainDiv, BlogPostDiv, BlogCTA } from "./styles";
import SocialIconComponent from "../user-interface/social-icon";
import { useEffect, useState } from "react";

interface Props {}

const FeaturedBlogposts = (props: Props) => {
    const [ isDesktop, setisDesktop ] = useState(false);
    if (typeof window !== "undefined") {
        useEffect(() => {
            setisDesktop(window.innerWidth > 992);
        });
    }
    return (
        <>
            <MainDiv>
                <Title isMainTitle content="Featured" />
                <BlogPostDiv>
                    <BlogPost />
                    <BlogPost />
                    {isDesktop && <BlogPost />}
                </BlogPostDiv>
                <BlogCTA>
                    More blog posts{" "}
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
