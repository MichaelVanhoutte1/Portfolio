import { Title } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isAboutSubtitle?: boolean;
    isProjectTitle?: boolean;
    isProjectSubtitle?: boolean;
    isEmailTitle?: boolean;
    isStackInfoTitle?: boolean;
}

const TitleComponent = (props: Props) => {
    const { content, isAboutSubtitle, isProjectTitle, isProjectSubtitle, isEmailTitle, isStackInfoTitle } = props;
    return (
        <>
            <Title
                className={cs({
                    aboutSubtitle: isAboutSubtitle,
                    projectTitle: isProjectTitle,
                    projectSubtitle: isProjectSubtitle,
                    emailTitle: isEmailTitle,
                    stackInfoTitle: isStackInfoTitle,
                })}
            >
                {content}
            </Title>
        </>
    );
};

export default TitleComponent;
