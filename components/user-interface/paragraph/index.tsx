import { Paragraph } from "./styles";
import cs from "classnames";

interface Props {
    content: string;
    isWithMargin?: boolean;
    isLargeParagraph?: boolean;
}

const ParagraphComponent = (props: Props) => {
    const { content, isWithMargin, isLargeParagraph } = props;
    return (
        <>
            <Paragraph
                className={cs({
                    withMargin: isWithMargin,
                    largeParagraph: isLargeParagraph,
                })}
            >
                {content}
            </Paragraph>
        </>
    );
};

export default ParagraphComponent;
