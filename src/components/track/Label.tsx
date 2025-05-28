import React from 'react';
import styled from 'styled-components';

const Label: React.FC = () => {
  return <LabelContainer>
    </LabelContainer>
};

const LabelContainer = styled.div`
  height: 37px;
  width: 150px;
  color: #FFFFFF;
  font-weight: bold;
  background-color: #121212;
  border-radius: 6px;
  margin-left: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

`;

export default Label;
