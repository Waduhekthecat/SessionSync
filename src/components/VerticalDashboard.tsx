import React from 'react';
import styled from 'styled-components';

const VerticalDashboard: React.FC = () => {
  return (
    <Dashboard>
      <IconPlaceholder />
      <IconPlaceholder />
      <IconPlaceholder />
      {/* Add more icons here */}
    </Dashboard>
  );
};

const Dashboard = styled.div`
  min-width: 80px;               
  height: 100vh;
  width: 100px;
  position: fixed;           
  top: 60px;                 
  right: 0;                  
  background-color: #222;    
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
`;
const IconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  background-color: #444;
  margin: 10px 0;
  border-radius: 8px;
`;

export default VerticalDashboard;
