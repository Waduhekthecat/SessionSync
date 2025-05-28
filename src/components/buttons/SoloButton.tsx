import React from 'react';
import styled from 'styled-components';

interface SoloButtonProps {
  onClick?: () => void;
  active?: boolean;
}

const SoloButton: React.FC<SoloButtonProps> = ({ onClick, active = false }) => {
  return (
    <StyledButton onClick={onClick} $active={active} onMouseDown={e => e.preventDefault()}>
      S
    </StyledButton>
  );
};

const StyledButton = styled.div<{ $active: boolean }>`
  width: 35px;
  height: 35px;
  background-color: #3F3F3F;   /* Always the same background */
  color: ${({ $active }) => ($active ? '#00FF00' : 'white')};  /* Green when active, white otherwise */
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default SoloButton;
