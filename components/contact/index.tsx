import Button from "../user-interface/button";
import EnveloppeAnimation from "../user-interface/enveloppe-animation";
import Title from "../user-interface/title";
import { ContactDiv } from "./styles";


const ContactComponent = () => {
    return (
        <ContactDiv>
            <Title content="Let's have a chat"/>
            <EnveloppeAnimation/>
            <Title isEmailTitle content="contact@mvanhoutte.com" />
            <Button isProjectButton content="Get in touch" />
        </ContactDiv>
    );
};

export default ContactComponent;
