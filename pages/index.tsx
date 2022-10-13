import type { NextPage } from "next";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";

const Home: NextPage = () => {
    return (
        <>
            <About />
            <Projects /> 
            <Contact /> 
        </>
    );
};

export default Home;
