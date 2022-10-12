import Title from "../title";
import { LiveDiv, StackDiv, StackInfoDiv, TypeDiv } from "./styles";

interface Props {
}

const StackInfoComponent = (props: Props) => {

    return (
        <>
            <StackInfoDiv>
                <TypeDiv>
                    <Title content="Type"/>
                        <p>Typescript</p>
                    
                </TypeDiv>
                <StackDiv>
                <Title content="Stack"/>
                        <ul>
                            <li>Typescript</li>
                            <li>Typescript</li>
                            <li>Typescript</li>
                            <li>Typescript</li>
                            <li>Typescript</li>
                            <li>Typescript</li>
                        </ul>
                    
                </StackDiv>
                <LiveDiv>
                <Title content="Live"/>
                        <p>Typescript</p>
                    
                </LiveDiv>
            </StackInfoDiv>
        </>
    );
};

export default StackInfoComponent;
