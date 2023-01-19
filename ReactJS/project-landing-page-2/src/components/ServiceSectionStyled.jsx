import styled from "styled-components";
import {device} from "../styles/Breakpoints"

export const GroupService = styled.div`
  display: flex;
  width: 100%;

  @media (${device.sm}){
    flex-direction: column;
    
  }
  /* max-width: 800px; */
`;

export const CardService = styled.div`
  color: #fff ;
  padding :20px; 
  text-align: center;
`;

export const PictureService = styled.img`
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 30px;
`;
