import React, { useState } from 'react';
import styled from 'styled-components';

interface LabelProps {
  name: string;
}

const UserLabel: React.FC<LabelProps> = ({ name }) => {

  return (
    <LabelContainer>
      <StyledName> {name} </StyledName>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  height: 35px;
  width: 100px;
  background-color: #121212;
  border-radius: 6px;
  margin-left: 5px;
  border: 1px solid #444;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const StyledName = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export default UserLabel;
