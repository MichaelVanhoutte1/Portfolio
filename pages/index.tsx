import type { NextPage } from "next";
import About from "../components/about";
import Contact from "../components/contact";
import FeaturedBlogposts from "../components/featured-blogposts";
import Projects from "../components/projects";
import SEO from "../components/seo";

const Home: NextPage = () => {
    return (
        <>
            <SEO
                title="Michael Vanhoutte | Software Engineer"
                description="I am a software engineer specialized in web development. My toolset includes javascript, typescript, react, html, css and a whole lot of creativity."
                name="Michael Vanhoutte"
                type="website"
            />
            <About />
            <FeaturedBlogposts />
            <Projects />
            <Contact withTitle />
        </>
    );
};

export default Home;
