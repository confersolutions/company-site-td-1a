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
        // Initialize the chat with the complete original configuration
        chatInstanceRef.current = window.FlowiseChatbot.init({
          chatflowid: "5440e748-320e-4b27-8849-bed8e9f924f9",
          apiHost: "https://flowise.confersolutions.ai",
          theme: {
            button: {
              backgroundColor: '#1a1a1a',
              right: 24,
              bottom: 24,
              size: 56,
              dragAndDrop: true,
              iconColor: '#ffffff',
              customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
              autoWindowOpen: {
                autoOpen: false,
                openDelay: 5,
                autoOpenOnMobile: false
              }
            },
            tooltip: {
              showTooltip: true,
              tooltipMessage: 'Need AI solutions? Let\'s chat! 🤖',
              tooltipBackgroundColor: '#1a1a1a',
              tooltipTextColor: '#ffffff',
              tooltipFontSize: 14
            },
            disclaimer: {
              title: 'AI Consultation Chat',
              message: "Connect with our AI experts. By continuing, you agree to our <a target=\"_blank\" href=\"https://confersolutions.ai/privacy\" style=\"color: #3b82f6; text-decoration: underline;\">Privacy Policy</a>",
              textColor: '#1a1a1a',
              buttonColor: '#1a1a1a',
              buttonText: 'Start Consultation',
              buttonTextColor: '#ffffff',
              blurredBackgroundColor: 'rgba(0, 0, 0, 0.6)',
              backgroundColor: '#ffffff'
            },
            customCSS: `
              .bubble-button {
                box-shadow: 0 8px 25px rgba(26, 26, 26, 0.15);
                transition: all 0.3s ease;
              }
              .bubble-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 35px rgba(26, 26, 26, 0.25);
              }
            `,
            chatWindow: {
              showTitle: true,
              showAgentMessages: true,
              title: 'Confer AI Assistant',
              titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
              welcomeMessage: 'Hello! I\'m here to help you explore AI solutions for your business. What challenges are you looking to solve?',
              errorMessage: 'I apologize for the technical difficulty. Please try again or contact us directly at info@confersolutions.ai',
              backgroundColor: '#ffffff',
              height: 600,
              width: 380,
              fontSize: 15,
              starterPrompts: [
                "What AI solutions does Confer offer?",
                "I need a custom AI application",
                "Can you integrate with my existing systems?"
              ],
              starterPromptFontSize: 14,
              clearChatOnReload: false,
              sourceDocsTitle: 'References:',
              renderHTML: true,
              botMessage: {
                backgroundColor: '#f8fafc',
                textColor: '#1e293b',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
              },
              userMessage: {
                backgroundColor: '#1a1a1a',
                textColor: '#ffffff',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
              },
              textInput: {
                placeholder: 'Describe your AI needs...',
                backgroundColor: '#ffffff',
                textColor: '#1e293b',
                sendButtonColor: '#1a1a1a',
                maxChars: 500,
                maxCharsWarningMessage: 'Please keep your message under 500 characters for the best response.',
                autoFocus: false,
                sendMessageSound: false,
                receiveMessageSound: false
              },
              feedback: {
                color: '#64748b'
              },
              dateTimeToggle: {
                date: true,
                time: true
              },
              footer: {
                textColor: '#64748b',
                text: 'Powered by',
                company: 'Confer Solutions',
                companyLink: 'https://confersolutions.ai'
              }
            }
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
