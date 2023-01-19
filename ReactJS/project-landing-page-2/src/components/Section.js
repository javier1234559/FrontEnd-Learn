import React from 'react'
import { SectionStyled , SectionTitleGroup , StyledHeadline , StyledSubHeadLine} from './SectionStyled'
import {WidthContainer} from '../styles/Global'


function Section(props) {
  return (
    <SectionStyled  type={props.name} className = {props.name}>
      <WidthContainer type={props.name} className = {props.name}>
        <SectionTitleGroup type={props.name} className = {props.name}>
          <StyledHeadline type={props.name} className = {props.name}>{props.headlineContent}</StyledHeadline>
          <StyledSubHeadLine type={props.name} className = {props.name}>{props.subheadlineContent}</StyledSubHeadLine>
        </SectionTitleGroup>
          {props.children}
      </WidthContainer>
    </SectionStyled>
  )
}

export default Section