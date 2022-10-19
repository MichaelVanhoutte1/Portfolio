import Link from "next/link";
import { Image } from "./styles";
import cs from 'classnames';

interface Props {
    src: string;
    alt: string;
    link: string;
    isMailIcon?: boolean;
    fillOnHover?: boolean;
}

const SocialIconComponent = (props: Props) => {
const { src, alt, link, isMailIcon, fillOnHover } = props;

    return (
        <>
            <Link href={link}><Image className={cs({ mailIcon: isMailIcon, fillOnHover: fillOnHover })} src={src} alt={alt} width='30px' height='30px'/></Link>
        </>
    );
};

export default SocialIconComponent;
