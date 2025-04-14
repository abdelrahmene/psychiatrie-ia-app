import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperclip, FaMicrophone, FaSpinner } from 'react-icons/fa';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
  isTyping?: boolean;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Bonjour ! Je suis votre assistant IA en psychiatrie. Comment puis-je vous aider aujourd'hui ?",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAIResponding, setIsAIResponding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsAIResponding(true);

    // Simulation de la réponse de l'IA
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        content: "Je vais analyser cela...", // À remplacer par la vraie réponse de l'IA
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsAIResponding(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-8">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm h-full">
        {/* En-tête */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaRobot size={24} className="text-blue-500" />
              <h1 className="text-xl font-bold">Assistant IA</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700">
                <FaPaperclip size={16} />
              </button>
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700">
                <FaMicrophone size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Zone de conversation */}
        <div className="h-[calc(100vh-200px)] overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.content}
                  <div className="text-xs mt-1 text-right">
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            {isAIResponding && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-3 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <FaSpinner className="animate-spin" size={16} />
                  En train de répondre...
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de saisie */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1 bg-gray-100 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" size={16} />
              ) : (
                <span>Envoyer</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;