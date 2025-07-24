"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function FlowiseChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to Confer! I'm here to help you with mortgage automation, AI solutions, and financial technology questions. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response with Confer-specific content
    setTimeout(() => {
      const responses = [
        "Thank you for your interest in Confer Solutions! Our AI agents can automate up to 85% of mortgage workflows. Would you like to learn more about our underwriting automation or schedule a consultation?",
        "Great question! Our AI mortgage agents achieve 99.7% accuracy in document processing and can handle everything from application intake to closing. What specific area of mortgage automation interests you most?",
        "I'd be happy to help you understand how our AI solutions can transform your mortgage operations. We offer autonomous underwriting, compliance monitoring, and 24/7 customer service. Which solution would you like to explore?",
        "Confer's AI agents are designed specifically for the mortgage industry. We can reduce processing time by up to 85% while maintaining regulatory compliance. Would you like to see a demo of our platform?",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg bg-[#1e40af] hover:bg-[#1e3a8a] text-white border-2 border-[#1e40af]"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-40 w-96 h-[500px] shadow-2xl border border-gray-200 rounded-lg">
          <CardHeader className="pb-3 bg-white text-gray-800 border-b border-gray-200 rounded-t-lg">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Confer AI Assistant
            </CardTitle>
            <p className="text-gray-600 text-sm">Mortgage Automation Expert</p>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8fafc]">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                      message.isUser
                        ? "bg-[#1e40af] text-white rounded-br-none"
                        : "bg-white text-[#1f2937] rounded-bl-none border border-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-[#1f2937] p-3 rounded-lg rounded-bl-none text-sm border border-gray-200 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#1e40af] rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#1e40af] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#1e40af] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our AI solutions, mortgage automation, or schedule a consultation..."
                  className="flex-1 border-gray-300 focus:border-[#1e40af] focus:ring-[#1e40af] text-[#1f2937]"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-[#6b7280] mt-2 text-center">Powered by Confer AI Technology</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
