import React from 'react';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const FX: React.FC = () => {
  return (
    <ButtonWrapper>
      <LeftButton>FX</LeftButton>
      <RightButton>
        <PowerSettingsNewIcon fontSize="small" style={{color: 'black'}}/>
      </RightButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  width: 60px;  
  height: 32px; 
  border-radius: 5px;
  overflow: hidden;
`;

const LeftButton = styled.div`
  background-color: #3F3F3F;
  color: rgb(61, 187, 255);
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightButton = styled.div`
  background-color: #D7D7D7;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default FX;
