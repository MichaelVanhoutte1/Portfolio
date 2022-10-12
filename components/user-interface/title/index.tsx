import { Title } from "./styles";
import cs from 'classnames'

interface Props {
    content: string;
    isAboutSubtitle?: boolean;
    isProjectTitle?: boolean;
    isProjectSubtitle?: boolean;
    isEmailTitle?: boolean;
}

const TitleComponent = (props: Props) => {
    const { content, isAboutSubtitle, isProjectTitle, isProjectSubtitle, isEmailTitle } = props;
    return (
        <>
            <Title className={cs({ aboutSubtitle: isAboutSubtitle, projectTitle: isProjectTitle, projectSubtitle: isProjectSubtitle, emailTitle: isEmailTitle,})}>{content}</Title>
        </>
    );
};

export default TitleComponent;
