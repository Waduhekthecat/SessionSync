import React from 'react';
import styled from 'styled-components';
import ChatPanel from './ChatPanel';

const ActiveDashboardItem: React.FC = () => {
  return (
    <DashboardItemContainer>
      <ChatPanel />
    </DashboardItemContainer>
  )
};



export default ActiveDashboardItem;

const DashboardItemContainer = styled.div`
    grid-area: 4 / 6 / 5 / 10;
    height: 100%;
    width: 100%;
    background-color: #121212;
`;