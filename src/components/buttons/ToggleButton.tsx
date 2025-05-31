import React from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  color?: 'green' | 'red' | 'blue'; 
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active = false, onClick, color = 'blue'}) => {
  return (
    <StyledButton $active={active} $color={color} onClick={onClick} onMouseDown={e => e.preventDefault()}>
      {label}
    </StyledButton>
  );
};

export default ToggleButton;

const StyledButton = styled.div<{ $active: boolean; $color: 'green' | 'red' | 'blue' }>`
  width: 35px;
  height: 35px;
  background-color: #3F3F3F;
  color: ${({ $active, $color }) => {
    if (!$active) return 'white';
    switch ($color) {
      case 'green':
        return '#00FF00';
      case 'red':
        return '#FF4D4D';
      case 'blue':
        return '#00BFFF';
      default:
        return 'white';
    }
  }};
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

  &:hover {
    background-color: #505050;
  }
`;