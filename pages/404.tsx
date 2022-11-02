import Link from "next/link";
import { ContentDiv, CTA, MainDiv, Title } from "../styles/pages/404.styled";

export default function Custom404() {
    return (
        <MainDiv>
            <ContentDiv>
                <Title>The page you are looking for cannot be found</Title>
                <Link href="/">
                    <CTA>Go back home</CTA>
                </Link>
            </ContentDiv>
        </MainDiv>
    );
}
