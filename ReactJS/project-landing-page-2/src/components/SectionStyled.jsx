import styled from "styled-components";
import {device} from "../styles/Breakpoints"

export const SectionStyled = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 5px;

  &&.ServiceSection {
    background-color: var(--black-color);
  }
`;


export const SectionTitleGroup = styled.div`
  margin-bottom: 60px;
`;

export const StyledHeadline = styled.h1`
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  font-weight: 300;
  color: ${(props) => props.color || "#fff"};
  margin-bottom: 20px;
  letter-spacing: 10px;

  &&.Hero {
    font-size: 4rem;
    letter-spacing: 2px;

    @media (${device.md}){
      font-size: 2.5rem;
      line-height: 3.5rem;
    }

  }
  &&.ServiceSection{
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  &&.CardSection {
    font-size: 1.5rem;
    line-height: 1.5rem;
    white-space: nowrap;
    color: #676770;
  }
  &&.Card {
    font-size: 1rem;
    line-height: 1.2rem;
    color: #676770;
    letter-spacing: 10px;
    margin-bottom: 15px;
  }
  &&.ServiceCard {
    font-size: 1rem;
    line-height: 1rem;
    color: #fff;
    letter-spacing: 6px;
    margin-bottom: 15px;
  }
  &&.TabSection {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #676770;
  }
  &&.SecondTabSection{
    font-size: 1.5rem;
    line-height: 2.3rem;
    color: #676770;
    letter-spacing: 1px;
    font-size:2.5rem;
    text-transform:capitalize;

    @media (${device.sm}) {
      font-size: 32px;
      line-height: 2.3rem;
    }
  }

  &&.Footer{
    font-size: 1.2rem;
    line-height: 1.5rem;
    white-space: nowrap;
    color: #000;
    letter-spacing: 5px;
  }
  &&.Footer{
    text-align : start ;
    margin-bottom: 20px;
  }

 
`;

export const StyledSubHeadLine = styled.h4`
  font-size: 1.1rem;
  line-height: 25px !important; 
  letter-spacing: 3px;
  font-weight: 300;
  text-transform: capitalize;
  color: ${(props) => props.color || `var(--second-color)`};

  text-align: center;
  margin-bottom: 60px;

  &&.Hero{
    font-size : 1.5rem ;
    @media (${device.md}){
      font-size: 1.2rem;
      line-height: 1.2rem;
    }

  }

  &&.CardSection {
    color: #676770;
  }

  &&.ServiceSection {
    color: #fff;
  }
  &&.TabSection {
    color: #676770;
  }
  
`;

export const TextStyled = styled.p`
  font-size: ${(props) => props.fontSize || "0.8rem"};
  line-height: ${(props) => props.fontSize || "1.5rem"};
  font-weight: 300;
  text-align: center;
  margin: 10px 0;

  &.ServiceButon{
    padding-bottom: 20px;
  }
  &&.Footer{
      color : var(--text-color);
      text-align : start ;

  }

`;
