import type { NextPage } from "next";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv, BlogPost, BlogTitle } from "../styles/pages/blog.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";
import Link from "next/link";

const Blog: NextPage = () => {
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
            <MainDiv>
                <BlogPost>
                    <Link href="/">
                        <BlogTitle>Common Europe Congress 2022</BlogTitle>
                    </Link>
                    <Title isBlogPostDate content="June 25, 2022" />
                    <Paragraph isAboutMe isLargeParagraph content={text} />
                </BlogPost>
                <BlogPost>
                    <Link href="/">
                        <BlogTitle>Spinaker Project Katowice 2022</BlogTitle>
                    </Link>
                    <Title isBlogPostDate content="April 27, 2022" />
                    <Paragraph isAboutMe isLargeParagraph content={text2} />
                </BlogPost>
            </MainDiv>
        </>
    );
};

export default Blog;
