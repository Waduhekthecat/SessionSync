import React from 'react';
import styled from 'styled-components';

interface UserMonitorProps {
  leftLevel: number;
  rightLevel: number;
  height?: number;
  width?: number;
}

const UserMonitor: React.FC<UserMonitorProps> = ({
  leftLevel,
  rightLevel,
  height = 60,
  width = 8,
}) => {
  const clampedLeft = Math.max(0, Math.min(1, leftLevel));
  const clampedRight = Math.max(0, Math.min(1, rightLevel));

  return (
    <Container height={height} width={width * 2 + 3}>
      <Level style={{ width }} level={clampedLeft} />
      <Level style={{ width }} level={clampedRight} />
    </Container>
  );
};

export default UserMonitor;

const Container = styled.div<{ height: number; width: number }>`
  display: flex;
  flex-direction: row;
  gap: 3px;
  background-color: #313131;
  border-radius: 1px;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const Level = styled.div<{ level: number }>`
  background-color: #00ff00;
  height: ${({ level }) => level * 100}%;
  transition: height 0.1s ease-out;
  border-radius: 1px;
  align-self: flex-end;
`;
