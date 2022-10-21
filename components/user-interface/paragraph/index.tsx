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
    return (
        <>
            <Paragraph
                dangerouslySetInnerHTML={{ __html: content }}
                className={cs({
                    withMargin: isWithMargin,
                    largeParagraph: isLargeParagraph,
                    smallParagraph: isSmallParagraph,
                    aboutMe: isAboutMe,
                })}
            >
            </Paragraph>
        </>
    );
};

export default ParagraphComponent;
