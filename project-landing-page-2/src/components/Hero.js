import React from "react";
import { StyledHero } from "./StyledHero";
import { StyledSubHeadLine, StyledHeadline } from "./SectionStyled";
import { WidthContainer } from "../styles/Global";
import { ButtonStyled } from "./ButtonStyled";
import Animation from "./Animation";

const Hero = () => {
  return (
    <StyledHero>
      <WidthContainer>
        <Animation>
          <StyledHeadline className="Hero">THIS IS VELOCITY</StyledHeadline>
          <StyledSubHeadLine className="Hero">
            A FREE REPSONSIVE TEMPLATE BY WEBFLOW
          </StyledSubHeadLine>
          <div>
            <ButtonStyled
              bordercolor="#96B9FF"
              backgroundHover="#2e9dff"
              bordercolorHover="#2e9dff"
            >
              Sign Up
            </ButtonStyled>
            <ButtonStyled
              primary="transparent"
              bordercolorHover="#2e9dff"
              colorHover="#96B9FF"
            >
              Learn More
            </ButtonStyled>
          </div>
        </Animation>
      </WidthContainer>
    </StyledHero>
  );
};

export default Hero;
