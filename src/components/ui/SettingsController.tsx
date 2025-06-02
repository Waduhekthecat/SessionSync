import React, { useState } from 'react';
import styled from 'styled-components';
import BPM from '../inputs/BPM';
import MetronomeButton from '../buttons/MetronomeButton';



const SettingsController: React.FC = () => {
const [bpm, setBpm] = useState(120);

  return (
    <ControlBar>
      <LeftSection><h2>Tracks</h2></LeftSection>
      <RightSection>
        <BPM
          initialBPM={bpm}
          onBPMChange={(newBpm) => setBpm(newBpm)}
        />
        <MetronomeButton label="Metronome" width={70} height={30} />
      </RightSection>
    </ControlBar>
  );
};

export default SettingsController;


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
