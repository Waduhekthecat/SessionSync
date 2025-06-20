import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LobbyBg from '../../assets/images/LobbyBg.png';
import CreateRoomModal from '../../components/portals/CreateSessionModal';
import PasswordModal from '../../components/portals/SessionPasswordModal';

const LoungeView: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [promptOpen, setPromptOpen] = useState(false);
    const [selectedSession, setSelectedSession] = useState<any>(null);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleJoinSession = (session: any) => {
        if (session.hasPassword) {
            setSelectedSession(session);
            setPromptOpen(true);
        } else {
            navigate(`/session/${session.id}`);
        }
    };

    const handlePasswordSubmit = (password: string) => {
        // TODO: Replace this mock check with real backend validation
        const correctPassword = "test"; // This should come from server

        if (password === correctPassword) {
            navigate(`/session/${selectedSession.id}`);
        } else {
            alert("Incorrect password.");
        }
        setPromptOpen(false);
        setSelectedSession(null);
    };

    // Mock session list
    const sessions = [
        { id: 'abc123', name: 'Evening Chill', location: 'Chicago, IL', userCount: 3, hasPassword: true },
        { id: 'xyz789', name: 'Morning Groove', location: 'Austin, TX', userCount: 2, hasPassword: false }
    ];

    return (
      <>
        <Background>
            <SessionContainer>
                <Title>🎵 Open Jam Sessions</Title>
                <SessionList>
                    {sessions.length === 0 ? (
                        <EmptyMessage>No sessions available yet.</EmptyMessage>
                    ) : (
                        sessions.map(session => (
                            <SessionCard key={session.id}>
                                <SessionInfo>
                                    <SessionName>{session.name}</SessionName>
                                    <SessionMeta>
                                        <span>{session.location}</span>
                                        <span>{session.userCount} musicians</span>
                                    </SessionMeta>
                                </SessionInfo>
                                <JoinButton onClick={() => handleJoinSession(session)}>Join</JoinButton>
                            </SessionCard>
                        ))
                    )}
                </SessionList>
                <CreateButton onClick={handleOpenModal}>Create Session</CreateButton>
            </SessionContainer>
        </Background>
        <CreateRoomModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          location="Houston, TX"
        />
        <PasswordModal 
          isOpen={promptOpen}
          onClose={() => setPromptOpen(false)}
          onSubmit={handlePasswordSubmit}
          sessionName={selectedSession?.name || ""}
        />
        </>
    );
};

export default LoungeView;

// Keep below LoungeView or put into a separate LoungeStyles.ts

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${LobbyBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SessionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 800px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SessionList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmptyMessage = styled.p`
  color: #bbb;
  text-align: center;
  margin-top: 2rem;
`;

const SessionCard = styled.div`
  background-color: #1f1f1f;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const SessionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SessionName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const SessionMeta = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  display: flex;
  gap: 1.5rem;
`;

const JoinButton = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #16a34a;
  }
`;

const CreateButton = styled(JoinButton)`
  align-self: flex-end;
  margin-top: 2rem;
`;
