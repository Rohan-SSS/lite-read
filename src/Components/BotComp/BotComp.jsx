import { Send } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import "./BotComp.css";

const BotComp = () => {
  // hooks and stuff
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ type: "bot", text: "Hello, how can I assist you?" }]);
  }, []);

  //submit handler
  const handleSubmit = async () => {
    if (inputValue.trim() === "") return;

    // Adds user message to message array
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inputValue },
    ]);

    // Clear the message from input box
    setInputValue("");

    setTimeout(async () => {
      // Show the "Getting response" message after a 500ms delay
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          type: "bot",
          text: "Getting response ",
          specialClass: "getting-response",
        },
      ]);

      // Fetches prompt response
      const response = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      // Wait till response is received
      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, prevMessages.length - 1),
        { type: "bot", text: data.reply },
      ]);
    }, 1000); // 500ms delay
  };

  //return key handler
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  //smooth animation
  const smoothScrollToBottom = (element) => {
    // get height difference
    const start = element.scrollTop;
    const end = element.scrollHeight - element.clientHeight;
    const change = end - start;
    const duration = 500; // duration in ms
    let startTime = null;

    //animate the scroll down for duration for change
    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextStep = easeInOutQuad(timeElapsed, start, change, duration);
      element.scrollTop = nextStep;
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    //fuxkery
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    //magic
    requestAnimationFrame(animateScroll);
  };

  //useeffect to scroll down using animation
  useEffect(() => {
    if (messageEndRef.current) {
      const messageContainer = messageEndRef.current.parentElement;
      smoothScrollToBottom(messageContainer);
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages">
        {/* mapping message to bot and user */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type} ${message.specialClass || ""}`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <div className="input-area">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSubmit}>
          <Send className="Send" />
        </button>
      </div>
    </div>
  );
};

export default BotComp;
