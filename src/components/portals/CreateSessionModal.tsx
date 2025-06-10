import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  location: string;
  children?: ReactNode;
  title?: string;
}

const CreateSessionModal: React.FC<Props> = ({ isOpen, onClose, location }) => {
    const navigate = useNavigate();
    const [sessionName, setSessionName] = useState('');
    const [sessionPassword, setSessionPassword] = useState('');

    const handleCreateRoom = async () => {
        const newSessionId = uuidv4();  
        console.log(`New Session Created.
            Session ID: ${newSessionId}
            Room Name: ${sessionName}
            Location: ${location}
            Password: ${sessionPassword}
            `)
        onClose();
        navigate(`/session/${newSessionId}`);
    };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>New Session</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <Content>
          <Section>
            <Label>Room Name</Label>
            <InputRow>
              <Input
                type="text"
                placeholder={sessionName}
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
              />
            </InputRow>
          </Section>

          <Section>
            <Label>Location</Label>
            <InputRow>
              <Input
                type="text"
                placeholder={location}
                value={location}
                disabled={true}
              />
            </InputRow>
          </Section>

          <Section>
            <Label>Password</Label>
            <InputRow>
              <Input
                type="text"
                placeholder="*******"
                value={sessionPassword}
                onChange={(e) => setSessionPassword(e.target.value)}
              />
            </InputRow>
          </Section>

        <SaveButton onClick={handleCreateRoom}>Create Room</SaveButton>
        </Content>
      </Dialog>
    </Overlay>,
    document.body
  );
};

export default CreateSessionModal;

// Styled Components remain unchanged except Input:
const Input = styled.input<{ $readOnly?: boolean }>`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid ${({ $readOnly }) => ($readOnly ? '#666' : '#ccc')};
  border-radius: 8px;
  font-size: 14px;
  background-color: ${({ $readOnly }) => ($readOnly ? '#333' : '#fff')};
  color: ${({ $readOnly }) => ($readOnly ? '#bbb' : '#000')};
  pointer-events: ${({ $readOnly }) => ($readOnly ? 'none' : 'auto')};
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Dialog = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 24px;
  width: 300px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const EditButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #777;
  }
`;

const SaveButton = styled.button`
  margin-top: 12px;
  width: 100%;
  padding: 12px;
  background-color: #3f51b5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
