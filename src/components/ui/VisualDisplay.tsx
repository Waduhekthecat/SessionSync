import React from 'react';
import styled from 'styled-components';
import PlaceholderImage from '../../assets/images/placeholder.jpg'; 

const VisualDisplay: React.FC = () => {
  return (
    <DisplayContainer>
      <Image src={PlaceholderImage} alt="Visual Display" />
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
    grid-area: 2 / 1 / 3 / 6;
    flex: 1;
    width: 100%;
    height: 321px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default VisualDisplay;
