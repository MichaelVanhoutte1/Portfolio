import { Picture } from "./styles";
import cs from 'classnames'

interface Props {
    src: string;
    alt: string;
    isAboutPicture?: boolean;
    isProjectPicture?: boolean;
}

const ImageComponent = (props: Props) => {
    const { src, alt, isAboutPicture, isProjectPicture } = props;
    return (
        <>
            <Picture loading="lazy" className={cs({ aboutPicture: isAboutPicture, projectPicture: isProjectPicture})} src={src} alt={alt} />
        </>
    );
};

export default ImageComponent;
