import { Image } from "./styles";
import cs from "classnames";

interface Props {
    src: string;
    alt: string;
    link: string;
    isMailIcon?: boolean;
    fillOnHover?: boolean;
    isArrowIcon?: boolean;
    isHeroIcon?: boolean;
}

const SocialIconComponent = (props: Props) => {
    const { src, alt, link, isMailIcon, fillOnHover, isArrowIcon, isHeroIcon } = props;
    let iconClass: string = "";

    switch (true) {
        case isMailIcon:
            iconClass = "mailIcon";
            break;
        case isArrowIcon:
            iconClass = "arrowIcon";
            break;
        case isHeroIcon:
            iconClass = "heroIcon";
            break;
        default:
            break;
    }

    return (
        <>
            <a target={"_blank"} rel="noreferrer" href={link}>
                <Image
                    loading="lazy"
                    className={cs({ fillOnHover: fillOnHover }, iconClass)}
                    src={src}
                    alt={alt}
                    width="30px"
                    height="30px"
                />
            </a>
        </>
    );
};

export default SocialIconComponent;
