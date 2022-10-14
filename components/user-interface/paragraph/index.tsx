import { Paragraph } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isWithMargin?: boolean;
    isLargeParagraph?: boolean;
    isAboutMe?: boolean;
}

const ParagraphComponent = (props: Props) => {
    const { content, isWithMargin, isLargeParagraph, isAboutMe } = props;
    return (
        <>
            <Paragraph
                className={cs({
                    withMargin: isWithMargin,
                    largeParagraph: isLargeParagraph,
                    aboutMe: isAboutMe,
                })}
            >
                {content}
            </Paragraph>
        </>
    );
};

export default ParagraphComponent;
