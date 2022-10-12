import SocialIcon from "../user-interface/social-icon";
import { Text, Copyright, CopyrightDiv, Name, SocialIconsDiv, SocialsDiv, FooterDiv } from "./styles";

const FooterComponent = () => {
    return (
        <>
            <FooterDiv>
                <CopyrightDiv>
                    <Name>Michael</Name>
                    <Name>Vanhoutte</Name>
                    <Copyright>© 2022, Built and designed by Michael Vanhoutte</Copyright>
                </CopyrightDiv>
                <SocialsDiv>
                    <Text>Follow me on</Text>
                    <SocialIconsDiv>
                        <SocialIcon link="#" src="/icons/github.svg" alt="github" />
                        <SocialIcon link="#" src="/icons/linkedin.svg" alt="linkedin" />
                        <SocialIcon isMailIcon link="#" src="/icons/email.svg" alt="email" />
                    </SocialIconsDiv>
                </SocialsDiv>
            </FooterDiv>
        </>
    );
};

export default FooterComponent;
