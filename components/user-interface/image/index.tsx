import { Picture } from "./styles";
import cs from "classnames";
import Link from "next/link";
import { useLanguageQuery } from "next-export-i18n";

interface Props {
    src: string;
    alt: string;
    project?: string;
    blogpost?: string;
    isAboutPicture?: boolean;
    isProjectPicture?: boolean;
    isBlogPostPicture?: boolean;
    isProjectClickbait?: boolean;
    disabled?: boolean;
}

const ImageComponent = (props: Props) => {
    const [query] = useLanguageQuery();
    const {
        src,
        alt,
        isAboutPicture,
        isProjectPicture,
        isBlogPostPicture,
        isProjectClickbait,
        blogpost,
        project,
        disabled,
    } = props;
    let imageClass: string = "";

    switch (true) {
        case isAboutPicture:
            imageClass = "aboutPicture";
            break;
        case isProjectPicture:
            imageClass = "projectPicture";
            break;
        case isBlogPostPicture:
            imageClass = "blogPostPicture";
            break;
        case isProjectClickbait:
            imageClass = "projectClickbait";
            break;
        default:
            break;
    }

    return (
        <>
            {(isProjectClickbait && !disabled) || (isBlogPostPicture && !disabled) ? (
                <Link
                    href={{
                        pathname: isProjectClickbait
                            ? "/project/" + project
                            : "/blogpost/" + blogpost,
                        query: query,
                    }}
                >
                    <Picture loading="lazy" className={imageClass} src={src} alt={alt} />
                </Link>
            ) : (
                <Picture
                    loading="lazy"
                    className={cs({ disabled: disabled }, imageClass)}
                    src={src}
                    alt={alt}
                />
            )}
        </>
    );
};

export default ImageComponent;
