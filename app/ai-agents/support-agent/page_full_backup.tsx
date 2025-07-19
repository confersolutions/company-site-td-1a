import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Headphones, MessageCircle, Clock, Shield, Users, Heart, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Support Agent | 24/7 Intelligent Customer Support | Confer Solutions AI",
  description:
    "AI-powered customer support that never sleeps. Instant resolution with emotional intelligence and seamless human handoff when needed.",
}

export default function SupportAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-rose-500/20 rounded-full text-rose-300 text-sm font-medium mb-6 backdrop-blur-sm border border-rose-500/30">
                <Headphones className="h-4 w-4 mr-2" />
                24/7 Intelligent Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                Support Agent
              </h1>
              <p className="text-xl md:text-2xl text-rose-100 mb-8 leading-relaxed">
                AI-powered customer support that <span className="text-rose-400 font-bold">never sleeps</span>. 
                Instant resolution with emotional intelligence and seamless human handoff when needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ConsultationButton size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white border-0 text-lg px-8 py-4">
                  Start Your AI Transformation
                </ConsultationButton>
                <ConsultationButton variant="outline" size="lg" className="border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900 text-lg px-8 py-4">
                  Try Support Demo
                </ConsultationButton>
              </div>
              
              {/* Support Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-rose-400">&lt; 30s</div>
                  <div className="text-sm text-rose-200">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-rose-400">98%</div>
                  <div className="text-sm text-rose-200">Resolution Rate</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-rose-400">24/7</div>
                  <div className="text-sm text-rose-200">Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Customer Support Dashboard"
                  className="rounded-2xl shadow-2xl border border-white/20"
                />
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-rose-400 font-medium">Live Support Chat</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-rose-100">Resolving customer inquiry in real-time...</div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-500/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
              24/7 Intelligent Customer Support
            </h2>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              Revolutionary AI support that provides instant, empathetic assistance with human-level understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Instant Response</h3>
                <p className="text-rose-100 mb-4">
                  Responds to customer inquiries in under 30 seconds, 24/7, with accurate and helpful information.
                </p>
                <div className="text-rose-400 font-medium">⚡ Lightning-fast support</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Emotional Intelligence</h3>
                <p className="text-rose-100 mb-4">
                  Detects customer frustration and adjusts tone and approach to provide empathetic, caring support.
                </p>
                <div className="text-rose-400 font-medium">❤️ Empathetic interactions</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Context Awareness</h3>
                <p className="text-rose-100 mb-4">
                  Understands full customer history and loan context to provide personalized, relevant assistance.
                </p>
                <div className="text-rose-400 font-medium">🧠 Smart context understanding</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Seamless Handoff</h3>
                <p className="text-rose-100 mb-4">
                  Intelligently escalates complex issues to human agents with full context and conversation history.
                </p>
                <div className="text-rose-400 font-medium">🤝 Smart escalation</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Multi-Channel Support</h3>
                <p className="text-rose-100 mb-4">
                  Provides consistent support across chat, email, phone, and social media with unified experience.
                </p>
                <div className="text-rose-400 font-medium">💬 Omnichannel support</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Secure & Compliant</h3>
                <p className="text-rose-100 mb-4">
                  Maintains strict security protocols and compliance standards while providing exceptional support.
                </p>
                <div className="text-rose-400 font-medium">🛡️ Bank-grade security</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-900/50 to-pink-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Revolutionary Support Performance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="text-5xl font-bold text-rose-400 mb-2">98%</div>
              <div className="text-rose-100">Resolution Rate</div>
              <div className="text-sm text-rose-300 mt-2">first contact resolution</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="text-5xl font-bold text-rose-400 mb-2">&lt; 30s</div>
              <div className="text-rose-100">Response Time</div>
              <div className="text-sm text-rose-300 mt-2">instant support</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="text-5xl font-bold text-rose-400 mb-2">24/7</div>
              <div className="text-rose-100">Availability</div>
              <div className="text-sm text-rose-300 mt-2">never offline</div>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="text-5xl font-bold text-rose-400 mb-2">96%</div>
              <div className="text-rose-100">Satisfaction</div>
              <div className="text-sm text-rose-300 mt-2">customer happiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for 24/7 AI Customer Support?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Transform customer experience with AI support that provides instant, empathetic assistance around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-4 font-semibold">
              Start Your AI Transformation
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4 font-semibold"
            >
              Try Support Demo
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
