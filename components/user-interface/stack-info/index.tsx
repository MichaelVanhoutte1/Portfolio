import Title from "../title";
import { LiveDiv, StackDiv, StackInfoDiv, TypeDiv, ListItem } from "./styles";

interface Props {}

const StackInfoComponent = (props: Props) => {
    return (
        <>
            <StackInfoDiv>
                <TypeDiv>
                    <Title isStackInfoTitle content="Type" />
                    <p>Personal project</p>
                </TypeDiv>
                <StackDiv>
                    <Title isStackInfoTitle content="Stack" />
                    <ul>
                        <ListItem>Typescript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Nextjs</ListItem>
                        <ListItem>styled-components</ListItem>
                        <ListItem>SASS</ListItem>
                        <ListItem>Netlify</ListItem>
                    </ul>
                </StackDiv>
                <LiveDiv>
                    <Title isStackInfoTitle content="Live" />
                    <p>Site</p>
                </LiveDiv>
            </StackInfoDiv>
        </>
    );
};

export default StackInfoComponent;
