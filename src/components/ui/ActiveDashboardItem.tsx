import React from 'react';
import styled from 'styled-components';

const ActiveDashboardItem: React.FC = () => {
  return <DashboardItemContainer>
    </DashboardItemContainer>
};

const DashboardItemContainer = styled.div`
    grid-area: 4 / 6 / 5 / 10;
    height: 100%;
    width: 100%;
    background-color: #121212;
`;

export default ActiveDashboardItem;
