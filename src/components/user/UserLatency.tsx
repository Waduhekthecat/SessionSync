// This File is strictly for testing latency display updates

import React, { useEffect, useState } from 'react';
import LatencyDisplay from './LatencyDisplay';

interface UserLatencyProps {
  getLatency: () => number;
}

const UserLatency: React.FC<UserLatencyProps> = ({ getLatency }) => {
  const [displayLatency, setDisplayLatency] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = getLatency();
      setDisplayLatency(current);
    }, 1000); // update UI once per second

    return () => clearInterval(interval);
  }, [getLatency]);

  return <LatencyDisplay latency={displayLatency} />;
};

export default React.memo(UserLatency);
