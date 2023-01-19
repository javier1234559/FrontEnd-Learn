import React from 'react';
import { StyledFeature, StyledFeatureIcon, StyledFeatureHeading, StyledFeatureText } from './StyledFeature'

const Feature = ({ icon, heading, text }) => {
    return (
        <StyledFeature>
            <StyledFeatureIcon>
                <img src={icon} alt="Feature Icon" />
            </StyledFeatureIcon>
            <StyledFeatureHeading>{heading}</StyledFeatureHeading>
            <StyledFeatureText>{text}</StyledFeatureText>
        </StyledFeature>
    );
};

export default Feature;
