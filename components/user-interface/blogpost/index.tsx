import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv, BlogLink } from "./styles";
import Link from "next/link";

interface Props {}

const BlogPost = (props: Props) => {
    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isFeaturedBlogPostTitle content="Spinaker Project Katowice" />
                    <Image isBlogPostPicture src="/images/katowiceUniversityLogo.jpg" alt="University Katowice Logo" />
                    <Paragraph isSmallParagraph
                        content="A recap about an international project hosted in the economical heart of Poland, Katowice."
                    />
                    <Link href="/blogpost">
                        <BlogLink>Read the full post</BlogLink>
                    </Link>
                </ContentDiv>
            </MainDiv>
        </>
    );
};

export default BlogPost;
