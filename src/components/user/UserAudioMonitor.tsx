import React from 'react';
import AudioActivityBar from '../track/TrackAudioMonitor';

interface UserAudioMonitorProps {
  leftLevel: number;
  rightLevel: number;
}

const UserAudioMonitor: React.FC<UserAudioMonitorProps> = ({ leftLevel, rightLevel }) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <AudioActivityBar level={leftLevel} />
      <AudioActivityBar level={rightLevel} />
    </div>
  );
};

export default UserAudioMonitor;
