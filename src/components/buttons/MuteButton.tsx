import React from 'react';
import styled from 'styled-components';

interface MuteButtonProps {
  onClick?: () => void;
  active?: boolean;
}

const MuteButton: React.FC<MuteButtonProps> = ({ onClick, active = false }) => {
  return (
    <StyledButton $active={active} onClick={onClick} onMouseDown={e => e.preventDefault()}>
      M
    </StyledButton>
  );
};

const StyledButton = styled.div<{ $active: boolean }>`
  width: 35px;
  height: 35px;
  background-color: #3F3F3F;
  color: ${({ $active }) => ($active ? 'red' : 'white')};
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

export default MuteButton;
