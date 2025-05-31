import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UserLabel from './UserLabel';
import ToggleButton from '../buttons/ToggleButton';
import UserAudioMonitor from './UserAudioMonitor';
import SyncIndicator from './SyncIndicator';
import UserLatency from './UserLatency'; 

interface UserProps {
  id: string;
  name: string;
}

const User: React.FC<UserProps> = ({ name }) => {
  const latencyRef = useRef(0);

  const [isMute, setIsMute] = useState(false);
  const [isSolo, setIsSolo] = useState(false);

  const mockLeft = Math.random();
  const mockRight = Math.random();
  const mockSync = Math.random() * 100;


  const handleMuteToggle = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
      setIsSolo(false);
    }
  };

  const handleSoloToggle = () => {
    if (isSolo) {
      setIsSolo(false);
    } else {
      setIsSolo(true);
      setIsMute(false);
    }
  };  
  
  // Update latency every 200ms to "simulate" live network
  useEffect(() => {
    const interval = setInterval(() => {
      const newLatency = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      latencyRef.current = newLatency;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserWrapper>
      <ToggleButton label="M" active={isMute} color={'red'} onClick={handleMuteToggle} />
      <ToggleButton label="S" active={isSolo} color={'green'} onClick={handleSoloToggle} />
      <UserLabel name={name} />
      <SyncIndicator offsetMs={mockSync} />
      <UserLatency getLatency={() => latencyRef.current} /> {/* Only this updates */}
      <UserAudioMonitor leftLevel={mockLeft} rightLevel={mockRight} />
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  gap: 15px;
  box-sizing: border-box;
`;

export default User;
