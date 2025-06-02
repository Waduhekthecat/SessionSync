import React from 'react';
import styled from 'styled-components';

interface MetronomeProps {
  label: string;
  width: number;
  height: number;
}

const MetronomeButton: React.FC<MetronomeProps> = ({ label, width, height }) => {
  return (
    <ButtonContainer width={width} height={height}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Pick<MetronomeProps, 'width' | 'height'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #444;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 0 16px;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: #3dbbff;
    background-color: #2a2a2a;
  }

  &:focus {
    outline: none;
    border-color: #3dbbff;
  }
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export default MetronomeButton;
