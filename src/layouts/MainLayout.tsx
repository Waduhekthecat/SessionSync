import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TitleBar from '../components/ui/TitleBar';
import VisualDisplay from '../components/ui/VisualDisplay';
import UserPanel from '../components/user/UserPanel';
import VerticalDashboard from '../components/dashboard/VerticalDashboard';
import ControlBar from '../components/ui/SettingsController';
import TracksPanel from '../components/tracks/TracksPanel';
import ChatPanel from '../components/dashboard/ChatPanel';
import FooterBar from '../components/ui/Footer';

const MainLayout: React.FC = () => {
    return (
        <MainContainer>
            <TitleBar />
            <VisualDisplay />
            <UserPanel />
            <ControlBar />
            <TracksPanel />
            <ChatPanel />
            <VerticalDashboard />
            <FooterBar />
            <Outlet />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 50px 40.5% 50px 40.5% 50px;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    background-color: #3F3F3F;
`;

export default MainLayout;
