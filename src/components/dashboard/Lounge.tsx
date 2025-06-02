import React from 'react';
import styled from 'styled-components';

const Lounge: React.FC = () => {
  return (
    <LoungeContainer>
    </LoungeContainer>
  )
};

export default Lounge;

const LoungeContainer = styled.div`
    grid-area: 4 / 6 / 5 / 10;
    height: 100%;
    width: 100%;
    background-color: #121212;
`;