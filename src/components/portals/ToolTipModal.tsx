import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ToolTipProps {
  top: number;
  left: number;
  children: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ top, left, children }) => {
  const tooltipRoot = document.getElementById('tooltip-root');
  if (!tooltipRoot) return null;

  return ReactDOM.createPortal(
    <TooltipWrapper top={top} left={left}>{children}</TooltipWrapper>,
    tooltipRoot
  );
};

export default ToolTip;

const TooltipWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 9999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;