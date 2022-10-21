import { BurgerMenu } from "./styles";
import cs from 'classnames'

interface Props {
    toggleMenuFunction: (value: boolean) => void;
    isMenuActive: boolean;
    isHomepage: boolean;
}

const BurgerMenuComponent = (props: Props) => {
    const { toggleMenuFunction, isMenuActive, isHomepage } = props;

    return (
        <>
            <BurgerMenu className={cs({ notHomepage: !isHomepage })} onClick={() => toggleMenuFunction(!isMenuActive)} src="/images/icons/hamburger-menu.svg" alt="burgermenu"/>
        </>
    );
};

export default BurgerMenuComponent;
