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
                    <Image isBlogPostPicture src="https://picsum.photos/400/400" alt="sdf" />
                    <Paragraph isSmallParagraph
                        content="A recap about an international project hosted in the economical heart of Poland, Katowice."
                    />
                    <Link href="/blog">
                        <BlogLink>Read the full post</BlogLink>
                    </Link>
                </ContentDiv>
            </MainDiv>
        </>
    );
};

export default BlogPost;
