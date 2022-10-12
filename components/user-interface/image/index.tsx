import { Picture } from "./styles";

interface Props {
    src: string;
    alt: string;
}

const ImageComponent = (props: Props) => {
    const { src, alt } = props;
    return (
        <>
            <Picture src={src} alt={alt} />
        </>
    );
};

export default ImageComponent;
