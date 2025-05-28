import React from 'react';
import styled from 'styled-components';
import TitleBar from '../components/ui/TitleBar';
import VisualDisplay from '../components/ui/VisualDisplay';
import UserPanel from '../components/ui/UserPanel';
import VerticalDashboard from '../components/ui/VerticalDashboard';
import ControlBar from '../components/ui/ControlBar';
import TracksPanel from '../components/ui/TracksPanel';
import ActiveDashboardItem from '../components/ui/ActiveDashboardItem';
import FooterBar from '../components/ui/Footer';
// import Track from '../components/track/Track';

const AppLayout: React.FC = () => {
    return (
        <Container>
            <TitleBar />
            <VisualDisplay />
            <UserPanel />
            <ControlBar />
            <TracksPanel />
            <ActiveDashboardItem />
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
