'use client'
import dynamic from 'next/dynamic'

const BubbleChat = dynamic(() => import('flowise-embed-react').then(mod => ({ default: mod.BubbleChat })), {
  ssr: false
})

export function FlowiseChat() {
  return (
    <BubbleChat
      chatflowid="5440e748-320e-4b27-8849-bed8e9f924f9"
      apiHost="https://flowise.confersolutions.ai"
      chatflowConfig={{
        /* Chatflow Config */
      }}
      observersConfig={{
        /* Observers Config */
      }}
      theme={{    
        button: {
          backgroundColor: '#1a1a1a', // More professional dark color
          right: 24,
          bottom: 24,
          size: 56, // Slightly larger for better visibility
          dragAndDrop: true,
          iconColor: '#ffffff',
          customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/brain-js.svg', // AI-themed icon
          autoWindowOpen: {
            autoOpen: false, // Less intrusive - let users choose when to engage
            openDelay: 5, // If auto-open enabled, wait longer
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
          titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/brain-js.svg',
          welcomeMessage: 'Hello! I\'m here to help you explore AI solutions for your business. What challenges are you looking to solve?',
          errorMessage: 'I apologize for the technical difficulty. Please try again or contact us directly at hello@confersolutions.ai',
          backgroundColor: '#ffffff',
          height: 600,
          width: 380,
          fontSize: 15,
          starterPrompts: [
            "What AI solutions does Confer offer?",
            "How can AI transform my business?",
            "I need a custom AI application",
            "Tell me about your pricing",
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
            avatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/brain-js.svg'
          },
          userMessage: {
            backgroundColor: '#1a1a1a',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/user.svg'
          },
          textInput: {
            placeholder: 'Describe your AI needs...',
            backgroundColor: '#ffffff',
            textColor: '#1e293b',
            sendButtonColor: '#1a1a1a',
            maxChars: 500, // Allow longer, more detailed questions
            maxCharsWarningMessage: 'Please keep your message under 500 characters for the best response.',
            autoFocus: false, // Less intrusive
            sendMessageSound: false, // Professional - no sounds
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
      }}
    />
  )
}
