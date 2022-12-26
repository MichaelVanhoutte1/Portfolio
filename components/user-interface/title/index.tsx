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
    isFeaturedBlogPostTitle?: boolean;
    isContactTitle?: boolean;
    isContactSubtitle?: boolean;
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
        isBlogPostTitle,
        isFeaturedBlogPostTitle,
        isContactTitle,
        isContactSubtitle,
    } = props;

    let titleClass: string = "";

    switch (true) {
        case isAboutSubtitle:
            titleClass = "aboutSubtitle";
            break;
        case isProjectTitle:
            titleClass = "projectTitle";
            break;
        case isProjectSubtitle:
            titleClass = "projectSubtitle";
            break;
        case isEmailTitle:
            titleClass = "emailTitle";
            break;
        case isStackInfoTitle:
            titleClass = "stackInfoTitle";
            break;
        case isMainTitle:
            titleClass = "heroIcon";
            break;
        case isBlogPostDate:
            titleClass = "blogPostDate";
            break;
        case isBlogPostTitle:
            titleClass = "blogPostTitle";
            break;
        case isFeaturedBlogPostTitle:
            titleClass = "featuredBlogPostTitle";
            break;
        case isContactTitle:
            titleClass = "contactTitle";
            break;
        case isContactSubtitle:
            titleClass = "contactSubtitle";
            break;
        default:
            break;
    }
    return (
        <>
            {isMainTitle ? (
                <MainTitle className={cs({ noBottomMargin: noBottomMargin })}>{content}</MainTitle>
            ) : (
                <Title className={titleClass}>{content}</Title>
            )}
        </>
    );
};

export default TitleComponent;
