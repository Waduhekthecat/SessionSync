import React from 'react';
import styled from 'styled-components';

interface TrackMonitorProps {
  leftLevel: number;
  rightLevel?: number;
  height?: number;
  width?: number;
}

const TrackMonitor: React.FC<TrackMonitorProps> = ({
  leftLevel,
  rightLevel,
  height = 60,
  width = 8,
}) => {
  const clampedLeft = Math.max(0, Math.min(1, leftLevel));
  const clampedRight = rightLevel !== undefined ? Math.max(0, Math.min(1, rightLevel)) : null;

  const isStereo = clampedRight !== null;

  return (
    <Container height={height} isStereo={isStereo} barWidth={width}>
      <Level level={clampedLeft} barWidth={width} />
      {isStereo && <Level level={clampedRight!} barWidth={width} />}
    </Container>
  );
};

const Container = styled.div<{ height: number; isStereo: boolean; barWidth: number }>`
  display: flex;
  gap: 3px;
  background-color: #313131;
  border-radius: 1px;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: ${({ isStereo, barWidth }) =>
    isStereo ? barWidth * 2 + 3 : barWidth}px;
  align-items: flex-end;
`;

const Level = styled.div<{ level: number; barWidth: number }>`
  background-color: #00ff00;
  width: ${({ barWidth }) => barWidth}px;
  height: ${({ level }) => level * 100}%;
  transition: height 0.1s ease-out;
  border-radius: 1px;
`;

export default TrackMonitor;
