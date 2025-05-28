import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Label from './Label';

interface TrackProps {
  id: string;
  number: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ id, number, isSelected, onSelect }, ref) => {
    return (
      <TrackWrapper
        ref={ref}
        onClick={() => onSelect(id)}
        $isSelected={isSelected}
      >
        <TrackNumber>
          <h4>{number}</h4>
        </TrackNumber>
        <Divider />
        <Label />
      </TrackWrapper>
    );
  }
);

const TrackWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  height: 70px;
  width: 475px;
  margin-top: 4px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#8D8D8D' : '#8D8D8D')};
  align-items: center;
  border: ${({ $isSelected }) => ($isSelected ? '1px solid rgb(61, 187, 255)' : 'none')};
  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1.005)' : 'scale(1)')};
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
