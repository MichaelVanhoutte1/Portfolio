import { Image } from "./styles";
import cs from 'classnames';

interface Props {
    src: string;
    alt: string;
    link: string;
    isMailIcon?: boolean;
    fillOnHover?: boolean;
    isArrowIcon?: boolean;
}

const SocialIconComponent = (props: Props) => {
const { src, alt, link, isMailIcon, fillOnHover, isArrowIcon } = props;

    return (
        <>
            <a target={"_blank"} rel="noreferrer" href={link}><Image className={cs({ mailIcon: isMailIcon, fillOnHover: fillOnHover, arrowIcon: isArrowIcon })} src={src} alt={alt} width='30px' height='30px'/></a>
        </>
    );
};

export default SocialIconComponent;
