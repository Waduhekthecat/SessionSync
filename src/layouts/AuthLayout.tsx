import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AuthBg from '../assets/images/AuthBg.png';

// ✅ GLOBAL audio instance
let audioInstance: HTMLAudioElement | null = null;

export const getAudioInstance = () => {
  if (!audioInstance) {
    audioInstance = new Audio('/AuthMusic.mp3');
    audioInstance.loop = true;
    audioInstance.volume = 0.7;
  }
  return audioInstance;
};

const AuthLayout: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ✅ Play music once when AuthLayout mounts
  useEffect(() => {
    const audio = getAudioInstance();

    // Try to play, will work in Tauri or fail silently in browsers
    audio.play().catch(() => {
      // Silently fail if gesture required (browser only)
    });

    return () => {
      // Optionally pause if you want to stop music on unmount
      // audio.pause();
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'joshuajdarby@gmail.com' && password === 'Flakker12.') {
      signIn();

      // ✅ Stop the music
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
        audioInstance = null;
      }

      navigate('/session', { replace: true });
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <Wrapper>
      <Waveform>
        {Array.from({ length: 32 }).map((_, i) => (
          <Bar key={i} delay={i * 0.1} />
        ))}
      </Waveform>

      <LoginCard>
        <Title>🎧 SessionSync: JamRoom</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">Sign In</LoginButton>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Form>
      </LoginCard>

      <Outlet />
    </Wrapper>
  );
};

export default AuthLayout;


const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: 
        linear-gradient(135deg, rgba(15, 15, 15, 0.5), rgba(28, 28, 30, 0.2), rgba(13, 13, 13, 0.6)),
        url(${AuthBg}) no-repeat center center / cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const LoginCard = styled.div`
    margin-top: 60px;
    background: rgba(255, 255, 255, 0); 
    backdrop-filter: blur(5px);
    padding: 40px;
    border-radius: 12px;
    z-index: 2;
    min-width: 300px;
    max-width: 400px;
    width: 90%;
    text-align: center;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    margin-bottom: 8px;
    font-weight: 600;
`;

const Subtitle = styled.p`
    color: rgb(11, 255, 137);
    margin-bottom: 24px;
    font-weight: 800;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 5px;
    border: none;
    background-color:rgb(255, 255, 255);
    color: black;
    font-size: 1rem;

    &:focus {
        outline: 2px solid #007bff;
    }
`;

const LoginButton = styled.button`
    padding: 12px;
    border-radius: 5px;
    border: none;
    background-color:rgb(255, 148, 86);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
        background-color: rgb(255, 193, 86);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const pulse = keyframes`
  0% {
    height: 0%;
    opacity: 1;
  }
  50% {
    height: 100%;
    opacity: 1;
  }
  100% {
    height: 0%;
    opacity: 1;
  }
`;

const Bar = styled.div<{ delay: number }>`
    width: 2px;
    height: 0px;
    background:rgb(255, 255, 1);
    opacity: 0.6; 
    animation: ${pulse} 1s ease-in-out infinite;
    animation-delay: ${({ delay }) => delay}s;
`;

const Waveform = styled.div`
  position: absolute;
  bottom: 40px; /* slightly above edge */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  height: 60px; /* important! */
  z-index: 1;
  opacity: 0.9;
`;



