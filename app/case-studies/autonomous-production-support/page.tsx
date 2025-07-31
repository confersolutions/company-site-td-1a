import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Shield,
  Database,
  Network,
  BarChart3,
  Users,
  TrendingUp,
  Server,
  Bot,
  MessageSquare,
  FileText,
  Settings,
  Target,
  Sparkles,
  ChevronRight,
  Brain,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "24/7 Autonomous Production Support Case Study | Confer Solutions AI",
  description:
    "Discover how MCP server-powered AI agents transformed production support, achieving 95% automation rate and 8-minute resolution times using JIRA, Confluence, Slack, and ServiceNow integration.",
  keywords: [
    "production support automation",
    "MCP server",
    "AI agents",
    "JIRA integration",
    "ServiceNow automation",
    "IT operations",
    "incident management",
    "autonomous support system",
    "AI-powered incident response",
    "production monitoring AI",
    "IT automation platform",
    "DevOps automation",
    "intelligent incident management",
    "automated IT support",
    "AI operations center"
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
    canonical: "/case-studies/autonomous-production-support",
  },
  openGraph: {
    title: "24/7 Autonomous Production Support Case Study | Confer Solutions AI",
    description:
      "Discover how MCP server-powered AI agents transformed production support, achieving 95% automation rate and 8-minute resolution times using JIRA, Confluence, Slack, and ServiceNow integration.",
    url: "https://confersolutions.ai/case-studies/autonomous-production-support",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "24/7 Autonomous Production Support - AI-Powered IT Operations and Incident Management",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Autonomous Production Support Case Study | Confer Solutions AI",
    description:
      "Discover how MCP server-powered AI agents transformed production support, achieving 95% automation rate and 8-minute resolution times using JIRA, Confluence, Slack, and ServiceNow integration.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function AutonomousProductionSupportPage() {
  const keyMetrics = [
    {
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      value: "95%",
      label: "Automation Rate",
      description: "Tickets resolved without human intervention",
      improvement: "+95%",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      value: "8 min",
      label: "Resolution Time",
      description: "Average time to resolve issues",
      improvement: "-96%",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      value: "99.8%",
      label: "System Uptime",
      description: "Availability improvement",
      improvement: "+2.6%",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      value: "80%",
      label: "Cost Reduction",
      description: "Support operation savings",
      improvement: "-80%",
    },
  ]

  const challenges = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "500+ Daily Tickets",
      description: "Major retailer's production environment generating overwhelming ticket volume",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "4-6 Hour Resolution",
      description: "Average ticket resolution time during business hours, worse during off-hours",
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: "Scattered Knowledge",
      description: "Critical information spread across JIRA, Confluence, and ServiceNow",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "70% Repetitive Work",
      description: "Support team spending majority of time on previously solved issues",
    },
  ]

  const mcpFeatures = [
    {
      icon: <Network className="h-6 w-6 text-blue-500" />,
      title: "Multi-System Integration",
      description: "Seamless connection to JIRA, Confluence, Slack, and ServiceNow",
      details: ["Real-time data synchronization", "Unified workflow management", "Cross-platform communication"],
    },
    {
      icon: <Brain className="h-6 w-6 text-green-500" />,
      title: "Intelligent Analysis",
      description: "Advanced NLP and pattern matching for issue resolution",
      details: ["Natural language processing", "Historical pattern matching", "Root cause analysis"],
    },
    {
      icon: <Workflow className="h-6 w-6 text-purple-500" />,
      title: "Autonomous Workflow",
      description: "End-to-end automation from detection to resolution",
      details: ["Automated diagnostics", "Self-healing scripts", "Smart escalation"],
    },
    {
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      title: "Knowledge Management",
      description: "Continuous learning and documentation enhancement",
      details: ["Solution effectiveness tracking", "Automated documentation", "Knowledge base optimization"],
    },
  ]

  const resolutionSteps = [
    {
      step: 1,
      title: "Ticket Ingestion",
      description: "Automatic detection from JIRA, ServiceNow, or Slack alerts",
      icon: <MessageSquare className="h-5 w-5" />,
      time: "< 1 sec",
    },
    {
      step: 2,
      title: "Intelligent Triage",
      description: "AI analyzes issue description, urgency, and system context",
      icon: <Brain className="h-5 w-5" />,
      time: "2-3 sec",
    },
    {
      step: 3,
      title: "Knowledge Retrieval",
      description: "Searches Confluence and historical resolutions",
      icon: <Database className="h-5 w-5" />,
      time: "1-2 sec",
    },
    {
      step: 4,
      title: "Solution Matching",
      description: "Identifies most relevant previous solutions and adaptations",
      icon: <Target className="h-5 w-5" />,
      time: "2-3 sec",
    },
    {
      step: 5,
      title: "Automated Execution",
      description: "Deploys fixes, runs diagnostics, or applies configurations",
      icon: <Settings className="h-5 w-5" />,
      time: "1-5 min",
    },
    {
      step: 6,
      title: "Verification",
      description: "Confirms resolution success through system monitoring",
      icon: <CheckCircle className="h-5 w-5" />,
      time: "30 sec",
    },
  ]

  const technicalCapabilities = [
    {
      category: "AI & ML",
      capabilities: [
        "Multi-modal understanding (text, logs, metrics)",
        "Contextual memory across related tickets",
        "Adaptive learning from resolution outcomes",
        "Parallel processing of multiple tickets",
      ],
    },
    {
      category: "Integration",
      capabilities: [
        "RESTful APIs and webhook communication",
        "Real-time data synchronization",
        "Cross-platform workflow orchestration",
        "Secure role-based access control",
      ],
    },
    {
      category: "Automation",
      capabilities: [
        "Predictive maintenance and anomaly detection",
        "Automated diagnostic command execution",
        "Self-healing script deployment",
        "Configuration rollback capabilities",
      ],
    },
    {
      category: "Monitoring",
      capabilities: [
        "Comprehensive logging and analytics",
        "Performance metrics and SLA tracking",
        "Audit trail with complete resolution history",
        "Compliance reporting automation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/30">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
            >
              Enterprise Operations Case Study
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              24/7 Autonomous Production Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              How MCP server-powered AI agents transformed production support, resolving tickets instantly using JIRA,
              Confluence, Slack, and ServiceNow
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-500" />
                <span>95% Tickets Resolved Automatically</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span>8-Minute Average Resolution</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <span>99.8% System Uptime</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3" showArrow={false}>
                Schedule Demo
              </ConsultationButton>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                Explore MCP Architecture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-background to-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{metric.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.description}</div>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    {metric.improvement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                The Challenge
              </h2>
              <p className="text-xl text-muted-foreground">
                A major retailer's production environment was drowning in support tickets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-background to-red-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      {challenge.icon}
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Critical Pain Points</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>24/7 support team struggling with volume</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>Critical delays during off-hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>Escalation bottlenecks causing downtime</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>Knowledge scattered across systems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>Repetitive issue resolution</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-red-500" />
                        <span>Inconsistent resolution quality</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Our MCP Server Solution
              </h2>
              <p className="text-xl text-muted-foreground">
                Autonomous AI agents powered by Model Context Protocol architecture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {mcpFeatures.map((feature, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-background to-blue-50/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      {feature.icon}
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Architecture */}
            <Card className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  MCP Server Architecture
                </CardTitle>
                <p className="text-muted-foreground">Distributed, scalable, and intelligent automation platform</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Server className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Core Engine</h4>
                    <p className="text-sm text-muted-foreground">Custom MCP servers with distributed processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">AI Models</h4>
                    <p className="text-sm text-muted-foreground">Fine-tuned LLMs on 50,000+ historical tickets</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Network className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Integration</h4>
                    <p className="text-sm text-muted-foreground">RESTful APIs and real-time webhooks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Security</h4>
                    <p className="text-sm text-muted-foreground">Role-based access and encrypted transmission</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resolution Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Autonomous Resolution Process
              </h2>
              <p className="text-xl text-muted-foreground">From ticket detection to resolution in under 8 minutes</p>
            </div>

            <div className="space-y-8">
              {resolutionSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-0 bg-gradient-to-r from-background to-blue-50/30">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {step.time}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Technical Capabilities
              </h2>
              <p className="text-xl text-muted-foreground">Advanced AI and automation technologies</p>
            </div>

            <Tabs defaultValue="ai-ml" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>

              {technicalCapabilities.map((category, index) => (
                <TabsContent key={index} value={category.category.toLowerCase().replace(" & ", "-")}>
                  <Card className="border-0 bg-gradient-to-br from-background to-blue-50/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">
                        {category.category} Capabilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Operational Transformation
              </h2>
              <p className="text-xl text-muted-foreground">Measurable impact across all key performance indicators</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Resolution Efficiency */}
              <Card className="border-0 bg-gradient-to-br from-background to-green-50/30">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 dark:text-green-400 flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Resolution Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Automation Rate</span>
                        <span className="font-semibold">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>First-Attempt Success</span>
                        <span className="font-semibold">98.7%</span>
                      </div>
                      <Progress value={98.7} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>24/7 Coverage</span>
                        <span className="font-semibold">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Impact */}
              <Card className="border-0 bg-gradient-to-br from-background to-blue-50/30">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 dark:text-blue-400 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cost Reduction</span>
                        <span className="font-semibold">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>System Uptime</span>
                        <span className="font-semibold">99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Customer Satisfaction</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Knowledge Enhancement */}
              <Card className="border-0 bg-gradient-to-br from-background to-purple-50/30">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700 dark:text-purple-400 flex items-center">
                    <FileText className="h-6 w-6 mr-2" />
                    Knowledge Enhancement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Documentation Quality</span>
                        <span className="font-semibold">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Solution Repository</span>
                        <span className="font-semibold">15,000+</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Training Efficiency</span>
                        <span className="font-semibold">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Before/After Comparison */}
            <Card className="border-0 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Before vs. After Transformation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Before Implementation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span>Resolution Time</span>
                        <span className="font-semibold text-red-600">4-6 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span>Automation Rate</span>
                        <span className="font-semibold text-red-600">0%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span>System Uptime</span>
                        <span className="font-semibold text-red-600">97.2%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span>Manual Work</span>
                        <span className="font-semibold text-red-600">70%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">After Implementation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Resolution Time</span>
                        <span className="font-semibold text-green-600">8 minutes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Automation Rate</span>
                        <span className="font-semibold text-green-600">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>System Uptime</span>
                        <span className="font-semibold text-green-600">99.8%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Manual Work</span>
                        <span className="font-semibold text-green-600">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Implementation Journey
              </h2>
              <p className="text-xl text-muted-foreground">8-week transformation from concept to full automation</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1",
                  weeks: "Weeks 1-2",
                  title: "MCP Server Setup",
                  description: "Infrastructure deployment and system integrations",
                  color: "bg-blue-500",
                },
                {
                  phase: "Phase 2",
                  weeks: "Weeks 3-4",
                  title: "AI Model Training",
                  description: "Training on 50,000+ historical ticket data",
                  color: "bg-green-500",
                },
                {
                  phase: "Phase 3",
                  weeks: "Weeks 5-6",
                  title: "Pilot Deployment",
                  description: "Limited rollout with monitoring and fine-tuning",
                  color: "bg-purple-500",
                },
                {
                  phase: "Phase 4",
                  weeks: "Weeks 7-8",
                  title: "Full Automation",
                  description: "Complete rollout with team training",
                  color: "bg-orange-500",
                },
              ].map((phase, index) => (
                <Card key={index} className="border-0 bg-gradient-to-r from-background to-blue-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold text-lg">{phase.phase}</h3>
                          <Badge variant="outline">{phase.weeks}</Badge>
                        </div>
                        <h4 className="font-semibold mb-1">{phase.title}</h4>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Eliminate Production Support Bottlenecks?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your support operations with autonomous AI agents that never sleep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50">
                Schedule Demo
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Explore MCP Architecture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Success Stories</h2>
              <p className="text-xl text-muted-foreground">Explore more AI automation transformations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-gradient-to-br from-background to-blue-50/30 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline">E-commerce</Badge>
                  </div>
                  <CardTitle className="text-xl">Dynamic SEO Optimization</CardTitle>
                  <p className="text-muted-foreground">
                    AI-powered URL canonicalization preserving SEO value beyond seasonal campaigns
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">67% customer return success</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/case-studies/dynamic-seo-optimization">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-background to-green-50/30 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline">Retail</Badge>
                  </div>
                  <CardTitle className="text-xl">AI Content Generation</CardTitle>
                  <p className="text-muted-foreground">
                    From 13 copywriters to 2 with automated product description creation at scale
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">92% reduction in manual work</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/case-studies/ai-content-generation">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
