import Title from "../title";
import { LiveDiv, StackDiv, StackInfoDiv, TypeDiv, ListItem } from "./styles";

interface Props {}

const StackInfoComponent = (props: Props) => {
    return (
        <>
            <StackInfoDiv>
                <TypeDiv>
                    <Title isStackInfoTitle content="Type" />
                    <p>Typescript</p>
                </TypeDiv>
                <StackDiv>
                    <Title isStackInfoTitle content="Stack" />
                    <ul>
                        <ListItem>Typescript</ListItem>
                        <ListItem>Typescript</ListItem>
                        <ListItem>Typescript</ListItem>
                        <ListItem>Typescript</ListItem>
                        <ListItem>Typescript</ListItem>
                        <ListItem>Typescript</ListItem>
                    </ul>
                </StackDiv>
                <LiveDiv>
                    <Title isStackInfoTitle content="Live" />
                    <p>Typescript</p>
                </LiveDiv>
            </StackInfoDiv>
        </>
    );
};

export default StackInfoComponent;
