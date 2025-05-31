import React from 'react';
import styled from 'styled-components';
import TitleBar from '../components/ui/TitleBar';
import VisualDisplay from '../components/ui/VisualDisplay';
import UserPanel from '../components/user/UserPanel';
import VerticalDashboard from '../components/dasboard/VerticalDashboard';
import ControlBar from '../components/ui/ControlBar';
import TracksPanel from '../components/tracks/TracksPanel';
import ChatPanel from '../components/dasboard/ChatPanel';
import FooterBar from '../components/ui/Footer';

const AppLayout: React.FC = () => {
    return (
        <Container>
            <TitleBar />
            <VisualDisplay />
            <UserPanel />
            <ControlBar />
            <TracksPanel />
            <ChatPanel />
            <VerticalDashboard />
            <FooterBar />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 50px 40.5% 50px 40.5% 50px;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    background-color: #3F3F3F;
`;

export default AppLayout;
