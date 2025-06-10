import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
  sessionName: string;
}

const PasswordPromptModal: React.FC<Props> = ({ isOpen, onClose, onSubmit, sessionName }) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Enter password for "{sessionName}"</h3>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <ButtonRow>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSubmit(password)}>Join</button>
        </ButtonRow>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PasswordPromptModal;

// Styling
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: gray;
  padding: 2rem;
  border-radius: 0.15rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 0.5rem 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  button:last-child {
    background-color: #22c55e;
    color: white;
  }
`;
