import React, { useState } from 'react';
import styled from 'styled-components';

interface TrackLabelProps {
  number?: number;
  onNameChange?: (newName: string) => void; // Optional callback to notify parent
}

const TrackLabel: React.FC<TrackLabelProps> = ({ number, onNameChange }) => {
  const [name, setName] = useState(`Track ${number}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur(); // Optional: remove focus on Enter
      if (onNameChange) {
        onNameChange(name.trim());
      }
    }
  };

  return (
    <LabelContainer>
      <StyledInput
        type="text"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={e => e.currentTarget.select()}
      />
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  height: 35px;
  width: 100px;
  background-color: #121212;
  border-radius: 6px;
  margin-left: 5px;
  border: 1px solid #444;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  padding: 0 8px;
  &:hover {
    border-color: rgb(61, 187, 255);
  }

  &:focus-within {
    outline: none;
    border-color: rgb(0, 0, 0);;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  outline: none;
`;

export default TrackLabel;
