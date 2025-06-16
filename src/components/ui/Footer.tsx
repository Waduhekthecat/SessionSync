import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <FooterContainer>
    </FooterContainer>
};

const FooterContainer = styled.div`
    grid-area: 5 / 1 / 6 / 12;
    max-height: 100%;
    max-width: 100%;
    background-color:rgb(24, 24, 24);
`;

export default Footer;
