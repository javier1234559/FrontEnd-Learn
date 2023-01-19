import React from "react";
import { TabButton } from "./ButtonStyled";
import { TabButtonGroup, Picture, ContentTabSection } from "./TabSectionStyled";
import { StyledHeadline, TextStyled } from "./SectionStyled";
import { useState } from "react";

function TabSection() {
  const [show, setShow] = useState(1);

   const images = {
     1 : "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a316cb93127_photo-1422222948315-28aadb7a2cb8-p-1080x721.jpeg",
     2 : "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1ab3f1b93110_5fcb0a55.jpg",
     3 : "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1a4509b93139_5cf8b62b-p-800x532.jpeg"
   }

  const handleClick = (show) => {
    setShow(show);
  };

  return (
    <>
      <ContentTabSection>
        <TabButtonGroup>
          <TabButton
            className={show === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            Tab Button 1
          </TabButton>
          <TabButton
            className={show === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            Tab Button 2
          </TabButton>
          <TabButton
            className={show === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            Tab Button 3
          </TabButton>
        </TabButtonGroup>
        <Picture src={images[show]} />
        <StyledHeadline className="SecondTabSection">
          Some Tile Here
        </StyledHeadline>
        <TextStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
          <br />
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
          <br />
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </TextStyled>
      </ContentTabSection>
    </>
  );
}

export default TabSection;
