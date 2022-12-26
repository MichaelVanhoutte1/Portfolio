import { Button } from "./styles";
import cs from "classnames";
import Link from "next/link";
import { useLanguageQuery } from "next-export-i18n";

interface Props {
    content: string;
    isProjectButton?: boolean;
    href?: string;
    isResumeButton?: boolean;
    disabled?: boolean;
}

const ButtonComponent = (props: Props) => {
    const [query] = useLanguageQuery();
    const { content, isProjectButton, href, isResumeButton, disabled } = props;

    return (
        <>
            {isResumeButton ? (
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href={{ pathname: "https://www.mvanhoutte.cloud", query: query }}
                >
                    <Button className={cs({ projectButton: isProjectButton })}>{content}</Button>
                </Link>
            ) : (
                <Link href={{ pathname: href!, query: query }}>
                    <Button
                        disabled={disabled}
                        className={cs({ projectButton: isProjectButton, disabled: disabled })}
                    >
                        {content}
                    </Button>
                </Link>
            )}
        </>
    );
};

export default ButtonComponent;
