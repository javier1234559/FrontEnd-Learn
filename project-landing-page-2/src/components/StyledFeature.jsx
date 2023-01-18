import styled from 'styled-components';

export const StyledFeature = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const StyledFeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledFeatureHeading = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const StyledFeatureText = styled.p`
  font-size: 1.2em;
  color: gray;
`;
