import type { NextPage } from "next";
import StackInfoComponent from "../components/user-interface/stack-info";
import Image from "../components/user-interface/image";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv} from "../styles/pages/project.styled";
import Title from "../components/user-interface/title";

const Home: NextPage = () => {

const text: string = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia
quaerat! Eos rerum sunt dolore blanditiis neque voluptates minus distinctio cum,
autem quis illo aut perspiciatis optio provident accusamus reprehenderit.`

    return (
        <>
            <MainDiv>
                <Title content='Personal website'/>
                <Paragraph content='text'/>                   
                <StackInfoComponent />
                <Image src="https://picsum.photos/200/300" alt="sdf" />
                <Title content='Project Purpose and Goal'/>
                <Paragraph content='text'/>
                <Title content='Personal website'/>
                <Paragraph content='text'/>
                <Title content='Personal website'/>
                <Paragraph isWithMargin content='text'/>
                <Image src="https://picsum.photos/200/300" alt="sdf" />
            </MainDiv>
        </>
    );
};

export default Home;
