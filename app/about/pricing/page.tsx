import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  BarChart3,
  MessageSquare,
  Phone,
  Users,
  FileText,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | Confer Solutions AI",
  description: "Transparent pricing for AI-powered solutions. Chatbots, Voice Agents, Consulting, and Custom Projects.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Choose the perfect AI solution for your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              <TabsTrigger value="chatbot" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Chatbot
              </TabsTrigger>
              <TabsTrigger value="voice" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Voice Agent
              </TabsTrigger>
              <TabsTrigger value="consulting" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Consulting
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                SOW Projects
              </TabsTrigger>
              <TabsTrigger value="hosting" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Hosting
              </TabsTrigger>
            </TabsList>

            {/* Chatbot Pricing */}
            <TabsContent value="chatbot" id="chatbot">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-fintech-600" />
                      Basic AI Chatbot Package
                    </CardTitle>
                    <CardDescription>Perfect for launching a single chatbot with essential features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      $2,000 <span className="text-sm font-normal text-muted-foreground">setup</span>
                    </div>
                    <div className="text-xl font-semibold mb-6">
                      + $100<span className="text-sm font-normal">/month support</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      (OpenAI/Groq/LLM usage is billed directly to client via passthrough)
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />1 chatbot setup
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Standard knowledge base
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Email support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Confer-hosted
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Pass-through API billing (OpenAI, Groq, etc.)
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="relative border-fintech-500 border-2">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fintech-600">
                    Best Value
                  </Badge>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-fintech-600" />
                      Growth Plan – Up to 3 Chatbots
                    </CardTitle>
                    <CardDescription>Best value for teams or multiple departments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      $3,000 <span className="text-sm font-normal text-muted-foreground">setup</span>
                    </div>
                    <div className="text-xl font-semibold mb-6">
                      + $150<span className="text-sm font-normal">/month support</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">(Client may use their own LLM API keys)</div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Everything in Basic
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Setup of 3 chatbots
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Document memory (RAG)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Analytics dashboard
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Confer-hosted or self-hosted
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Bring-your-own-key (OpenAI, Groq, Claude, etc.)
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-fintech-600" />
                      Enterprise
                    </CardTitle>
                    <CardDescription>Tailored solutions for complex needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">Custom Pricing</div>
                    <div className="text-xl font-semibold mb-6 text-muted-foreground">Contact us</div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Everything in Growth Plan
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Unlimited chatbot support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Custom data pipelines & integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        White-label options
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        SLA-backed support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Dedicated account manager
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Voice Agent Pricing */}
            <TabsContent value="voice" id="voice-agent">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-fintech-600" />
                      Voice Agent Base
                    </CardTitle>
                    <CardDescription>AI-powered voice interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $1,000 <span className="text-sm font-normal text-muted-foreground">setup</span>
                      + $100
                      <span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        AI call handling
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Incoming and outgoing calls
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Call logging
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Standard voice models
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="border-fintech-500 border-2">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fintech-600">
                    Recommended
                  </Badge>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-fintech-600" />
                      Voice Agent Pro
                    </CardTitle>
                    <CardDescription>Advanced voice capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $1,500 <span className="text-sm font-normal text-muted-foreground">setup</span>+ $500
                      <span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Everything in Base
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Multilingual support (+$50/month)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Call summaries
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        CRM integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        VAPI-powered deployment
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Voice Agent Bundles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Intake Assistant</h4>
                    <p className="text-muted-foreground text-sm">Perfect for lead qualification</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Mortgage Q&A</h4>
                    <p className="text-muted-foreground text-sm">Answer common mortgage questions</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Legal Advisor</h4>
                    <p className="text-muted-foreground text-sm">Compliance-focused interactions</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Consulting Pricing */}
            <TabsContent value="consulting" id="consulting">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-fintech-600" />
                      Light Support
                    </CardTitle>
                    <CardDescription>5 hours per week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $3,000<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Light implementation support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Weekly strategy calls
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Email support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Basic prompt design
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="border-fintech-500 border-2">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fintech-600">Popular</Badge>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-fintech-600" />
                      Mid-Size Engagement
                    </CardTitle>
                    <CardDescription>10 hours per week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $5,000<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Strategy + PoC development
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Bi-weekly strategy sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Advanced prompt design
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Technical coaching
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Priority support
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-fintech-600" />
                      Fractional AI Architect
                    </CardTitle>
                    <CardDescription>20 hours per month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $8,000<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Dedicated AI architect
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Custom AI strategy
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Full technical implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Team training & coaching
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        24/7 support access
                      </li>
                    </ul>
                    <Button className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* SOW Projects */}
            <TabsContent value="projects" id="projects">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-fintech-600" />
                      Agentic AI Roadmap
                    </CardTitle>
                    <CardDescription>Complete AI strategy for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $15,000<span className="text-sm font-normal"> fixed price</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Comprehensive AI assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Custom implementation roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        ROI projections & timelines
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Technology recommendations
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        6-month implementation plan
                      </li>
                    </ul>
                    <Button className="w-full">Start Project</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-fintech-600" />
                      Knowledge Bot for Intranet
                    </CardTitle>
                    <CardDescription>Custom internal knowledge assistant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $25,000<span className="text-sm font-normal"> fixed price</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Custom knowledge base setup
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Document ingestion & processing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Intranet integration
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        User access controls
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Training & documentation
                      </li>
                    </ul>
                    <Button className="w-full">Start Project</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Project?</h3>
                <p className="text-muted-foreground mb-6">
                  We create custom AI solutions tailored to your specific business needs. Contact us for a personalized
                  quote.
                </p>
                <Button size="lg">Request Custom Quote</Button>
              </div>
            </TabsContent>

            {/* Hosting & Infrastructure */}
            <TabsContent value="hosting" id="hosting">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-fintech-600" />
                      Basic Hosting
                    </CardTitle>
                    <CardDescription>Perfect for small chatbots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $50<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Chatbot hosting
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Basic logging
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Supabase & Flowise included
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        99.9% uptime SLA
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Standard support
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="border-fintech-500 border-2">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fintech-600">
                    Most Popular
                  </Badge>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-fintech-600" />
                      Pro Hosting
                    </CardTitle>
                    <CardDescription>Full-featured AI infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">
                      $200<span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Chatbot + Voice hosting
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Advanced analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Coolify container included
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Supabase & Flowise included
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Qdrant & Weaviate included
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Priority support
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-fintech-600" />
                      Custom Infrastructure
                    </CardTitle>
                    <CardDescription>Bring your own stack</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-6">Custom</div>
                    <div className="text-xl font-semibold mb-6 text-muted-foreground">Contact us</div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        BYO stack deployment
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Tenant-level access
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Dedicated support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Enterprise SLA
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Add-On Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-fintech-100 dark:bg-fintech-900 rounded-lg p-4 mb-4">
                      <BarChart3 className="h-8 w-8 text-fintech-600 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground mb-2">$250 setup + $20/month</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-fintech-100 dark:bg-fintech-900 rounded-lg p-4 mb-4">
                      <Phone className="h-8 w-8 text-fintech-600 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Voice Summary Logging</h4>
                    <p className="text-sm text-muted-foreground mb-2">$100/month</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-fintech-100 dark:bg-fintech-900 rounded-lg p-4 mb-4">
                      <FileText className="h-8 w-8 text-fintech-600 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Document Memory (RAG)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Priced by token/file volume</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-fintech-100 dark:bg-fintech-900 rounded-lg p-4 mb-4">
                      <Globe className="h-8 w-8 text-fintech-600 mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2">Bilingual Support</h4>
                    <p className="text-sm text-muted-foreground mb-2">+$50/month per bot</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the perfect plan for your business or contact us for a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-fintech-600 hover:bg-fintech-700">
              <DollarSign className="mr-2 h-5 w-5" />
              Start Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
