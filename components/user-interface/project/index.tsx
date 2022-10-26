import BoxLabels from "../box-labels";
import Button from "../button";
import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv } from "./styles";
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";

interface Props {
    project: string;
}

const ProjectComponent = (props: Props) => {
    const { t } = useTranslation();
    const { project } = props;
    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isProjectSubtitle content={t(project + "Type")} />
                    <Title isProjectTitle content={t(project + "Title")} />
                    <BoxLabels
                        isProjectLabelDiv
                        labelArray={[
                            "React",
                            "Typescript",
                            "Firebase",
                            "Styled-Components",
                            "Next.js",
                            "Redux",
                            "SASS",
                        ]}
                    />
                    <Paragraph
                        content={t(project + "Summary")}
                    />
                    <Button href="/project" isProjectButton content={t("projectCTA")} />
                </ContentDiv>
                <Image src={t(project + "Src")} alt={t(project + "Alt")} />
            </MainDiv>
        </>
    );
};

export default ProjectComponent;
