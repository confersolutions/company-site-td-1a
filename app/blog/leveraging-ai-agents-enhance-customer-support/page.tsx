import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, CheckCircle, Zap, Brain, Users } from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Leveraging AI Agents to Enhance Customer Support - Confer Solutions AI",
  description:
    "Discover how AI agents are transforming customer support by delivering faster, smarter, and more scalable service experiences — powered by real autonomy.",
  openGraph: {
    title: "Leveraging AI Agents to Enhance Customer Support",
    description:
      "Discover how AI agents are transforming customer support by delivering faster, smarter, and more scalable service experiences — powered by real autonomy.",
    type: "article",
    publishedTime: "2024-11-15T08:30:00.000Z",
    authors: ["Yatin Karnik"],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary/80 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 text-white/80 text-sm mb-6">
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Calendar className="h-4 w-4 mr-1" />
                  November 15, 2024
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <User className="h-4 w-4 mr-1" />
                  Yatin Karnik
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4 mr-1" />6 min read
                </div>
              </div>
              <div className="mb-4">
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Customer Experience
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Leveraging AI Agents to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Enhance Customer Support
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover how AI agents are transforming customer support by delivering faster, smarter, and more
                scalable service experiences — powered by real autonomy.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Customer Support Agent Interface"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">AI Agent Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12 border-l-4 border-primary">
              <h2 className="text-3xl font-bold mb-4 text-primary">Customer Support is Entering a New Era.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For decades, support teams have balanced cost, quality, and speed — usually sacrificing one to optimize
                the others. But the rise of agentic AI changes that equation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                AI agents, powered by large language models (LLMs) and enhanced with memory, tool access, and reasoning
                capabilities, are revolutionizing customer support as we know it.
              </p>
            </div>

            {/* From Reactive to Proactive Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold">From Reactive Bots to Proactive Problem-Solvers</h2>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border mb-8">
                <p className="text-xl font-semibold text-center mb-6 text-primary">
                  Old-school bots were scripts. AI agents are intelligent collaborators.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Modern agents can:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Search your internal knowledge base</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Trigger workflows via APIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Access CRM data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Summarize long email chains</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Respond with tone-matching finesse</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="AI Agent Dashboard"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
                  💡 <strong>Key Insight:</strong> These aren't just scripted flows — they're dynamic interactions
                  shaped in real-time by intent and context.
                </p>
              </div>
            </section>

            {/* Always-On Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-4xl font-bold">Always-On, Always-Informed</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <p className="text-xl mb-6 leading-relaxed">
                    Unlike human teams, AI agents don't sleep. But more importantly, they don't forget.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With vector databases and context-aware pipelines, agents can remember customer history,
                    preferences, and unresolved issues — and follow up with intelligent continuity.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-8 rounded-2xl">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-xl font-semibold text-secondary mb-4">Always Available</div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-white/50 p-3 rounded-lg">
                          <div className="font-semibold">Memory</div>
                          <div className="text-muted-foreground">Perfect Recall</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded-lg">
                          <div className="font-semibold">Context</div>
                          <div className="text-muted-foreground">Full History</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Specialized Agents Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full mr-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold">Specialized Agents, Modular Expertise</h2>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-2xl mb-8">
                <p className="text-xl font-semibold text-center mb-8 text-green-800 dark:text-green-200">
                  Think of support agents as microservices:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Refund Agent</h3>
                    <p className="text-muted-foreground">Handles refunds and returns</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Compliance Agent</h3>
                    <p className="text-muted-foreground">Explains compliance docs</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Escalation Agent</h3>
                    <p className="text-muted-foreground">Routes to human reps with context</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-xl border-l-4 border-yellow-500">
                <p className="text-lg font-medium text-yellow-900 dark:text-yellow-100">
                  ⚡ <strong>Advantage:</strong> This modularity leads to more scalable, testable, and improvable
                  systems.
                </p>
              </div>
            </section>

            {/* Enhancement vs Replacement */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center">It's Not About Replacing — It's About Enhancing</h2>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/20">
                <p className="text-xl font-semibold text-center mb-8 text-primary">
                  Let's be clear: the best customer support will still involve people — but empowered by AI agents.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-primary">👥 Humans Handle</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Nuance</li>
                      <li>• Empathy</li>
                      <li>• Exception handling</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-secondary">🤖 Agents Cover</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Speed</li>
                      <li>• Scale</li>
                      <li>• Recall</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-xl font-semibold text-primary">Together, they form the ideal support stack.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Conclusion: Start Small, Win Big</h2>

              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <p className="text-xl mb-6 leading-relaxed">
                  Begin with a single agent: one that reduces Tier-1 tickets by auto-answering common questions. Then
                  expand.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With today's open-source tooling, RAG pipelines, and hosted LLM services, any support team can start
                  testing agentic workflows in weeks — not months.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <p className="text-xl font-bold text-center text-primary">
                    The future of support isn't automation. It's augmentation — powered by agents.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to build your own AI support agents?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's explore how AI can transform your customer experience.
            </p>
            <ConsultationButton
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Book a Consultation →
            </ConsultationButton>
            <p className="text-white/70 mt-4 text-sm">Free 30-minute strategy session • No commitment required</p>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  YK
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Yatin Karnik</h3>
                  <p className="text-primary font-semibold mb-3">CEO & Founder, Confer Solutions AI</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Yatin specializes in implementing AI-powered customer support solutions that enhance customer
                    experience while driving operational efficiency and cost reduction for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
