import { Button } from "./styles";
import cs from 'classnames';

interface Props {
    content: string;
    isProjectButton?: boolean;
}

const ButtonComponent = (props: Props) => {
    const { content, isProjectButton } = props;

    return (
        <>
            <Button className={cs({ projectButton: isProjectButton })}>{content}</Button>
        </>
    );
};

export default ButtonComponent;
