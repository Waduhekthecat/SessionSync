import React from 'react';
import styled from 'styled-components';

const HorizontalControlBar: React.FC = () => {
  return (
    <ControlBar>
      <LeftSection>Tracks</LeftSection>
      <RightSection>
        <ControlButton>Tempo</ControlButton>
        <ControlButton>Metronome</ControlButton>
      </RightSection>
    </ControlBar>
  );
};

const ControlBar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;              /* same height as TitleBar */
  background-color: #333;
  color: white;
  box-sizing: border-box;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;
const LeftSection = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-weight: bold;
`;
const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const ControlButton = styled.button`
  padding: 8px 16px;
  background-color: #555;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #777;
  }
`;

export default HorizontalControlBar;
