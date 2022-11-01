import { LanguageIcon } from "./styles";

interface Props {
    toggleLanguagePopup: (value: boolean) => void;
    isLanguageToggleActive: boolean;
}

const LanguageToggler = (props: Props) => {
    const { toggleLanguagePopup, isLanguageToggleActive } = props;

    return (
        <>
            <LanguageIcon loading="lazy" onClick={() => toggleLanguagePopup(!isLanguageToggleActive)} src="/images/icons/language.svg" alt="languageToggle"/>
        </>
    );
};

export default LanguageToggler;
