import React from 'react';
import styled from 'styled-components';
import PlaceholderImage from '../assets/images/placeholder.jpg'; 

const VisualDisplay: React.FC = () => {
  return (
    <DisplayContainer>
      <Image src={PlaceholderImage} alt="Visual Display" />
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default VisualDisplay;
