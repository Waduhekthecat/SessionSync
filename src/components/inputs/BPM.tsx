import React, { useState } from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface BPMProps {
  initialBPM?: number;
  onBPMChange?: (newBPM: number) => void;
}

const BPM: React.FC<BPMProps> = ({ initialBPM = 120, onBPMChange }) => {
  const [bpm, setBpm] = useState(initialBPM.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setBpm(value);
    }
  };

  const commitBPM = () => {
    const parsed = parseInt(bpm.trim(), 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 999 && onBPMChange) {
      onBPMChange(parsed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      commitBPM();
    }
  };

  const handleBlur = () => {
    commitBPM();
  };

  return (
    <BPMWrapper>
      <BPMText>BPM: </BPMText>
      <AccessTimeIcon />
      <BPMContainer>
        <BPMInput
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={bpm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onClick={e => e.currentTarget.select()}
          maxLength={3}
        />
      </BPMContainer>
    </BPMWrapper>
  );
};

const BPMWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const BPMText = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;

const BPMContainer = styled.div`
  width:60px;
  height: 30px;
  background-color: #1f2937; /* slate-800 */
  border-radius: 5px;
  border: 1px solid #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-within {
    background-color: white;
  }
`;

const BPMInput = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  background: transparent;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  /* Remove number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
  }
`;

export default BPM;
