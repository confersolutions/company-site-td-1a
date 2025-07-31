import type { Metadata } from "next"
import { MessageSquare, Clock, Users, Zap, Heart, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Support Agent | 24/7 Intelligent Customer Support | Confer Solutions AI",
  description:
    "AI-powered customer support that never sleeps. Instant resolution with emotional intelligence and seamless human handoff when needed.",
  keywords: [
    "AI support agent",
    "24/7 customer support",
    "intelligent customer service",
    "AI customer support",
    "automated support system",
    "AI help desk",
    "customer service automation",
    "AI chatbot support",
    "emotional intelligence AI",
    "customer support AI",
    "virtual support agent",
    "AI customer service platform",
    "automated customer care",
    "intelligent support system",
    "AI customer assistance"
  ],
  authors: [{ name: "Confer Solutions" }],
  creator: "Confer Solutions",
  publisher: "Confer Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/ai-agents/support-agent",
  },
  openGraph: {
    title: "Support Agent | 24/7 Intelligent Customer Support | Confer Solutions AI",
    description:
      "AI-powered customer support that never sleeps. Instant resolution with emotional intelligence and seamless human handoff when needed.",
    url: "https://confersolutions.ai/ai-agents/support-agent",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "AI Support Agent - 24/7 Intelligent Customer Support with Emotional Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Agent | 24/7 Intelligent Customer Support | Confer Solutions AI",
    description:
      "AI-powered customer support that never sleeps. Instant resolution with emotional intelligence and seamless human handoff when needed.",
    images: [
      "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    ],
    creator: "@confer_inc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function SupportAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Support Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                24/7 intelligent customer support that understands emotions, resolves issues instantly, and knows when to involve humans for complex situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90" source="demo" showArrow={false}>
                  Get a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-fintech-600"
                >
                  Support Features
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Support Agent Dashboard - 24/7 Intelligent Customer Service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Never Miss a Customer Query
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Support Agent combines emotional intelligence with advanced NLP to provide exceptional customer experiences around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">24/7 Availability</h3>
              </div>
              <p className="text-gray-600">
                Never-sleeping support that handles customer queries instantly, regardless of time zones or business hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">Emotional Intelligence</h3>
              </div>
              <p className="text-gray-600">
                Advanced sentiment analysis that adapts responses based on customer emotions and frustration levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">Instant Resolution</h3>
              </div>
              <p className="text-gray-600">
                Resolves 80% of common queries instantly with access to your knowledge base and customer history.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">Smart Escalation</h3>
              </div>
              <p className="text-gray-600">
                Intelligently routes complex issues to human agents with full context and conversation history.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">Multi-Channel Support</h3>
              </div>
              <p className="text-gray-600">
                Seamless support across chat, email, social media, and voice channels with unified conversation tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-fintech-600 mr-3" />
                <h3 className="text-xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-gray-600">
                Machine learning algorithms that improve responses based on customer feedback and resolution outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-fintech-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join companies using AI Support Agent to deliver exceptional customer experiences 24/7.
          </p>
          <ConsultationButton
            size="lg"
            className="bg-white text-fintech-600 hover:bg-white/90"
            source="demo"
            showArrow={false}
          >
            Schedule a Demo
          </ConsultationButton>
        </div>
      </div>
    </>
  )
}
