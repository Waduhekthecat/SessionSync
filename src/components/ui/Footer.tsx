import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <FooterContainer>
    </FooterContainer>
};

const FooterContainer = styled.div`
    grid-area: 5 / 1 / 6 / 11;
    height: 100%;
    width: 100%;
    background-color: #1C1C1C;
`;

export default Footer;
