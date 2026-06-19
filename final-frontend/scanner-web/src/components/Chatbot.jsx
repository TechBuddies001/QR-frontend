import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MessageSquare, X, Send, Bot, User, Minimize2, Loader } from 'lucide-react';
import api from '../lib/api';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 25px rgba(201, 168, 76, 0.4);
  }
`;

const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: bottom right;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  @media (max-width: 480px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    margin-bottom: 0;
  }
`;

const ChatHeader = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    
    .status-dot {
      width: 10px;
      height: 10px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 10px #4ade80;
    }
  }

  .actions button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MessageBubble = styled.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 15px;
  font-size: 0.95rem;
  line-height: 1.5;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  
  &.user {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    
    svg {
      display: none;
    }
  }
  
  &.bot {
    background: white;
    color: #334155;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    border: 1px solid #f1f5f9;
  }

  .icon {
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const InputArea = styled.form`
  display: flex;
  padding: 15px;
  background: white;
  border-top: 1px solid #f1f5f9;
  gap: 10px;

  input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    outline: none;
    font-size: 0.95rem;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.gold};
    }
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.navy};
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;
    
    &:hover {
      background: #1a365d;
    }
    
    &:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
  }
`;

const QuickReplies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  
  button {
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: ${({ theme }) => theme.colors.gold};
    }
  }
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! Welcome to V-Kawach. How can I help you secure your valuables today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e, textOverride = null) => {
    if (e) e.preventDefault();
    const messageText = textOverride || input;
    if (!messageText.trim()) return;

    const userMessage = { role: 'user', content: messageText };
    const chatHistory = [...messages, userMessage];
    setMessages(chatHistory);
    setInput('');
    setIsLoading(true);

    try {
      const historyToSent = chatHistory.slice(-5);
      const res = await api.post('/chatbot/message', {
        message: messageText,
        history: historyToSent
      });

      setMessages(prev => [...prev, { role: 'bot', content: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'bot', content: "I'm sorry, I am having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <div className="title">
              <Bot size={22} color="#C9A84C" />
              V-Kawach Assistant
              <div className="status-dot" />
            </div>
            <div className="actions">
              <button onClick={() => setIsOpen(false)}>
                <Minimize2 size={18} />
              </button>
            </div>
          </ChatHeader>
          
          <MessagesArea>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} className={msg.role}>
                {msg.role === 'bot' && (
                  <div className="icon">
                    <Bot size={14} />
                  </div>
                )}
                <div>{msg.content}</div>
              </MessageBubble>
            ))}
            
            {messages.length === 1 && (
              <QuickReplies>
                <button onClick={() => handleSubmit(null, "I want to buy a QR Tag")}>Buy QR Tag</button>
                <button onClick={() => handleSubmit(null, "How does Call Masking work?")}>Call Masking Info</button>
                <button onClick={() => handleSubmit(null, "Talk to support")}>Support</button>
              </QuickReplies>
            )}

            {isLoading && (
              <MessageBubble className="bot">
                <div className="icon"><Bot size={14} /></div>
                <div><Loader size={16} className="fa-spin" style={{ animation: 'spin 1s linear infinite' }} /> Typing...</div>
              </MessageBubble>
            )}
            <div ref={messagesEndRef} />
          </MessagesArea>

          <InputArea onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <Send size={18} />
            </button>
          </InputArea>
        </ChatWindow>
      )}

      {!isOpen && (
        <ChatButton onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
        </ChatButton>
      )}
    </ChatContainer>
  );
}
