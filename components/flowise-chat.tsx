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
            backgroundColor: "#1e40af", // Darker blue for fintech
            right: 20,
            bottom: 20,
            size: "large",
            iconColor: "#ffffff",
          },
          chatWindow: {
            title: "Confer AI Assistant",
            welcomeMessage: "Welcome to Confer! I'm here to help you with mortgage automation, AI solutions, and financial technology questions. How can I assist you today?",
            backgroundColor: "#ffffff",
            fontSize: 16,
            poweredByTextColor: "#6b7280",
            botMessage: {
              backgroundColor: "#f8fafc",
              textColor: "#1f2937",
              fontSize: 14,
            },
            userMessage: {
              backgroundColor: "#1e40af",
              textColor: "#ffffff",
              fontSize: 14,
            },
            textInput: {
              placeholder: "Ask about our AI solutions, mortgage automation, or schedule a consultation...",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              fontSize: 14,
              borderColor: "#e5e7eb",
            },
            sendButtonColor: "#1e40af",
            userBubbleColor: "#1e40af",
            botBubbleColor: "#f8fafc",
            userTextColor: "#ffffff",
            botTextColor: "#1f2937",
          },
        }}
      />
    </div>
  );
} 