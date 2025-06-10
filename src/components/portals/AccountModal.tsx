import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ToggleSwitch from '../buttons/ToggleSwitch';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
  children?: ReactNode;
  title?: string;
}

const AccountSettingsModal: React.FC<Props> = ({ isOpen, onClose, name, email }) => {
  const [editableField, setEditableField] = useState<null | 'name' | 'email' | 'password'>(null);
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState('');

  const toggleEdit = (field: 'name' | 'email' | 'password') => {
    setEditableField((prev) => (prev === field ? null : field));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: 'name' | 'email' | 'password') => {
    if (e.key === 'Enter' && editableField === field) {
      toggleEdit(field);
    }
  };

  const handleSaveChanges = async () => {
    console.log(`User Information Updated. 
      Name: ${userName}
      Email: ${userEmail}
      Password: ${userPassword}
      `)
      onClose();
  };


  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Account Settings</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <Content>
          <Section>
            <Label>Name</Label>
            <InputRow>
              <Input
                type="text"
                placeholder={name}
                readOnly={editableField !== 'name'}
                $readOnly={editableField !== 'name'}
                value={name}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'name')}
              />
              <EditButton onClick={() => toggleEdit('name')}>
                {editableField === 'name' ? 'Save' : 'Edit'}
              </EditButton>
            </InputRow>
          </Section>

          <Section>
            <Label>Email</Label>
            <InputRow>
              <Input
                type="email"
                placeholder={email}
                readOnly={editableField !== 'email'}
                $readOnly={editableField !== 'email'}
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'email')}
              />
              <EditButton onClick={() => toggleEdit('email')}>
                {editableField === 'email' ? 'Save' : 'Edit'}
              </EditButton>
            </InputRow>
          </Section>

          <Section>
            <Label>Change Password</Label>
            <InputRow>
              <Input
                type="password"
                placeholder="••••••••"
                readOnly={editableField !== 'password'}
                $readOnly={editableField !== 'password'}
                onChange={(e) => setUserPassword(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'password')}
              />
              <EditButton onClick={() => toggleEdit('password')}>
                {editableField === 'password' ? 'Save' : 'Edit'}
              </EditButton>
            </InputRow>
          </Section>

          <Section>
            <Label>Enable Notifications</Label>
            <ToggleSwitch />
          </Section>

        <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
        </Content>
      </Dialog>
    </Overlay>,
    document.body
  );
};

export default AccountSettingsModal;

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
