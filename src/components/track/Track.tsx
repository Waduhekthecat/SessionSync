import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import Label from './Label';
import InputSelector, { AudioInputOption } from './AudioInputSelector';
import FXButtonGroup from '../buttons/FxButtonGroup';
import MuteButton from '../buttons/MuteButton';
import SoloButton from '../buttons/SoloButton';
import VolumeKnob from '../knobs/VolumeKnob';
import PanKnob from '../knobs/PanKnob';
import TrackMonitor from './TrackAudioMonitor';

interface TrackProps {
  id: string;
  number: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ id, number, isSelected, onSelect }, ref) => {
  const [selectedInput, setSelectedInput] = useState<AudioInputOption | ''>('');
    // For mono inputs, just use levelLeft (or levelRight), for stereo use both
  const [levelLeft, setLevelLeft] = useState(0);
  const [levelRight, setLevelRight] = useState(0);

  const [isMute, setIsMute] = useState(false);
  const [isSolo, setIsSolo] = useState(false);

  const handleInputChange = (newInput: AudioInputOption | '') => {
    setSelectedInput(newInput);
    console.log('Selected input:', newInput || 'None');
  };

  const handleMuteToggle = () => {
    if (isMute) {
      setIsMute(false);
      console.log("Track", {number}, "un-muted");
    } else {
      setIsMute(true);
      console.log("Track", {number}, "muted");
      setIsSolo(false);
    }
  };

  const handleSoloToggle = () => {
    if (isSolo) {
      setIsSolo(false);
      console.log("Track", {number}, "not solo");
    } else {
      setIsSolo(true);
      console.log("Track", {number}, "is solo");
      setIsMute(false);
    }
  };

// mockLeft and mockRight will be replaced with actual track readings
    const mockLeft = Math.random();  // trackLevels.left
    const mockRight = Math.random(); // trackLevels.right

    return (
      <TrackWrapper
        ref={ref}
        onClick={() => onSelect(id)}
        $isSelected={isSelected}
      >
        <TrackNumber>
          <h4>
            {number}
          </h4>
        </TrackNumber>
        <Divider />
        <Label 
          number={number} 
          onNameChange={(newName) => console.log('New track name:', newName)} 
        />
        <InputSelector value={selectedInput} onChange={handleInputChange} />
        <VolumeKnob minAngle={-135} maxAngle={135} label="VOL" />
        <PanKnob minAngle={-90} maxAngle={90} label="PAN" />
        <FXButtonGroup />
        <MuteButton 
          active={isMute} 
          onClick={handleMuteToggle}
        />
        <SoloButton 
          active={isSolo} 
          onClick={handleSoloToggle} 
        />
        <TrackMonitorContainer>
          {selectedInput === 'stereo-1-2' ? (
            <>
              <TrackMonitor level={mockLeft} height={60} width={8} />
              <TrackMonitor level={mockRight} height={60} width={8} />
            </>
          ) : (
            <TrackMonitor level={selectedInput ? mockLeft : 0} height={60} width={10} />
          )}
        </TrackMonitorContainer>
      </TrackWrapper>
    );
  }
);

const TrackMonitorContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  height: 100%;
`;

const TrackWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  height: 70px;
  width: 542px;
  margin-top: 4px;
  justify-content: space-evenly;
  background-color: ${({ $isSelected }) => ($isSelected ? '#B0B0B0' : '#8D8D8D')};
  align-items: center;
  border: ${({ $isSelected }) => ($isSelected ? 'none' : 'none')};
  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1)' : 'scale(1)')};
  transition: transform 0.15s ease, border 0.15s ease;
`;

const TrackNumber = styled.div`
  font-weight: bold;
  color: white;
  width: 28px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: #000000;
`;

export default Track;
