import React from 'react';
import styled from 'styled-components';
import TitleBar from '../components/TitleBar';
import VisualDisplay from '../components/VisualDisplay';
import UserPanel from '../components/UserPanel';
import VerticalDashboard from '../components/VerticalDashboard';
import ControlBar from '../components/ControlBar';
import TrackPanel from '../components/TrackPanel';
import ActiveDashboardItem from '../components/ActiveDashboardItem';

const AppLayout: React.FC = () => {
    return (
        <Container>
            <Header>SessionSync</Header>
            <Display>Display</Display>
            <UPanel>UserPanel</UPanel>
            <CtrlBar>ControlBar</CtrlBar>
            <TPanel>TrackPanel</TPanel>
            <DashboardItem>DashboardItem</DashboardItem>
            <Dashboard>V DB</Dashboard>
        </Container>




    );
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 10% 40% 10% 40%;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    background-color: #3F3F3F;
`;



const Header = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 11;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const Display = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 6;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const UPanel = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 6;
    grid-column-end: 10;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const Dashboard = styled.div`
    grid-row-start: 2;
    grid-row-end: 11;
    grid-column-start: 10;
    grid-column-end: 11;
    border: 1px solid black;
    padding: 10px;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const CtrlBar = styled.div`
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 10;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const TPanel = styled.div`
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 6;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;

const DashboardItem = styled.div`
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 6;
    grid-column-end: 10;
    border: 1px solid black;
    font-size: 30px;
    text-align: center;
    color: white;
`;


export default AppLayout;
