import { LanguageIcon, LanguageDiv, LanguageText } from "./styles";
import { LanguageSwitcher } from "next-export-i18n";

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
            <LanguageDiv
                onClick={() => {
                    toggleLanguagePopup(false);
                }}
            >
                <LanguageSwitcher lang={languageCode}>
                        <LanguageText>{languageCode.toLocaleUpperCase()}</LanguageText>
                        <LanguageIcon loading="lazy" src={src} alt={alt} />
                </LanguageSwitcher>
            </LanguageDiv>
        </>
    );
};

export default LanguageItem;
