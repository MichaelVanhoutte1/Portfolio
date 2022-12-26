import type { NextPage } from "next";
import SEO from "../components/seo";
import { useTranslation } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";
import ContactComponent from "../components/contact";
import { MainDiv } from "../styles/pages/contact.styled";
import Title from "../components/user-interface/title";

const Contact: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title="Contact"
                description="Here you can find all my contact information."
                name="Michael Vanhoutte"
                type="website"
            />
            <Fade triggerOnce>
                <MainDiv>
                    <Title isContactTitle content={t("contactTitle")} />
                    <Title isContactSubtitle content={t("contactSubtitle")} />
                    <ContactComponent />
                </MainDiv>
            </Fade>
        </>
    );
};

export default Contact;
