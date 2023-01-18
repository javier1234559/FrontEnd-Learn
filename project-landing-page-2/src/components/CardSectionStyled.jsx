import styled from "styled-components";
import {device} from "../styles/Breakpoints"

export const GroupCard = styled.div`
  display: flex;
  justify-content: space-around;

  @media (${device.sm}){
    flex-direction: column;
    align-items: center;
    
  }

`;

export const Card = styled.div`
  border: 1px #dcebf7 solid;
  padding: 8px;
  &:nth-child(2){
    margin: 0px 25px ;
  }
  @media (${device.sm}){
    &:nth-child(2){
    margin: 25px 0px ;
   }
  }
`;

export function ImgIcon(props) {
  const ImgIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 20px auto;
    background-color: var(--second-color);
    padding: 5px;
    border-radius: 50%;
    border: 10px #fff solid;
    opacity: 0.8;
    box-shadow: 0 0 0 1px var(--second-color);
  `;

  const StyledSvg = styled.svg`
    height: 50px;
    width: 50px;
    color:#fff ;
    
  `;

  return (
    <ImgIcon>
      
      <StyledSvg
        className=""
        xmlns="http://www.w3.org/20000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </StyledSvg>
    </ImgIcon>
  );
}
