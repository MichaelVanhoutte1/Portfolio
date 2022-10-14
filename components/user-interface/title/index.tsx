import { MainTitle, Title } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isAboutSubtitle?: boolean;
    isProjectTitle?: boolean;
    isProjectSubtitle?: boolean;
    isEmailTitle?: boolean;
    isStackInfoTitle?: boolean;
    isMainTitle?: boolean;
}

const TitleComponent = (props: Props) => {
    const {
        content,
        isAboutSubtitle,
        isProjectTitle,
        isProjectSubtitle,
        isEmailTitle,
        isStackInfoTitle,
        isMainTitle,
    } = props;
    return (
        <>
            {isMainTitle ? (
                <MainTitle>{content}</MainTitle>
            ) : (
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
            )}
        </>
    );
};

export default TitleComponent;
