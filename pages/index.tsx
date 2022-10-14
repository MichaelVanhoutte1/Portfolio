import type { NextPage } from "next";
import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Projects from "../components/projects";

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
