import { Element } from "react-scroll";
import Button from "../user-interface/button";
import EnveloppeAnimation from "../user-interface/enveloppe-animation";
import Title from "../user-interface/title";
import { ContactDiv } from "./styles";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "../../translations/i18n";

const ContactComponent = () => {
    const { t } = useTranslation();
    return (
        <Fade triggerOnce>
            <Element name="contact">
                <ContactDiv id={"contact"}>
                    <Title isMainTitle content={t("contactTitle")} />
                    <EnveloppeAnimation />
                    <Title isEmailTitle content="contact@mvanhoutte.com" />
                    <Button
                        href="mailto:contact@mvanhoutte.com"
                        isProjectButton
                        content={t("contactCTA")}
                    />
                </ContactDiv>
            </Element>
        </Fade>
    );
};

export default ContactComponent;
