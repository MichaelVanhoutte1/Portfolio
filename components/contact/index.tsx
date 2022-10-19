import { Element } from "react-scroll";
import Button from "../user-interface/button";
import EnveloppeAnimation from "../user-interface/enveloppe-animation";
import Title from "../user-interface/title";
import { ContactDiv } from "./styles";

const ContactComponent = () => {
    return (
        <Element name="contact">
            <ContactDiv id={'contact'}>
                <Title isMainTitle content="Let's have a chat" />
                <EnveloppeAnimation />
                <Title isEmailTitle content="contact@mvanhoutte.com" />
                <Button href="mailto:contact@mvanhoutte.com" isProjectButton content="Get in touch" />
            </ContactDiv>
        </Element>
    );
};

export default ContactComponent;
