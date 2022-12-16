import Link from "next/link";
import Title from "../title";
import { LiveDiv, StackDiv, StackInfoDiv, TypeDiv, ListItem, ProjectLink } from "./styles";

interface Props {
    siteUrl: string;
    codeUrl: string;
}

const StackInfoComponent = (props: Props) => {
    const { siteUrl, codeUrl } = props;

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
                        <ListItem>SaSS</ListItem>
                        <ListItem>Netlify</ListItem>
                    </ul>
                </StackDiv>
                {codeUrl !== "" && (
                    <LiveDiv>
                        <Title isStackInfoTitle content="Code" />
                        <Link href={codeUrl}>
                            <ProjectLink>Github</ProjectLink>
                        </Link>
                    </LiveDiv>
                )}
                <LiveDiv>
                    <Title isStackInfoTitle content="Live" />
                    <Link href={siteUrl}>
                        <ProjectLink>Site</ProjectLink>
                    </Link>
                </LiveDiv>
            </StackInfoDiv>
        </>
    );
};

export default StackInfoComponent;
