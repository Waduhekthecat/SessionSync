import React from 'react';
import styled from 'styled-components';

export type AudioInputOption = 'mono-1' | 'mono-2' | 'stereo-1-2';

export interface AudioInputSelectorProps {
  value: AudioInputOption | '';
  onChange: (newInput: AudioInputOption | '') => void;
}

const AudioInputSelector: React.FC<AudioInputSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      <Select value={value} onChange={(e) => onChange(e.target.value as AudioInputOption)}>
        <option value="" disabled hidden>
          Select Input
        </option>
        <option value="mono-1">Mono: Input 1</option>
        <option value="mono-2">Mono: Input 2</option>
        <option value="stereo-1-2">Stereo: Inputs 1/2</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  margin-top: 8px;
`;

const Select = styled.select`
  padding: 4px 8px;
  font-size: 11px;
  background-color: #222;
  color: #fff;
  border: 1px solid #444;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;

  &:hover {
    border-color: rgb(61, 187, 255);;
  }

  &:focus {
    outline: none;
    border-color:rgb(0, 0, 0);
  }
`;

export default AudioInputSelector;
