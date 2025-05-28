import React from 'react';
import styled from 'styled-components';

interface LatencyProps {
  latency: number;
}

const LatencyDisplay: React.FC<LatencyProps> = React.memo(({ latency }) => {
  return (
    <LatencyWrapper>
      {latency} ms
    </LatencyWrapper>
  );
});

const LatencyWrapper = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  user-select: none;
`;

export default LatencyDisplay;
