import React from 'react';
import styled from 'styled-components';
import AccountMenu from '../buttons/AccountMenuButton';

const TitleBar: React.FC = () => {

  return (
    <TitleBarContainer>
      <Title>SessionSync</Title>
      <IconWrapper>
        <AccountMenu />
      </IconWrapper>
    </TitleBarContainer>
  );
};

export default TitleBar;

const TitleBarContainer = styled.div`
  grid-area: 1 / 1 / 2 / 11;
  width: 100%;
  height: 50px;
  background-color:rgb(43, 43, 43);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
`;
