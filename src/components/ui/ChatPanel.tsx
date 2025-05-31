import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, input]);
    setInput('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      handleSend();
    }
  };

  return (
    <Container>
      <Messages>
        {messages.map((msg, i) => (
          <Message key={i}>{msg}</Message>
        ))}
        <div ref={messagesEndRef} />
      </Messages>
      <InputArea>
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputArea>
    </Container>
  );
};

export default ChatPanel;

const Container = styled.div`
    grid-area: 4 / 6 / 5 / 10;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid #444;
    background-color: #1e1e1e;
`;

const Messages = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 5px;
`;

const Message = styled.div`
  color: white;
  margin-bottom: 1px;
  background-color: rgb(5, 5, 5);
  padding: 6px 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap; 
  max-width: 100%;
`;


const InputArea = styled.div`
    display: flex;
    gap: 6px;
    padding: 7px;
`;

const ChatInput = styled.input`
    flex: 1;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: #333;
    color: white;
    min-width: 0; 
    overflow: hidden;
`;


const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
