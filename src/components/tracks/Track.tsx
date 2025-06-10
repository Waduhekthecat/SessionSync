import { useState, forwardRef, useRef } from 'react';
import styled from 'styled-components';
import Label from '../inputs/TrackLabel';
import InputSelector, { AudioInputOption } from './AudioInputSelector';
import FXButtonGroup from '../buttons/FxButtonGroup';
import Knob from './Knob';
import { pan, vol } from '../../utils/KnobFormats';
import TrackMonitor from './TrackMonitor';
import MuteSoloButtons from './ToggleButtons';
import PluginManager from './PluginManager';

export interface TrackProps {
  id: string;
  number: number;
  isSelected: boolean;
  isMute: boolean; 
  isSolo: boolean; 
  onSelect: (id: string) => void;
  onToggleMute: () => void;
  onToggleSolo: () => void;
  onFXClick: () => void;
}

const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ id, number, isSelected, isMute, isSolo, onSelect, onToggleMute, onToggleSolo, onFXClick }, ref) => {
  const [selectedInput, setSelectedInput] = useState<AudioInputOption | ''>('');
  const [trackMuted, setTrackMuted] = useState(false);
  const [levelLeft, setLevelLeft] = useState(0); // only left for mono
  const [levelRight, setLevelRight] = useState(0);
  const [isFXActive, setIsFXActive] = useState(false);
  const [isPluginManagerOpen, setPluginManagerOpen] = useState(false);
  const [activePlugins, setActivePlugins] = useState<string[]>([]);
  
  const handleInputChange = (newInput: AudioInputOption | '') => {
    setSelectedInput(newInput);
    console.log('Selected input:', newInput || 'None');
  };

  // mock available plugins list (you will replace with your directory scan)
  const availablePlugins = ['Reverb', 'Delay', 'Chorus', 'Compressor'];

  const openPluginManager = () => setPluginManagerOpen(true);
  const closePluginManager = () => setPluginManagerOpen(false);

const handleAddPlugin = (plugin: string) => {
  setActivePlugins(prev => {
    const newPlugins = [...prev, plugin];
    if (prev.length === 0 && newPlugins.length === 1) {
      setIsFXActive(true);
    }
    return newPlugins;
  });
};

const handleRemovePlugin = (plugin: string) => {
  setActivePlugins(prev => {
    const newPlugins = prev.filter(p => p !== plugin);
    if (prev.length > 0 && newPlugins.length === 0) {
      setIsFXActive(false);
    }
    return newPlugins;
  });
};

// mockLeft and mockRight will be replaced with actual track readings
    const leftRef = useRef(Math.random());
    const rightRef = useRef(Math.random());

    const mockLeft = leftRef.current;
    const mockRight = rightRef.current;
    return (
      <TrackWrapper ref={ref} onClick={() => onSelect(id)} $isSelected={isSelected}>
        
        <TrackNumber><h4>{number}</h4></TrackNumber>

        <Divider />

        <Label number={number} onNameChange={(newName) => console.log('New track name:', newName)} />

        <InputSelector value={selectedInput} onChange={handleInputChange} />
        
        <Knob minAngle={-135} maxAngle={135} label="VOL" format={vol} />
        <Knob minAngle={-90} maxAngle={90} label="PAN" format={pan} />
        
        <FXButtonGroup 
          onFXClick={openPluginManager}   
          isActive={isFXActive}
          onTogglePower={() => setIsFXActive(prev => !prev)}
        />
        
        <PluginManager
          onClose={closePluginManager}
          isOpen={isPluginManagerOpen}
          availablePlugins={availablePlugins}
          activePlugins={activePlugins}
          onAddPlugin={handleAddPlugin}
          onRemovePlugin={handleRemovePlugin}
        />

        <MuteSoloButtons />
        
        <TrackMonitor
          leftLevel={isMute ? 0 : mockLeft}
          rightLevel={isMute || selectedInput !== 'stereo-1-2' ? undefined : mockRight}
          height={60}
          width={8}
        />
      </TrackWrapper>
    );
  }
);

export default Track;

const TrackWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  height: 70px;
  width: 100%;
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