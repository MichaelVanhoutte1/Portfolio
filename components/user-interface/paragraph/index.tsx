import { Paragraph } from "./styles";

interface Props {
    content: string;
}

const ParagraphComponent = (props: Props) => {
    const { content } = props;
    return (
        <>
            <Paragraph>{content}</Paragraph>
        </>
    );
};

export default ParagraphComponent;
