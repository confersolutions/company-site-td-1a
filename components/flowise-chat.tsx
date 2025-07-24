"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FlowiseChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [BubbleChat, setBubbleChat] = useState<any>(null)

  // Your actual Flowise configuration
  const flowiseConfig = {
    chatflowid: "5440e748-320e-4b27-8849-bed8e9f924f9",
    apiHost: "https://flowise.confersolutions.ai",
    chatUrl: "https://flowise.confersolutions.ai/chatbot/5440e748-320e-4b27-8849-bed8e9f924f9"
  }

  useEffect(() => {
    // Try to load BubbleChat dynamically
    const loadBubbleChat = async () => {
      try {
        const { BubbleChat } = await import('flowise-embed-react')
        setBubbleChat(() => BubbleChat)
      } catch (error) {
        console.log('BubbleChat not available, using iframe fallback')
      }
    }
    
    loadBubbleChat()
  }, [])

  return (
    <>
      {/* Chat Toggle Button - Exact same styling as original Flowise */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white border-2 border-[#1e40af] transition-all duration-200"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window - Try BubbleChat first, fallback to iframe */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-96 h-[500px] shadow-2xl border border-gray-200 rounded-lg bg-white overflow-hidden">
          {/* Header - Exact same as original Flowise */}
          <div className="bg-white text-gray-800 border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Confer AI Assistant
            </h3>
            <p className="text-gray-600 text-sm">Mortgage Automation Expert</p>
          </div>

          {/* Chat Container - Full height minus header */}
          <div className="h-[calc(500px-80px)] w-full">
            {BubbleChat ? (
              <BubbleChat
                chatflowid={flowiseConfig.chatflowid}
                apiHost={flowiseConfig.apiHost}
                theme={{
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
                }}
              />
            ) : (
              <iframe
                src={flowiseConfig.chatUrl}
                className="w-full h-full border-0"
                title="Confer AI Assistant"
                allow="microphone; camera"
                style={{
                  backgroundColor: '#f8fafc'
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
