import React, { useState } from 'react';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const FX: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handlePowerClick = () => {
    setIsActive(prev => !prev);
  };

  return (
    <ButtonWrapper>
      <LeftButton>FX</LeftButton>
      <RightButton $active={isActive} onClick={handlePowerClick}>
        <PowerIcon $active={isActive} />
      </RightButton>
    </ButtonWrapper>
  );
};

export default FX;

const ButtonWrapper = styled.div`
  display: flex;
  width: 60px;  
  height: 32px; 
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
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

const RightButton = styled.div<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? '#D7D7D7' : '#D7D7D7')};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;

  ${({ $active }) =>
    $active && `
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
    `}
`;


const PowerIcon = styled(PowerSettingsNewIcon)<{ $active: boolean }>`
  color: black;
  ${({ $active }) =>
    $active && `
      color: rgb(61, 187, 255);
      filter: drop-shadow(0 0 5px rgb(0, 255, 255));
    `}
`;
