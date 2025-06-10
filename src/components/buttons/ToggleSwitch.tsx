import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(!enabled)}
      enabled={enabled}
    >
      <Thumb enabled={enabled} />
    </Switch>
  );
};

export default ToggleSwitch;

const Switch = styled.div<{ enabled: boolean }>`
  width: 50px;
  height: 26px;
  background: ${(p) => (p.enabled ? '#4caf50' : '#ccc')};
  border-radius: 13px;
  display: flex;
  align-items: center;
  padding: 3px;
  cursor: pointer;
  transition: background 0.3s;
`;

const Thumb = styled.div<{ enabled: boolean }>`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transform: translateX(${(p) => (p.enabled ? '24px' : '0')});
  transition: transform 0.3s;
`;
