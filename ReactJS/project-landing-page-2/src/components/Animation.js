import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components"
import {device} from "../styles/Breakpoints"

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 1 }, y: 0 },
  hidden: { opacity: 0, scale: 0, y: 200 },
};

export const StyledHeroContent = styled(motion.div)`
  max-width: 800px;
  text-align: center;
  @media (${device.sm}) {
    margin: 0px 20px;
  }
`;

export function Animation(props){
  const controls = useAnimation();
  const [ref, inView] = useInView({  threshold: 0,});
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <StyledHeroContent
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {props.children}
    </StyledHeroContent>
  );
}


const StyledAnimation = styled(motion.div)`
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
export function AnimationItems(props){
  const squareVariantsCard = {
    visible: { opacity: 1, scale: 1,  y:  0 ,transition: { 
      type: 'spring', 
      duration: 1 , 
      delay : `${props.delay}`,
     
      }},
    hidden: { opacity: 0, scale: 1, y: 100 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({  threshold: 0,});
  useEffect(() => {
    console.log(inView)

    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <StyledAnimation 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariantsCard}
    >
      {props.children}
    </StyledAnimation>
  );

}

export default Animation;
