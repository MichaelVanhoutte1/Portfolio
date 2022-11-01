import { Picture } from "./styles";
import cs from "classnames";
import Link from "next/link";

interface Props {
    src: string;
    alt: string;
    project?: string;
    blogpost?: string;
    isAboutPicture?: boolean;
    isProjectPicture?: boolean;
    isBlogPostPicture?: boolean;
    isProjectClickbait?: boolean;
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
    } = props;
    return (
        <>
            {isProjectClickbait || isBlogPostPicture ? (
                <Link href={isProjectClickbait ? "/project/" + project : "/blogpost/" + blogpost}>
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
                        aboutPicture: isAboutPicture,
                        projectPicture: isProjectPicture,
                    })}
                    src={src}
                    alt={alt}
                />
            )}
        </>
    );
};

export default ImageComponent;
