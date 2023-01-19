import React from "react";
import { WidthContainer } from "../styles/Global";
import { StyledHeadline, TextStyled } from "./SectionStyled";
import { FaTwitter , FaFacebookSquare , FaPinterestP , FaGooglePlusG , FaGithubSquare} from "react-icons/fa";
import {
  FooterStyled,
  AboutBox,
  LinkUseful,
  Box,
  IconLink,
  SocialLinks,
  SocialLink,
  CopyRight
} from "./FooterStyled";

function Footer(props) {
  return (
    <FooterStyled type={props.name} className={props.name}>
      <WidthContainer type={props.name} className={props.name}>
        <AboutBox>
          <StyledHeadline type={props.name} className={props.name}>
            about velocity
          </StyledHeadline>
          <TextStyled type={props.name} className={props.name}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </TextStyled>
        </AboutBox>
        <Box>
          <StyledHeadline type={props.name} className={props.name}>
            USEFUL LINKS
          </StyledHeadline>
          <LinkUseful>Phasellus gravida semper nisi</LinkUseful>
          <LinkUseful>Suspendisse nisl elit</LinkUseful>
          <LinkUseful>Dellentesque habitant morbi</LinkUseful>
          <LinkUseful>Etiam sollicitudin ipsum</LinkUseful>
        </Box>
        <Box>
          <StyledHeadline type={props.name} className={props.name}>
            SOCIAL
          </StyledHeadline>
          <SocialLinks>
            <IconLink>
              <FaTwitter />
            </IconLink>
            <SocialLink>Twitter</SocialLink>
          </SocialLinks>
          <SocialLinks>
            <IconLink>
              <FaFacebookSquare />
            </IconLink>
            <SocialLink>FaceBook</SocialLink>
          </SocialLinks>
           <SocialLinks>
            <IconLink>
              <FaPinterestP />
            </IconLink>
            <SocialLink>Pinterest</SocialLink>
          </SocialLinks>
          <SocialLinks>
            <IconLink>
              <FaGooglePlusG />
            </IconLink>
            <SocialLink>Google</SocialLink>
          </SocialLinks>
          <SocialLinks>
            <IconLink>
              <FaGithubSquare />
            </IconLink>
            <SocialLink>Github</SocialLink>
          </SocialLinks>
        </Box>
      </WidthContainer>
      <CopyRight><h4>Copyright Velocity Inc. Made in Javier.</h4></CopyRight>
    </FooterStyled>
  );
}

export default Footer;
