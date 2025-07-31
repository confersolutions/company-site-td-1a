import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Brain,
  Zap,
  Target,
  Settings,
  TestTube,
  Rocket,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Unlocking Agentic AI: A Step-by-Step Guide to Smarter Business Automation - Confer Solutions AI",
  description:
    "Learn how to implement agentic AI in your organization — from architecture to execution — with real tools, real patterns, and real results.",
  openGraph: {
    title: "Unlocking Agentic AI: A Step-by-Step Guide to Smarter Business Automation",
    description:
      "Learn how to implement agentic AI in your organization — from architecture to execution — with real tools, real patterns, and real results.",
    type: "article",
    publishedTime: "2024-12-10T14:30:00.000Z",
    authors: ["Yatin Karnik"],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 10, 2024
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Yatin Karnik
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  12 min read
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  AI Innovation
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Unlocking{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Agentic AI
                </span>
                : A Step-by-Step Guide
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Learn how to implement agentic AI in your organization — from architecture to execution — with real
                tools, real patterns, and real results.
              </p>

              {/* Social Sharing */}
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm">Share:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <Twitter className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <Linkedin className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <Facebook className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    <Share2 className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Orchestra Conductor coordinating digital tools"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

                {/* Floating AI Status Indicator */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  AI Active
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
            {/* Opening Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-blue-800/30">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                From Chatbots to Autonomous Agents
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The AI world is evolving fast — and the next major shift isn't just better answers.
              </p>
              <p className="text-xl font-semibold text-foreground mb-4">It's smarter action.</p>
              <p className="text-lg text-muted-foreground">
                Agentic AI unlocks this next level. These systems don't just respond — they carry out multi-step tasks,
                trigger real-world workflows, and act as autonomous teammates.
              </p>
            </div>

            {/* What Is Agentic AI Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Brain className="h-8 w-8 mr-3 text-purple-600" />
                What Is Agentic AI?
              </h2>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800/30">
                <p className="text-lg mb-6">At its core, agentic AI means:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Task-driven behavior</h4>
                      <p className="text-muted-foreground">(not just Q&A)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Tool and memory access</h4>
                      <p className="text-muted-foreground">External integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Internal decision loops</h4>
                      <p className="text-muted-foreground">Self-reasoning capability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Autonomy with oversight</h4>
                      <p className="text-muted-foreground">Supervised intelligence</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/50 dark:bg-black/20 rounded-xl border border-purple-200 dark:border-purple-700/30">
                  <p className="text-lg font-medium">
                    <strong>Think:</strong> AI that knows when it's wrong, retries a failed API call, chooses the right
                    next step, or decides it needs to ask for help.
                  </p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Framework */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Framework to Unlock Agentic AI</h2>

              {/* Step 1 */}
              <div className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-100 dark:border-green-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">
                    Step 1: Define One High-Value Use Case
                  </h3>
                </div>

                <p className="text-lg mb-6">Pick a use case where:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>A human today is doing a series of actions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>There's clear structure or decision logic</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>You want to reduce time, cost, or bottlenecks</span>
                  </li>
                </ul>

                <div className="bg-white/70 dark:bg-black/20 rounded-xl p-6 border border-green-200 dark:border-green-700/30">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-300">Examples:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Loan estimate parsing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Support ticket triage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Inventory restocking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Compliance summaries</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                    Step 2: Break it Down into Sub-Tasks
                  </h3>
                </div>

                <p className="text-lg mb-6">Map the workflow into steps:</p>
                <div className="space-y-4">
                  {[
                    { step: "Intake", desc: "(e.g., file, form, email)" },
                    { step: "Classify or extract data", desc: "" },
                    { step: "Lookup or call external services", desc: "" },
                    { step: "Decide based on logic or history", desc: "" },
                    { step: "Output or escalate", desc: "" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-black/20 rounded-lg border border-blue-200 dark:border-blue-700/30"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-semibold">{item.step}</span>
                        {item.desc && <span className="text-muted-foreground ml-2">{item.desc}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700/30">
                  <p className="text-blue-800 dark:text-blue-300 font-medium">
                    Each step can become a skill or agent in a modular pipeline.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    Step 3: Choose the Agent Framework
                  </h3>
                </div>

                <p className="text-lg mb-6">Popular options:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "LangGraph", desc: "for stateful, multi-agent flows" },
                    { name: "CrewAI", desc: "for modular roles and async reasoning" },
                    { name: "AutoGen", desc: "for dynamic collaborative agents" },
                    { name: "Flowise", desc: "low-code visual agent design" },
                  ].map((framework, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/70 dark:bg-black/20 rounded-lg border border-purple-200 dark:border-purple-700/30"
                    >
                      <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">{framework.name}</h4>
                      <p className="text-muted-foreground">{framework.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700/30">
                  <p className="text-purple-800 dark:text-purple-300">
                    You can also build from scratch using LLM + memory + tools.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300">
                    Step 4: Add Tools + Memory + Guardrails
                  </h3>
                </div>

                <p className="text-lg mb-6">Agents need:</p>
                <div className="space-y-6">
                  <div className="p-6 bg-white/70 dark:bg-black/20 rounded-lg border border-orange-200 dark:border-orange-700/30">
                    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-3">Memory:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Qdrant", "Pinecone", "Supabase"].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/70 dark:bg-black/20 rounded-lg border border-orange-200 dark:border-orange-700/30">
                    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-3">Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Internal APIs", "Document search", "Schedulers"].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/70 dark:bg-black/20 rounded-lg border border-orange-200 dark:border-orange-700/30">
                    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-3">Guardrails:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Retry logic", "Evals", "Fallback prompts"].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700/30">
                  <p className="text-orange-800 dark:text-orange-300 font-medium">
                    This turns a chatbot into a trusted business workflow.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="mb-12 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-2xl p-8 border border-teal-100 dark:border-teal-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                    <TestTube className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-300">
                    Step 5: Test, Evaluate, and Observe
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-teal-800 dark:text-teal-300 mb-4">Use eval frameworks like:</h4>
                    <div className="space-y-3">
                      {["LangSmith", "Promptfoo", "Custom eval chains"].map((framework) => (
                        <div
                          key={framework}
                          className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-black/20 rounded-lg border border-teal-200 dark:border-teal-700/30"
                        >
                          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                          <span className="font-medium">{framework}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-teal-800 dark:text-teal-300 mb-4">Track:</h4>
                    <div className="space-y-3">
                      {["Success/failure per step", "Token cost and speed", "Edge cases and hallucinations"].map(
                        (metric) => (
                          <div
                            key={metric}
                            className="flex items-center space-x-3 p-3 bg-white/70 dark:bg-black/20 rounded-lg border border-teal-200 dark:border-teal-700/30"
                          >
                            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                            <span className="font-medium">{metric}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  {'"The magic of agentic AI is not just that it can act — it\'s that it can learn to act better."'}
                </blockquote>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-16 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-2xl p-8 border border-slate-100 dark:border-slate-800/30">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Rocket className="h-8 w-8 mr-3 text-slate-600" />
                Conclusion: Agentic AI is Infrastructure, Not Just Interaction
              </h2>

              <div className="space-y-6 text-lg">
                <p>If you think of this as just "another chatbot," you'll miss the opportunity.</p>
                <p>
                  The best teams treat agentic AI like systems engineering:{" "}
                  <strong>modular, observable, improvable</strong>.
                </p>
                <div className="bg-white/70 dark:bg-black/20 rounded-xl p-6 border border-slate-200 dark:border-slate-700/30">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Build your first agent. Then scale the framework.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Your business will never be the same.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Need help designing or deploying your first AI agent?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We've built modular agent stacks across finance, healthcare, and retail. Let's talk about how to get
                  yours running.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Link
                    href="/about/contact"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book a Call with Our AI Architects →
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Free 30-minute session
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    No commitment required
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Custom implementation roadmap
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  YK
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Yatin Karnik</h3>
                  <p className="text-muted-foreground mb-2">CEO & Founder, Confer Solutions AI</p>
                  <p className="text-sm">
                    Yatin is a leading expert in agentic AI systems and autonomous business automation. He has helped
                    dozens of organizations implement intelligent agents that drive measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
