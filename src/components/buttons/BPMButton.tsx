import React from 'react';
import styled from 'styled-components';

interface BPMProps {
  label: string;
  width: number;
  height: number;
  placeholder: string;
}

const BPMButton: React.FC<BPMProps> = ({ label, width, height, placeholder }) => {
  return (
    <ButtonContainer width={width} height={height}>
      <Label>{label}</Label>
      <NumberInput type="number" placeholder={placeholder} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Pick<BPMProps, 'width' | 'height'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
  }
`;


const Label = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

const NumberInput = styled.input`
  margin-top: 0.5rem;
  width: 3.5rem;
  text-align: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: none;
  color: black;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #93c5fd; /* blue-300 */
  }
`;


export default BPMButton;
