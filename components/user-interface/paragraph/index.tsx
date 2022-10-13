import { Paragraph } from "./styles";
import cs from 'classnames'

interface Props {
    content: string;
    isWithMargin?: boolean;
}

const ParagraphComponent = (props: Props) => {
    const { content, isWithMargin } = props;
    return (
        <>
            <Paragraph
                className={cs({
                    withMargin: isWithMargin,
                })}
            >
                {content}
            </Paragraph>
        </>
    );
};

export default ParagraphComponent;
