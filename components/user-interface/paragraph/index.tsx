import { Paragraph } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isWithMargin?: boolean;
    isLargeParagraph?: boolean;
    isSmallParagraph?: boolean;
    isAboutMe?: boolean;
}

const ParagraphComponent = (props: Props) => {
    const { content, isWithMargin, isLargeParagraph, isSmallParagraph, isAboutMe } = props;
    let paragraphClass: string = "";

    switch (true) {
        case isLargeParagraph:
            paragraphClass = "largeParagraph";
            break;
        case isSmallParagraph:
            paragraphClass = "smallParagraph";
            break;
        case isAboutMe:
            paragraphClass = "aboutMe";
            break;
        default:
            break;
    }

    return (
        <>
            <Paragraph
                dangerouslySetInnerHTML={{ __html: content }}
                className={cs({ withMargin: isWithMargin }, paragraphClass)}
            ></Paragraph>
        </>
    );
};

export default ParagraphComponent;
