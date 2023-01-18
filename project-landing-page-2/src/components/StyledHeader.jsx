import styled , {keyframes} from 'styled-components'
import { device } from '../styles/Breakpoints';

export const StyledHeader = styled.header`
  /* CSS styles for the header */
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  /* CSS styles for the logo */
  color: var(--primary-color);
  width: 150px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 300;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const StyledNav = styled.nav`
  /* CSS styles for the navigation */
  display: flex;

  @media (${device.md}) {
    display: none  ;
  }
`;

export const StyledNavList = styled.ul`
  /* CSS styles for the navigation list */
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: none  ;
  }

`;
export const StyledNavItem = styled.li`
  font-size: 3px;
  font-weight: 400;
  margin-left: 20px;
  font-size: 1.2em;
  text-transform: downcase;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: var(--primary-color);
    }
  }

  &.active {
      color: var(--primary-color);
  }

`;
export const appear = keyframes`
  from{
    opacity:0;
    scale: 0.5;
  }
  to{
    opacity:1;
    scale: 1;
  }
`;

export const StyledNavItemReponsive = styled(StyledNavItem)`
  padding: 15px;
  margin: 0;
  background-color: #3b99d9;
  color: hsla(0, 0%, 100%, 0.52);
  text-align: start;
  font-size : 1rem;
  animation: ${appear} 0.3s linear ;
  &:first-child{
    margin-top: 60px;
    
  }

  &.active {
      color: #fff;

  }
  &:hover {
      color: var(--gray-color);
    }
    
`;

export const StyledNavIcon = styled.div`
    cursor: pointer;
    display:  none ;
    @media  (${device.md}) {
      display: block;
    }
`;
