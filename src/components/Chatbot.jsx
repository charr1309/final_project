import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I\'m here to help you with your postcard needs. What can I assist you with today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Real Estate Postcards',
    'Custom Design',
    'Pricing Information',
    'Mailing Services',
    'Business Cards',
    'Get a Quote'
  ];

  const botResponses = {
    'real estate': 'Great! Our Real Estate postcards start at just $75 for 100 postcards, all costs included. Would you like to know more about our real estate services?',
    'custom': 'We offer custom postcard design with 90 minutes of FREE graphic design included! Our team can create professional designs tailored to your business.',
    'pricing': 'Our pricing varies by service: Real Estate postcards from $75/100, Business cards $175/2500, Custom postcards vary by quantity. Would you like specific pricing for a service?',
    'mailing': 'Our mailing services include list management, addressing, CASS certification, and delivery to bulk mail. Pricing starts at $0.34 per piece for quantities over 2,000.',
    'business cards': 'Get 2,500 full-color business cards for only $175! This includes 30 minutes of FREE graphic design and full-color printing on both sides.',
    'quote': 'I\'d be happy to help you get a quote! What type of postcards or services are you interested in? You can also call us at 404.849.6139 for immediate assistance.',
    'default': 'I\'d be happy to help! You can ask me about our services, pricing, or contact information. For immediate assistance, please call 404.849.6139 or email info@mrpostcard.com.'
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('real estate') || message.includes('house') || message.includes('property')) {
      return botResponses['real estate'];
    } else if (message.includes('custom') || message.includes('design')) {
      return botResponses['custom'];
    } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return botResponses['pricing'];
    } else if (message.includes('mail') || message.includes('shipping') || message.includes('delivery')) {
      return botResponses['mailing'];
    } else if (message.includes('business card')) {
      return botResponses['business cards'];
    } else if (message.includes('quote') || message.includes('estimate')) {
      return botResponses['quote'];
    } else {
      return botResponses['default'];
    }
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(text),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </div>

      {/* Chat Window */}
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">🤖</div>
          <div className="chat-info">
            <h4>Mr. Postcard Assistant</h4>
            <span className="chat-status">Online</span>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-replies">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              className="quick-reply"
              onClick={() => handleSendMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={() => handleSendMessage()}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;