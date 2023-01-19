import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { device } from './Breakpoints';

export const WidthContainer = styled.div`
    width: 100%;
    /* width:clamp(100%,750px,90%); */
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
    padding : 0 16px;
    display: flex ;
    text-align: center;
    justify-content: center;

    /* @media ${device.md} {
      max-width: 90%;
    } */
    &.navbar {
      display: flex ;
      justify-content: space-between;
      @media ${device.md} {
       max-width: 100%;
      }
    }
    &.CardSection {
      display : block
    }
    &.ServiceSection {
      display : block ; 
      
    }
    &.TabSection {
      display : block ;

    }
    &.Footer{
      display :grid ; 
      grid-template-columns: repeat(3, 1fr);
      padding-left: -10px;
      padding-right: -10px;

      @media (${device.md}){
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

    }
    


`;

const GlobalStyles = createGlobalStyle`
  *{
    padding : 0 px;
    margin : 0 px ;
    box-sizing: border-box;
  }
  :root {
    --primary-color: #96B9FF;
    --bold-color : #2e80b6;
    --second-color : #2e9dff;
    --black-color : #192024;
    --text-color : #6a859c;
    --gray-color : #92a0ad;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color : #6a859c;
    line-height: 20px;
    font-size: 16px;
    background-color: #fff;
    
  }

  a{
    text-decoration: none;
    color:inherit;
  }
  li{
    list-style: none;
  }
  
`;

export default GlobalStyles