import React from "react";
import { GroupService, CardService , PictureService } from "./ServiceSectionStyled";
import { StyledHeadline, TextStyled } from "./SectionStyled";
import {ButtonStyled}  from "./ButtonStyled"

export default function ServiceSection() {
  return (
    <GroupService>
      <CardService>
        <PictureService src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1acb41b9310a_city-scape-p-500x334.jpeg"/>
        <StyledHeadline  className="ServiceCard" >SERVICES ONE</StyledHeadline>
        <TextStyled className="ServiceButon" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</TextStyled>
        <ButtonStyled primary='transparent' bordercolorHover="#2e9dff" colorHover= "#96B9FF"  >Learn More</ButtonStyled>
      </CardService>
      <CardService>
        <PictureService src="https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1ab359b9312c_photo-1416400639808-f41f0c149b09-p-1080x721.jpeg"/>
        <StyledHeadline  className="ServiceCard" >SERVICES TWO</StyledHeadline>
        <TextStyled className="ServiceButon" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</TextStyled>
        <ButtonStyled primary='transparent' bordercolorHover="#2e9dff" colorHover= "#96B9FF"  >Learn More</ButtonStyled>
      </CardService>
    </GroupService>
  );
}
