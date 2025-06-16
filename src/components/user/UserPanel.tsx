import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import User from '../user/User';

interface UserData {
  id: string;
  name: string;
}

const UserPanel: React.FC = () => {
const [joined, setJoined] = useState(false);
const [users, setUsers] = useState<UserData[]>([]);
  

  const addUser = () => {
    const newUser: UserData = {
        id: crypto.randomUUID(),
        name: `Josh`,
      };
      setUsers((prev) => [...prev, newUser]);
      setJoined(true);
  };

  return (
    <UsersContainer>
    {users.map((user, index) => (
      <React.Fragment key={user.id}>
        <User id={user.id} name={user.name} />
        {index !== 4 && <Divider />}
      </React.Fragment>
    ))}
    {!joined && (
        <JoinRoomButton onClick={addUser}>+ Join Room</JoinRoomButton>
      )}
    </UsersContainer>
    );
};

const UsersContainer = styled.div`
  grid-area: 2 / 6 / 3 / 11;
  height: 100%;
  width: 100%;
  background-color: #1C1C1C;
  text-align: center;
  flex-direction: column;
`;

const JoinRoomButton = styled.div`
  color:rgb(61, 187, 255);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  opacity: 70%;
  display: inline-block;
  padding: 12px;        
  width: auto;            
  &:hover {
    text-decoration: underline;
    opacity: 90%;
    transform: scale(1.1);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: #636363;
`;



export default UserPanel;
