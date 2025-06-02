import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const AuthLayout: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'joshuajdarby@gmail.com' && password === 'Flakker12.') {
            login();
            navigate('/session', { replace: true });
        } else 
            setError('Invalid login credentials');
    };

    return (
    <Wrapper>
        <Waveform />
        <LoginCard>
        <Title>🎧 SessionSync: JamRoom </Title>
        <Subtitle>Login to your session</Subtitle>
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
            <LoginButton type="submit" onClick={handleLogin}>Log In</LoginButton>
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
    background: linear-gradient(135deg, #0f0f0f, #1c1c1e, #0d0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const LoginCard = styled.div`
    background: #1e1e1e;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
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
    color: #aaa;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: #2a2a2a;
    color: white;
    font-size: 1rem;

    &:focus {
        outline: 2px solid #007bff;
    }
`;

const LoginButton = styled.button`
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
        background-color: #199cff;
    }

    &:active {
        transform: scale(0.95);
    }
`;

// Optional musical animation
const pulse = keyframes`
    0% { height: 20%; }
    50% { height: 100%; }
    100% { height: 20%; }
`;

const Waveform = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    z-index: 1;
    opacity: 0.1;

    &::before,
    &::after,
    div {
    content: '';
    display: block;
    width: 4px;
    background: #00ffff;
    animation: ${pulse} 1s ease-in-out infinite;
    }

    & > div:nth-child(1) { animation-delay: 0s; }
    & > div:nth-child(2) { animation-delay: 0.1s; }
    & > div:nth-child(3) { animation-delay: 0.2s; }
    & > div:nth-child(4) { animation-delay: 0.3s; }
    & > div:nth-child(5) { animation-delay: 0.4s; }
    & > div:nth-child(6) { animation-delay: 0.5s; }
`;

Waveform.defaultProps = {
    children: Array(6).fill(<div />),
};