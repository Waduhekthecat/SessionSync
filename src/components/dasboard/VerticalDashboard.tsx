import React from 'react';
import styled from 'styled-components';

const DashboardMenu: React.FC = () => {
  return (
    <DashboardContainer>
      <IconPlaceholder />
      <IconPlaceholder />
      <IconPlaceholder />
      {/* Add more icons here */}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  grid-area: 2 / 10 / 5 / 11;
  min-width: 80px;               
  width: 100%;
  height: calc(100%);              
  background-color: #222;    
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
`;
const IconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  background-color: #00D0FF;
  margin: 10px 30px;
  border-radius: 8px;
  cursor: pointer;
`;

export default DashboardMenu;
