import React from 'react';
import styled from 'styled-components';

const HorizontalControlBar: React.FC = () => {
  return (
    <ControlBar>
      <LeftSection><h2>Tracks</h2></LeftSection>
      <RightSection>
        <ControlButton>Tempo</ControlButton>
        <ControlButton>Metronome</ControlButton>
      </RightSection>
    </ControlBar>
  );
};

const ControlBar = styled.div`
    grid-area: 3 / 1 / 4 / 10;
    display: flex;
    width: 100%;
    height: 50px;              
    background-color: #333;
    color: white;
    box-sizing: border-box;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`;
const LeftSection = styled.div`
    flex: 1.2;
    padding-left: 20px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
`;
const RightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
`;
const ControlButton = styled.button`
    width: 100px;
    height: 40px;
    font-size: 13px;
    padding: 8px 16px;
    background-color: #262626;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #777;
  }
`;

export default HorizontalControlBar;
