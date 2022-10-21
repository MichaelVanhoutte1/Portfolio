import Title from "../user-interface/title";
import BlogPost from "../user-interface/blogpost";
import { MainDiv, BlogPostDiv, BlogCTA } from "./styles";
import SocialIconComponent from "../user-interface/social-icon";

interface Props {}

const FeaturedBlogposts = (props: Props) => {
    return (
        <>
            <MainDiv>
                <Title isMainTitle content="Featured" />
                <BlogPostDiv>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </BlogPostDiv>
                <BlogCTA>More blog posts <SocialIconComponent isArrowIcon link="/blog" src="/images/icons/right-arrow.svg" alt="rightarrow" /> </BlogCTA>
            </MainDiv>
        </>
    );
};

export default FeaturedBlogposts;
