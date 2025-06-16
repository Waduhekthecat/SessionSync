import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import MetronomeIcon from '@mui/icons-material/AccessTime';
import TracksIcon from '@mui/icons-material/QueueMusic';
import PianoIcon from '@mui/icons-material/Piano';
import ExtensionIcon from '@mui/icons-material/Extension';
import CollaboratorsIcon from '@mui/icons-material/Group';

const Sidebar = () => {
  const features = [
    { icon: <HomeIcon />, label: 'Home' },
    { icon: <ChatIcon />, label: 'Chat' },
    { icon: <MetronomeIcon />, label: 'Metronome' },
    { icon: <TracksIcon />, label: 'Tracks' },
    { icon: <PianoIcon />, label: 'Instruments' },
    { icon: <ExtensionIcon />, label: 'Plugins' },
    { icon: <CollaboratorsIcon />, label: 'Collaborators' },
    { icon: <SettingsIcon />, label: 'Settings' },
  ];

  return (
    <Container>
      {features.map((item, idx) => (
        <IconButton key={idx} title={item.label}>
          {item.icon}
        </IconButton>
      ))}
    </Container>
  );
};

const Container = styled.div`
  grid-area: 2 / 11 / 5 / 12;
  width: 100%;
  height: calc(100%);              
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #1a1a1a, #0f0f0f);
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  
  &:hover {
    color: rgb(61, 187, 255);
    transform: scale(1.15);
  }

  svg {
    font-size: 23px;
  }

  &:focus {
    outline: none;
  }
`;

export default Sidebar;
