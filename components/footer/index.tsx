import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SocialIcon from "../user-interface/social-icon";
import cs from 'classnames'
import {
    Text,
    Copyright,
    CopyrightDiv,
    Name,
    SocialIconsDiv,
    SocialsDiv,
    FooterDiv,
    ContentDiv,
} from "./styles";

const FooterComponent = () => {
    const router = useRouter();
    const [ isHomepage , setIsHomepage ] = useState<boolean>(router.pathname === "/" ? true : false)

    useEffect(() => {
        setIsHomepage(router.pathname === "/" ? true : false)
    })
    return (
        <>
            <FooterDiv className={cs({ notHomepage: !isHomepage })}>
                <ContentDiv>
                    <CopyrightDiv>
                        <Name>Michael</Name>
                        <Name>Vanhoutte</Name>
                        <Copyright>© 2022, Built and designed by Michael Vanhoutte</Copyright>
                    </CopyrightDiv>
                    <SocialsDiv>
                        <Text>Follow me on</Text>
                        <SocialIconsDiv>
                            <SocialIcon
                                link="https://github.com/MichaelVanhoutte1"
                                src="/images/icons/github.svg"
                                alt="github"
                            />
                            <SocialIcon
                                link="https://www.linkedin.com/in/michael-vanhoutte/"
                                src="/images/icons/linkedin.svg"
                                alt="linkedin"
                            />
                            <SocialIcon
                                isMailIcon
                                link="mailto:contact@mvanhoutte.com"
                                src="/images/icons/email.svg"
                                alt="email"
                            />
                        </SocialIconsDiv>
                    </SocialsDiv>
                </ContentDiv>
            </FooterDiv>
        </>
    );
};

export default FooterComponent;
