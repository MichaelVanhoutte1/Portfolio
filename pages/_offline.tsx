import { ContentDiv, MainDiv, Title } from "../styles/pages/404.styled";
import { useTranslation } from "next-export-i18n";

export default function Custom404() {
    const { t } = useTranslation();

    return (
        <MainDiv>
            <ContentDiv>
                <Title>{t("offline")}</Title>
            </ContentDiv>
        </MainDiv>
    );
}
