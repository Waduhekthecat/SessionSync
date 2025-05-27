import React from 'react';
import styled from 'styled-components';

const TitleBar: React.FC = () => {
  return (
    <TitleBarContainer>
      <Title>StudioJam</Title>
    </TitleBarContainer>
  );
};

const TitleBarContainer = styled.div`
  width: 100%;
  height: 60px;              
  background-color: #3F3F3F;    
  color: white;
  display: flex;
  align-items: center;  
  justify-content: center;     
  padding: 0 20px;           
  box-sizing: border-box;    
  user-select: none;         
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export default TitleBar;
