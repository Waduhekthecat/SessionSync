import { useState, forwardRef } from 'react';
import styled from 'styled-components';
import Label from './Label';
import InputSelector, { AudioInputOption } from './AudioInputSelector';
import FXButtonGroup from '../buttons/FxButtonGroup';
import ToggleButton from '../buttons/ToggleButton';
import Knob from './Knob';
import { pan, vol } from '../../utils/KnobFormats';
import TrackMonitor from './TrackMonitor';

interface TrackProps {
  id: string;
  number: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ id, number, isSelected, onSelect }, ref) => {
  const [selectedInput, setSelectedInput] = useState<AudioInputOption | ''>('');
  const [levelLeft, setLevelLeft] = useState(0); // only left for mono
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
      <TrackWrapper ref={ref} onClick={() => onSelect(id)} $isSelected={isSelected}>
        
        <TrackNumber><h4>{number}</h4></TrackNumber>

        <Divider />

        <Label number={number} onNameChange={(newName) => console.log('New track name:', newName)} />

        <InputSelector value={selectedInput} onChange={handleInputChange} />
        
        <Knob minAngle={-135} maxAngle={135} label="VOL" format={vol} />
        <Knob minAngle={-90} maxAngle={90} label="PAN" format={pan} />
        
        <FXButtonGroup />

        <ToggleButton label="M" active={isMute} onClick={handleMuteToggle} />
        <ToggleButton label="S" active={isSolo} onClick={handleSoloToggle} />
        
        <TrackMonitor
          leftLevel={mockLeft}
          rightLevel={selectedInput === 'stereo-1-2' ? mockRight : undefined}
          height={60}
          width={8}
        />

      </TrackWrapper>
    );
  }
);

export default Track;

const TrackMonitorContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  height: 100%;
`;

const TrackWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  height: 70px;
  width: 585px;
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