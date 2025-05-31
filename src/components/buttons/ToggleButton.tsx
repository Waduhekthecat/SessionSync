import React from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  color?: null | 'green' | 'red' | 'light-red';
  isDisabled: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active = false, onClick, color = null, isDisabled = false }) => {
  return (
    <StyledButton
      $active={active}
      $color={color}
      $disabled={isDisabled}
      onClick={onClick}
      onMouseDown={e => e.preventDefault()}
      type="button"
    >
      {label}
    </StyledButton>
  );
};

export default ToggleButton;

const StyledButton = styled.button<{ $active: boolean; $color: null | 'green' | 'red' | 'light-red'; $disabled?: boolean }>`
  width: 35px;
  height: 35px;
  cursor: ${({ $disabled }) => ($disabled ? 'none' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  background-color: #3f3f3f;
  color: ${({ $active, $color }) => {
    if (!$active) return 'white';
    switch ($color) {
      case 'green': return '#00ff00';
      case 'red': return '#ff4d4d';
      case 'light-red': return '#ff9999';
      default: return 'white';
    }
  }};
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none; 
  outline: none; 
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  user-select: none;

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? '#3f3f3f' : '#505050')};
  }

  &:focus {
    outline: none; 
    border: none;  
  }
`;
