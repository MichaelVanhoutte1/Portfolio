import { Button } from "./styles";
import cs from "classnames";
import Link from "next/link";

interface Props {
    content: string;
    isProjectButton?: boolean;
    href?: string;
}

const ButtonComponent = (props: Props) => {
    const { content, isProjectButton, href } = props;

    return (
        <>
                <Link href={href!}>
                    <Button className={cs({ projectButton: isProjectButton })}>{content}</Button>
                </Link>

        </>
    );
};

export default ButtonComponent;
