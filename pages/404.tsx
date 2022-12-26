import Link from "next/link";
import { ContentDiv, CTA, MainDiv, Title } from "../styles/pages/404.styled";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function Custom404() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <MainDiv>
            <ContentDiv>
                <Title>{t("notFound")}</Title>
                <Link href={{ pathname: "/", query: query }}>
                    <CTA>{t("notFoundCTA")}</CTA>
                </Link>
            </ContentDiv>
        </MainDiv>
    );
}
