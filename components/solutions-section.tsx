import { Bot, FileText, BarChart3, ShieldCheck, Brain, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SolutionsSection() {
  const solutions = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "AI Mortgage Agent",
      description:
        "Automate mortgage processing with AI agents that handle applications, verification, and customer inquiries.",
      image: "/placeholder.jpg",
      color: "from-blue-600 to-indigo-700",
      link: "/solutions/ai-mortgage-agent",
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "RAG Chatbot",
      description:
        "Deploy intelligent chatbots with retrieval-augmented generation for accurate, context-aware customer support.",
      image: "/placeholder.jpg",
      color: "from-purple-600 to-indigo-700",
      link: "/solutions/rag-chatbot",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Document Processing",
      description:
        "Extract, analyze, and process financial documents including LE (Loan Estimate) and CD (Closing Disclosure) documents with high accuracy using advanced OCR and NLP technology.",
      image: "/placeholder.jpg",
      color: "from-cyan-600 to-blue-700",
      link: "/solutions/document-processing",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Risk Assessment",
      description: "Identify and mitigate financial risks with predictive analytics and machine learning models.",
      image: "/placeholder.jpg",
      color: "from-green-600 to-emerald-700",
      link: "/solutions/risk-assessment",
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Data Analytics",
      description: "Transform raw financial data into actionable insights with AI-powered analytics and visualization.",
      image: "/placeholder.jpg",
      color: "from-amber-600 to-orange-700",
      link: "/solutions/data-analytics",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Fraud Detection",
      description:
        "Detect and prevent fraudulent activities in real-time with behavioral analysis and anomaly detection.",
      image: "/placeholder.jpg",
      color: "from-red-600 to-rose-700",
      link: "/solutions/fraud-detection",
    },
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Powered Solutions are the key to unlocking automation, intelligence, and business growth. We help
            businesses design, develop, and deploy AI solutions that enhance efficiency, automate processes, and drive
            measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-48">
                <Image src={solution.image || "/placeholder.svg"} alt={solution.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-80`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{solution.title}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6">
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <Link href={solution.link}>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">View All Solutions</Button>
        </div>
      </div>
    </section>
  )
}
