import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface VolumeKnobProps {
  minAngle: number;
  maxAngle: number;
  label: string;
}

const KNOB_SIZE = 35; // base diameter in px
const INNER_SIZE = 29; // inner circle diameter
const BORDER_COLOR = '#D7D7D7';
const INNER_COLOR = '#484848';
const BASE_COLOR = '#000000';

const VolumeKnob: React.FC<VolumeKnobProps> = ({ minAngle, maxAngle, label}) => {
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(0);
  const knobRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  const clampAngle = (deg: number) => Math.min(maxAngle, Math.max(minAngle, deg));

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current || !knobRef.current) return;

    const rect = knobRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = centerY - e.clientY; 
    let newAngle = Math.atan2(dx, dy) * (180 / Math.PI);

    newAngle = clampAngle(newAngle);
    setAngle(newAngle);
  };

  const onMouseUp = () => {
    dragging.current = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const pointerLength = INNER_SIZE / 2;

  const pointerX = pointerLength * Math.sin(degToRad(angle));
  const pointerY = -pointerLength * Math.cos(degToRad(angle));

  const angleToDb = (angle: number) => {
    if (angle < 0) {
      const ratio = (angle + 135) / 135;
      const db = -135 + ratio * 135;
      return db.toFixed(2) + ' dB';
    } else {
      const ratio = angle / 135;
      const db = ratio * 12;
      return '+' + db.toFixed(2) + ' dB';
    }
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAngle(0); 
  };

  return (
    <KnobWrapper>
      <KnobContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onDoubleClick={onDoubleClick}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        ref={knobRef}
        onMouseDown={onMouseDown}
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
        {(hovered || dragging.current) && (
          <Tooltip>
            {angleToDb(angle)}
          </Tooltip>
        )}
      </KnobContainer>
      <KnobLabel>VOL</KnobLabel>
    </KnobWrapper>
  );
};

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -8px);
  background-color: #222;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
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
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  cursor: pointer;
  user-select: none;
`;

const BaseCircle = styled.div`
  position: absolute;
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  background-color: ${BASE_COLOR};
  border-radius: 50%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: ${INNER_SIZE}px;
  height: ${INNER_SIZE}px;
  background-color: ${INNER_COLOR};
  border-radius: 50%;
  top: ${(KNOB_SIZE - INNER_SIZE) / 2}px;
  left: ${(KNOB_SIZE - INNER_SIZE) / 2}px;
  z-index: 1;
`;

const BorderCircle = styled.div`
  position: absolute;
  width: ${INNER_SIZE}px;
  height: ${INNER_SIZE}px;
  border: 1.5px solid ${BORDER_COLOR};
  border-radius: 50%;
  top: ${(KNOB_SIZE - INNER_SIZE) / 2}px;
  left: ${(KNOB_SIZE - INNER_SIZE) / 2}px;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  pointer-events: none; /* So clicks pass through to container */
`;

const Pointer = styled.div`
  position: absolute;
  width: 2px;
  height: ${INNER_SIZE / 2}px;
  background-color: #fff;
  top: ${KNOB_SIZE / 2 - INNER_SIZE / 2}px; // center Y based on inner circle
  left: ${KNOB_SIZE / 2 - 1}px; // center X
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

export default VolumeKnob;
