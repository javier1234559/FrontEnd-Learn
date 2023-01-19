import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavItemReponsive,
  StyledNavIcon,
} from "./StyledHeader";
import { AiOutlineMenu } from "react-icons/ai";
import { WidthContainer } from "../styles/Global";
import Modal from "./Modal";
import {  useState } from "react";

const Header = () => {
    const [show,setShow] = useState(false);
    
  return (
    <StyledHeader>
      <WidthContainer className="navbar">
        <StyledLogo>
          <Link to="/">Velocity</Link>
        </StyledLogo>
        <StyledNavIcon onClick={() => setShow(!show)}>
        {console.log(show)}
          <AiOutlineMenu />
        </StyledNavIcon>
        { show && <Modal handleShow={() => setShow(!show)}>
          <StyledNavItemReponsive className="active" onClick={() => setShow(!show)}>
            <Link to="/" >Home</Link>
          </StyledNavItemReponsive>
          <StyledNavItemReponsive onClick={() => setShow(!show)} >
            <Link to="/contact" >Contact</Link>
          </StyledNavItemReponsive>
        </Modal>}
        <StyledNav>
          <StyledNavList>
            <StyledNavItem className="active">
              <Link to="/">Home</Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link to="/contact">Contact</Link>
            </StyledNavItem>
          </StyledNavList>
        </StyledNav>
      </WidthContainer>
    </StyledHeader>
  );
};

export default Header;
