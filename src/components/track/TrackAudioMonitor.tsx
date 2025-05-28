import React from 'react';
import styled from 'styled-components';

interface TrackAudioMonitorProps {
    level: number;
    height?: number;
    width?: number;
}

const TrackAudioMonitor: React.FC<TrackAudioMonitorProps> = ({
    level,
    height = 60,
    width = 8,
}) => {
    const clampedLevel = Math.max(0, Math.min(1, level));

    return (
        <Container height={height} width={width}>
            <Level level={clampedLevel} />
        </Container>
    );
};

const Container = styled.div<{ height: number; width: number }>`
  position: relative;
  background-color: #313131;
  border-radius: 1px;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const Level = styled.div<{ level: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ level }) => level * 100}%;
  background-color: #00ff00;
  transition: height 0.1s ease-out;
`;

export default TrackAudioMonitor;
