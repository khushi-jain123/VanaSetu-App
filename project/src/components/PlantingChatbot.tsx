import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 🌱 Welcome to the Tree Plantation Chatbot. How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const API_KEY = 'AIzaSyDewPyg_GnOkgBxbXx-E8etWg4TQ-HlXpo'; // Replace with your actual API key

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      const userMessage = { sender: 'user', text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const botReply = await getBotReply(userInput);
      const botMessage = { sender: 'bot', text: botReply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setUserInput('');
    }
  };

  // Get bot's response from Google AI Studio API
  const getBotReply = async (input) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [{ role: 'user', parts: [{ text: input }] }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data?.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text || "Sorry, I couldn't process that.";
      } else {
        return "Sorry, no response received.";
      }
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return "Oops! Something went wrong. Please try again later.";
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#007848',
          padding: '15px',
          color: 'white',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
        onClick={toggleChatbot}
      >
        🤖
      </div>

      {/* Full-Screen Chatbot Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#007848',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            zIndex: 1000,
          }}
        >
          {/* Chatbot Header */}
          <div
            style={{
              background: '#1f4037',
              color: 'white',
              textAlign: 'center',
              padding: '10px',
              fontSize: '20px',
            }}
          >
            <h3>Tree Plantation Chatbot</h3>
            <button onClick={toggleChatbot} style={{ float: 'right', background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>✖</button>
          </div>

          {/* Messages Section */}
          <div
            style={{
              flexGrow: 1,
              overflowY: 'auto',
              backgroundColor: 'white',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: msg.sender === 'user' ? '#006400' : '#ffffff',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    borderRadius: '10px',
                    padding: '10px 15px',
                    maxWidth: '70%',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              style={{
                flexGrow: 1,
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginRight: '10px',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: '#007848',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
