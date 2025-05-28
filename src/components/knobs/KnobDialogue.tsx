import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface KnobDialogueProps {
  children: React.ReactNode;
  position: { top: number; left: number };
}

const KnobDialogue: React.FC<KnobDialogueProps> = ({ children, position }) => {
  return ReactDOM.createPortal(
    <DialogueContainer style={{ top: position.top, left: position.left }}>
      {children}
    </DialogueContainer>,
    document.body
  );
};

const DialogueContainer = styled.div`
  position: absolute;
  z-index: 9999;
  background: #1e1e1e;
  color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
`;

export default KnobDialogue;
