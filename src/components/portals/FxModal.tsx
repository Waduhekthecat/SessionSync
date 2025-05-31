import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const FxModal = ({ isOpen, onClose, children, title }: ModalDialogProps) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onEsc);
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Dialog onClick={e => e.stopPropagation()}>
        {title && <Title>{title}</Title>}
        {children}
        <CloseButton onClick={onClose}>×</CloseButton>
      </Dialog>
    </Overlay>,
    document.body
  );
};

export default FxModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Dialog = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 24px;
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  color: white;
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
