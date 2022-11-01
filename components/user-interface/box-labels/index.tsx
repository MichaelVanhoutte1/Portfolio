import { BoxLabel, LabelDiv } from "./styles";
import cs from 'classnames'

interface Props {
    labelArray: string[];
    isProjectLabelDiv?: boolean;
}

const BoxLabelsComponent = (props: Props) => {
    const { labelArray, isProjectLabelDiv } = props;
    return (
        <>
            <LabelDiv className={cs({ projectLabelDiv: isProjectLabelDiv })}>
                {labelArray.map((label) => (
                    <BoxLabel key={label}>{label}</BoxLabel>
                ))}
            </LabelDiv>
        </>
    );
};

export default BoxLabelsComponent;
