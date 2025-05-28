import React from 'react';
import styled from 'styled-components';

interface SyncIndicatorProps {
  offsetMs: number;  // difference in ms from global clock
  thresholdMs?: number; 
}

const SyncIndicator: React.FC<SyncIndicatorProps> = ({
  offsetMs,
  thresholdMs = 40,
}) => {
  const absOffset = Math.abs(offsetMs);

  let color = 'green'; // in sync
  if (absOffset > thresholdMs && absOffset <= thresholdMs * 2) {
    color = 'orange'; // slightly off
  } else if (absOffset > thresholdMs * 2) {
    color = 'red'; // out of sync
  }

  return (
    <Container>
      <IndicatorCircle title={`Sync offset: ${offsetMs} ms`} color={color} />
      <Label>sync</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  user-select: none;
`;

const IndicatorCircle = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1.5px solid #444;
`;

const Label = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 500;
  text-transform: lowercase;
`;

export default SyncIndicator;
