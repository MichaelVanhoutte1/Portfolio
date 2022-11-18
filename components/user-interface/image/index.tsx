import { Picture } from "./styles";
import cs from "classnames";
import Link from "next/link";
import { useLanguageQuery } from 'next-export-i18n';

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
    const {
        src,
        alt,
        isAboutPicture,
        isProjectPicture,
        isBlogPostPicture,
        isProjectClickbait,
        blogpost,
        project,
        disabled
    } = props;
    const [query] = useLanguageQuery();
    return (
        <>
            {isProjectClickbait && !disabled || isBlogPostPicture && !disabled  ? (
                <Link href={{ pathname: isProjectClickbait ? "/project/" + project : "/blogpost/" + blogpost, query: query }}>
                    <Picture
                        loading="lazy"
                        className={cs({
                            projectClickbait: isProjectClickbait,
                            blogPostPicture: isBlogPostPicture,
                        })}
                        src={src}
                        alt={alt}
                    />
                </Link>
            ) : (
                <Picture
                    loading="lazy"
                    className={cs({
                        disabled: disabled,
                        aboutPicture: isAboutPicture,
                        projectPicture: isProjectPicture,
                        projectClickbait: isProjectClickbait,
                        blogPostPicture: isBlogPostPicture,
                    })}
                    src={src}
                    alt={alt}
                />
            )}
        </>
    );
};

export default ImageComponent;
