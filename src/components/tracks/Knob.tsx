import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ToolTipPortal from '../portals/ToolTipModal';

interface KnobProps {
  minAngle: number;
  maxAngle: number;
  label: string;
  format: (angle: number) => string;
}

const knobSize = 35;
const innerSize = 29;
const borderColor = '#D7D7D7';
const innerColor = '#484848';
const baseColor = '#000000';

const Knob: React.FC<KnobProps> = ({ minAngle, maxAngle, label, format }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [angle, setAngle] = useState(0);

  const knobRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const dragging = useRef(false);

  const degToRad = (deg: number) => (deg * Math.PI) / 180;
  const clampAngle = (deg: number) => Math.min(maxAngle, Math.max(minAngle, deg));

  const onMouseMove = (e: MouseEvent) => {
  if (!dragging.current || startY.current === null) return;

  const deltaY = e.clientY - startY.current;
  const sensitivity = 0.5;

  setAngle(prevAngle => {
    const newAngle = clampAngle(prevAngle - deltaY * sensitivity);
    startY.current = e.clientY; 
    return newAngle;
  });
};

  const onMouseUp = () => {
    dragging.current = false;
    startY.current = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    startY.current = e.clientY;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAngle(0);
  };

  return (
    <KnobWrapper>
      <KnobContainer
        ref={knobRef}
        onMouseDown={onMouseDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDoubleClick={onDoubleClick}
        role="slider"
        aria-valuemin={minAngle}
        aria-valuemax={maxAngle}
        aria-valuenow={angle}
        tabIndex={0}
      >
        <BaseCircle />
        <InnerCircle />
        <BorderCircle />
        <Pointer style={{ transform: `rotate(${angle}deg)` }} />
       {(isHovered || dragging.current) && knobRef.current && (() => {
        const rect = knobRef.current.getBoundingClientRect();
        const top = rect.top - 25;
        const left = rect.left + rect.width / 2;
        return <ToolTipPortal top={top} left={left}>{format(angle)}</ ToolTipPortal>;
      })()}

      </KnobContainer>
      <KnobLabel>{label}</KnobLabel>
    </KnobWrapper>
  );
};

export default Knob;

const ToolTip = styled.div`
  position: absolute;
  top: -25px; 
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: rgba(0,0,0,0.75);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

const KnobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KnobContainer = styled.div`
  position: relative;
  width: ${knobSize}px;
  height: ${knobSize}px;
  cursor: pointer;
  user-select: none;
`;

const BaseCircle = styled.div`
  position: absolute;
  width: ${knobSize}px;
  height: ${knobSize}px;
  background-color: ${baseColor};
  border-radius: 50%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: ${innerSize}px;
  height: ${innerSize}px;
  background-color: ${innerColor};
  border-radius: 50%;
  top: ${(knobSize - innerSize) / 2}px;
  left: ${(knobSize - innerSize) / 2}px;
  z-index: 1;
`;

const BorderCircle = styled.div`
  position: absolute;
  width: ${innerSize}px;
  height: ${innerSize}px;
  border: 1.5px solid ${borderColor};
  border-radius: 50%;
  top: ${(knobSize - innerSize) / 2}px;
  left: ${(knobSize - innerSize) / 2}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  z-index: 2;
  pointer-events: none; 
`;

const Pointer = styled.div`
  position: absolute;
  width: 2px;
  height: ${innerSize / 2}px;
  background-color: #fff;
  top: ${knobSize / 2 - innerSize / 2}px; // center Y based on inner circle
  left: ${knobSize / 2 - 1}px; // center X
  transform-origin: bottom center; // rotate from bottom
  z-index: 3;
  pointer-events: none;
`;

const KnobLabel = styled.div`
  margin-top: -3px;
  font-weight: bold;
  color: #ffffff;
  font-size: 12px;
  user-select: none;
`;
