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
    noBottomMargin?: boolean;
    isBlogPostDate?: boolean;
    isBlogPostTitle?: boolean;
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
        noBottomMargin,
        isBlogPostDate,
        isBlogPostTitle
    } = props;
    return (
        <>
            {isMainTitle ? (
                <MainTitle className={cs({ noBottomMargin: noBottomMargin })}>{content}</MainTitle>
            ) : (
                <Title
                    className={cs({
                        aboutSubtitle: isAboutSubtitle,
                        projectTitle: isProjectTitle,
                        projectSubtitle: isProjectSubtitle,
                        emailTitle: isEmailTitle,
                        stackInfoTitle: isStackInfoTitle,
                        blogPostDate: isBlogPostDate,
                        blogPostTitle: isBlogPostTitle,
                    })}
                >
                    {content}
                </Title>
            )}
        </>
    );
};

export default TitleComponent;
