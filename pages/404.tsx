import Link from "next/link";
import { ContentDiv, CTA, MainDiv, Title } from "../styles/pages/404.styled";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

export default function Custom404() {
    const { t } = useTranslation();

    return (
        <MainDiv>
            <ContentDiv>
                <Title>{t("notFound")}</Title>
                <Link href="/">
                    <CTA>{t("notFoundCTA")}</CTA>
                </Link>
            </ContentDiv>
        </MainDiv>
    );
}
