"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FlowiseChat() {
  const [isOpen, setIsOpen] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Load Flowise web.js from CDN
    const loadFlowise = async () => {
      try {
        const script = document.createElement('script')
        script.type = 'module'
        script.innerHTML = `
          import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
          window.FlowiseChatbot = Chatbot
        `
        document.head.appendChild(script)
        
        script.onload = () => {
          console.log('Flowise web.js loaded successfully')
        }
      } catch (error) {
        console.error('Failed to load Flowise:', error)
      }
    }

    loadFlowise()
  }, [])

  useEffect(() => {
    if (isOpen && chatContainerRef.current && window.FlowiseChatbot && !chatInstanceRef.current) {
      try {
        // Initialize the chat
        chatInstanceRef.current = window.FlowiseChatbot.init({
          chatflowid: "5440e748-320e-4b27-8849-bed8e9f924f9",
          apiHost: "https://flowise.confersolutions.ai",
          theme: {
            button: {
              backgroundColor: "#1e40af",
              right: 20,
              bottom: 20,
              size: "large",
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
          }
        })
      } catch (error) {
        console.error('Failed to initialize Flowise chat:', error)
      }
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Toggle Button - Exact same styling as original Flowise */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white border-2 border-[#1e40af] transition-all duration-200"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Container - Flowise will inject its chat here */}
      <div 
        ref={chatContainerRef}
        className={`fixed bottom-20 right-4 z-40 w-96 h-[500px] ${isOpen ? 'block' : 'hidden'}`}
      />
    </>
  )
}

// Add FlowiseChatbot to window type
declare global {
  interface Window {
    FlowiseChatbot: any
  }
}
