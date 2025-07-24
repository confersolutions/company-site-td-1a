"use client";

import { useEffect, useState } from "react";
import { Chatbot } from "flowise-embed-react";

export function FlowiseChat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show chat after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Chatbot
        chatflowid="your-chatflow-id"
        apiHost="https://your-flowise-instance.com"
        theme={{
          button: {
            backgroundColor: "#3B82F6",
            right: 20,
            bottom: 20,
            size: "medium",
          },
          chatWindow: {
            title: "Confer AI Assistant",
            welcomeMessage: "Hello! How can I help you today?",
            backgroundColor: "#ffffff",
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
              backgroundColor: "#f7f7f8",
              textColor: "#303235",
              fontSize: 14,
            },
            userMessage: {
              backgroundColor: "#3B82F6",
              textColor: "#ffffff",
              fontSize: 14,
            },
            textInput: {
              placeholder: "Type your message...",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              fontSize: 14,
            },
          },
        }}
      />
    </div>
  );
} 