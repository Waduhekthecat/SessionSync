import React from 'react';
import styled from 'styled-components';

const UserPanel: React.FC = () => {
  return <UsersContainer>
    </UsersContainer>
};

const UsersContainer = styled.div`
  grid-area: 2 / 6 / 3 / 10;
  height: 100%;
  width: 100%;
  background-color: #1C1C1C;
`;

export default UserPanel;
