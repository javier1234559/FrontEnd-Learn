import styled from "styled-components";
import {device} from "../styles/Breakpoints"

export const FooterStyled = styled.div`
  width:100%;
  background-color: #edeff2 ;

`;

export const Box =  styled.div`
  margin-left : 20px;
  padding : 10px;
  &:first-child{
    margin-left : 0px;

  }
  @media (${device.md}){
    padding : 0px;
    margin: 0px;
  }
  ${'' /* @media {${device.md}}{
    padding:0px;
  } */}

`;

export const AboutBox = styled(Box)`

`;

export const LinkUseful = styled.a`
  padding: 5px 0px;
  display :block;
  border-bottom : 1px solid #d5d5e0;
  font-size: ${(props) => props.fontSize || "0.8rem"};
  line-height: ${(props) => props.fontSize || "0.8rem"};
  font-weight: 300;
  white-space: nowrap;
  text-align: start;
  transition: all 0.5 ease-in-out;
  cursor: pointer;
  margin : 10px 0px;
  &:hover {
    color:var(--second-color);
  }

`;

export const IconLink = styled.div`
  padding-top: 10px;
  color: #000;
  height: 30px;
`;

export const SocialLinks = styled.div`
  display :flex;
`;
export const SocialLink = styled(LinkUseful)`
  margin-left: 20px;
  padding-bottom: 10px ; 
  width: 200px;
`;

export const CopyRight =  styled.div`
  width : 100%;
  background-color:#383838;
  text-align:center ; 
  height: 100px;
  margin-bottom: 0px;
  color : #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight : 300;
`;