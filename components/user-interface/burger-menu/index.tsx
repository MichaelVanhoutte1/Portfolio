import { BurgerMenu } from "./styles";

interface Props {
    toggleMenuFunction: (value: boolean) => void;
    isMenuActive: boolean;
}

const BurgerMenuComponent = (props: Props) => {
    const { toggleMenuFunction, isMenuActive } = props;

    return (
        <>
            <BurgerMenu loading="lazy" onClick={() => toggleMenuFunction(!isMenuActive)} src="/images/icons/hamburger-menu.svg" alt="burgermenu"/>
        </>
    );
};

export default BurgerMenuComponent;
