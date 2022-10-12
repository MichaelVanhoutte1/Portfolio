import { Picture } from "./styles";
import cs from 'classnames'

interface Props {
    src: string;
    alt: string;
    isAboutPicture?: boolean;
}

const ImageComponent = (props: Props) => {
    const { src, alt, isAboutPicture } = props;
    return (
        <>
            <Picture className={cs({ aboutPicture: isAboutPicture})} src={src} alt={alt} />
        </>
    );
};

export default ImageComponent;
