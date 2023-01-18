import React from "react";
import { StyledHeadline, TextStyled } from "./SectionStyled";
import { GroupCard, ImgIcon } from "./CardSectionStyled";
import { AnimationItems } from "./Animation";

export default function CardSection() {
  return (
    <GroupCard>
        {/* <Card> */}
      <AnimationItems delay="0.5">
          <ImgIcon />
          <StyledHeadline className="Card">Graphic Design</StyledHeadline>
          <TextStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </TextStyled>
      </AnimationItems>
        {/* </Card> */}

      <AnimationItems delay="0.6">
        <ImgIcon />
        <StyledHeadline className="Card">AWESOME CODE</StyledHeadline>
        <TextStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </TextStyled>
      </AnimationItems >
      <AnimationItems delay="0.7">
        <ImgIcon />
        <StyledHeadline className="Card">FREE TEMPLATE</StyledHeadline>
        <TextStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </TextStyled>
      </AnimationItems>
    </GroupCard>
  );
}
