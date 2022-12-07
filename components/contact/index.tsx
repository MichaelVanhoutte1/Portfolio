import { Element } from "react-scroll";
import Button from "../user-interface/button";
import EnveloppeAnimation from "../user-interface/enveloppe-animation";
import Title from "../user-interface/title";
import { ContactDiv } from "./styles";
import { useTranslation } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";

interface Props {
    withTitle?: boolean;
}

const ContactComponent = (props: Props) => {
    const { t } = useTranslation();
    const { withTitle } = props;

    return (
        <Fade triggerOnce>
            <Element name="contact">
                <ContactDiv id={"contact"}>
                {withTitle && <Title isMainTitle content={t("contactTitle")} />}
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
