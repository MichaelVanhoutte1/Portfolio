import { Button } from "./styles";
import cs from "classnames";
import Link from "next/link";

interface Props {
    content: string;
    isProjectButton?: boolean;
    href?: string;
    isResumeButton?: boolean;
    download?: boolean;
}

const ButtonComponent = (props: Props) => {
    const { content, isProjectButton, href, isResumeButton, download } = props;

    return (
        <>
            {isResumeButton ? (
                <a target="_blank" rel="noreferrer" href="CV-Michael-Vanhoutte.pdf" >
                    <Button className={cs({ projectButton: isProjectButton })}>{content}</Button>
                </a>
            ) : (
                <Link href={href!}>
                    <Button className={cs({ projectButton: isProjectButton })}>{content}</Button>
                </Link>
            )}
        </>
    );
};

export default ButtonComponent;
