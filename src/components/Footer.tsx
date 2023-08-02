import React from "react";
import {styled} from "styled-components";
import Logo from "./Logo";
import Link from "./Link";
import { FACEBOOK_ICON, INSTAGRAM_ICON, TWITTER_ICON, YOUTUBE_ICON } from "../constants/icons";


const Footer = () => {
  return (
    <AppFooter>
      <FooterMain>
        {/*<Link />*/}
        <LinksFooter>
          <Link url={'https://google.com'}>Privacy Policy</Link>
          <Link url={'https://google.com'}>Terms & Conditions</Link>
          <Link url={'https://google.com'}>Cookie Policy</Link>
        </LinksFooter>
        <Logo />
        <SocialLinks>
          <Link url={'https://google.com'}><img src={FACEBOOK_ICON} alt=""/></Link>
          <Link url={'https://google.com'}><img src={TWITTER_ICON} alt=""/></Link>
          <Link url={'https://google.com'}><img src={YOUTUBE_ICON} alt=""/></Link>
          <Link url={'https://google.com'}><img src={INSTAGRAM_ICON} alt=""/></Link>
        </SocialLinks>
      </FooterMain>
      <Copyright>
        ©2022 All rights reserved. Powered by Atla
      </Copyright>

    </AppFooter>
  );
};



const AppFooter = styled.div`
  flex-shrink: 0;
  min-height: 160px;
  border: 1px 0px 0px 0px;
  background: linear-gradient(0deg, #F0F5F5, #F0F5F5),
linear-gradient(0deg, #CDD2DD, #CDD2DD);
  border-top: 1px solid #CDD2DD;
  padding: 25px 50px 15px 50px;
  background: #FFFFFF;
  @media ${props => props.theme.media.mobile} {
  min-height: 260px;
  gap: 15px;
  display: flex;
  flex-direction: column;
}
`;

const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.media.mobile} {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
`;

const LinksFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${props => props.theme.media.mobile} {
    gap: 5px
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #959596;
`;

export default Footer;