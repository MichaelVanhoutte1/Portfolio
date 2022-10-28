import { LanguageIcon, LanguageDiv, LanguageText } from "./styles";
import i18n from "i18next";

interface Props {
    src: string;
    alt: string;
    languageCode: string;
    toggleLanguagePopup: (value: boolean) => void;
}

const LanguageItem = (props: Props) => {
    const { src, alt, languageCode, toggleLanguagePopup } = props;

    return (
        <>
            <LanguageDiv onClick={() => {i18n.changeLanguage(languageCode); toggleLanguagePopup(false);}}>
                <LanguageText>{languageCode}</LanguageText>
                <LanguageIcon src={src} alt={alt} />
            </LanguageDiv>
        </>
    );
};

export default LanguageItem;
