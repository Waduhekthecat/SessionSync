import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TitleBar from '../components/ui/TitleBar';
import VisualDisplay from '../components/ui/VisualDisplay';
import UserPanel from '../components/user/UserPanel';
import Dashboard from '../components/dashboard/Sidebar';
import ControlBar from '../components/ui/SettingsController';
import TracksPanel from '../components/tracks/TracksPanel';
import ChatPanel from '../components/dashboard/ChatPanel';
import FooterBar from '../components/ui/Footer';

const SessionLayout: React.FC = () => {
    const { sessionId } = useParams<{ sessionId: string }>();
    return (
        <MainContainer>
            <TitleBar />
            <VisualDisplay />
            <UserPanel />
            <ControlBar />
            <TracksPanel />
            <ChatPanel />
            <Dashboard />
            <FooterBar />
            <Outlet />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 50px 40.5% 50px 40.5% 1fr;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 4% 6%;
    background-color: #3F3F3F;
`;

export default SessionLayout;
