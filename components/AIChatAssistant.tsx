import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Alex's AI Assistant. Ask me anything about Alex's skills, projects, or experience!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
       // Fallback handled in service, but just in case
       const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I encountered a glitch in the matrix. Please try again."
       };
       setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-surface border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary/10 p-4 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                <p className="text-xs text-green-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  msg.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-gray-700' : 'bg-primary/20'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-gray-300" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-surface border border-gray-700 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                 </div>
                 <div className="bg-surface border border-gray-700 p-3 rounded-2xl rounded-tl-none">
                   <div className="flex space-x-1.5">
                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                   </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-surface border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about my skills..."
                className="w-full bg-background border border-gray-600 text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-gray-500">Powered by Google Gemini</p>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-300 group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 text-white`}
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background"></span>
      </button>
    </div>
  );
};

export default AIChatAssistant;