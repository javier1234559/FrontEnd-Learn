import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top :0 ; 
  left: 0;
  width :100%;
  height: 100%;
  background-color:transparent;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start ;
  z-index: 1;

  @media  (min-width: 900px){
    display: none;
  }

`;



function Modal(props) {
  return (
    <Backdrop onClick={props.handleShow}>
      {props.children}
    </Backdrop>
  )
}

export default Modal