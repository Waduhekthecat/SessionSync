import React from 'react';
import styled from 'styled-components';

const UserPanel: React.FC = () => {
  return <UsersContainer>
    </UsersContainer>;
};

const UsersContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1C1C1C;
  border-right: 120px solid #3F3F3F;
`;

export default UserPanel;
