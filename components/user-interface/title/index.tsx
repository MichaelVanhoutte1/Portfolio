import { Title } from "./styles";
import cs from 'classnames'

interface Props {
    content: string;
    isAboutSubtitle?: boolean;
    isProjectTitle?: boolean;
    isProjectSubtitle?: boolean;
}

const TitleComponent = (props: Props) => {
    const { content, isAboutSubtitle, isProjectTitle, isProjectSubtitle } = props;
    return (
        <>
            <Title className={cs({ aboutSubtitle: isAboutSubtitle, projectTitle: isProjectTitle, projectSubtitle: isProjectSubtitle})}>{content}</Title>
        </>
    );
};

export default TitleComponent;
