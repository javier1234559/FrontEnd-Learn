import styled from "styled-components";
import {device} from "../styles/Breakpoints"

export const ButtonStyled = styled.a.attrs(props => ({
  background: props.backgroundHover,
  border : props.bordercolorHover,
}))`
  background-color: ${ props => props.primary ||` var(--primary-color )`} ;
  color: ${ props => props.color  || "#fff"} ;
  text-transform:  uppercase;
  font-weight:300;
  /* white-space:nowrap; */
  border-radius: 5px;
  padding: 10px 30px;
  border: 1px ${props =>props.bordercolor || "#fff" } solid;
  font-size: 20px;
  cursor: pointer ;
  letter-spacing:2px;

    @media (${device.md}){
        font-size: 1em;
        line-height: 1rem;
        padding: 8px 15px;
      }
    @media (${device.xs}){
      /* width:50%; */
      margin:30px auto;
      display:block ;
      font-size: 1em;
      line-height: 1rem;
      padding: 8px 15px;
    }


  transition:  all 0.5s ease-in-out;

  margin-left: 20px;

  &:hover{
    background-color: ${props => props.background};
    color : ${props => props.colorHover};
    border : 1px ${props => props.bordercolorHover} solid;
  }

  &&.ServiceButon{
    margin-top:100px;

  }

`;

export const  TabButton = styled(ButtonStyled)`
    letter-spacing: 2px;
    font-size : 1.2rem ;
    line-height: 1.2rem;
    text-align: center ;
    white-space: nowrap; // khong cho xuong dong
    color : #fff;
    background-color: var(--gray-color);
    padding : 12px 10px;
    margin : 8px;
    &&.active {
      background-color: var(--bold-color,#2e80b6);
    }
    @media (${device.md}){
      font-size : 0.8em ;
      line-height: 1.2rem;
      margin : 10px 20px;
    }

`;