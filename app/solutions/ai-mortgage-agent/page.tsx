import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Brain, Database, Server, Lock, Zap, BarChart3 } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "AI Mortgage Agent Solutions | Confer Solutions",
  description:
    "Deploy autonomous AI mortgage agents that revolutionize lending operations. From application to closing, experience intelligent automation with 99.9% accuracy.",
}

export default function AIMortgageAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI Mortgage Agent for Autonomous Lending Operations
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Deploy intelligent AI agents that revolutionize mortgage lending from application to closing. Experience
                autonomous processing that reduces cycle time by 75% while maintaining 99.9% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-900 hover:bg-white/90">
                  Schedule a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AI Mortgage Agent Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

                {/* AI Agent interface overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                          AI
                        </div>
                        <span className="font-semibold">Mortgage Agent</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div className="space-y-3 overflow-y-auto h-[calc(100%-50px)]">
                      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <Brain className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-sm font-semibold">Processing Application #45789</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          ✓ Documents extracted and validated
                          <br />✓ Income verification completed
                          <br />✓ Credit analysis in progress...
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm font-semibold">Underwriting Decision</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          Application approved with conditions
                          <br />
                          Rate: 6.75% | Term: 30 years
                          <br />
                          Conditions: Updated employment letter
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <Zap className="w-4 h-4 text-purple-600 mr-2" />
                          <span className="text-sm font-semibold">Next Actions</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          • Send approval letter to borrower
                          <br />• Schedule closing appointment
                          <br />• Generate closing documents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Mortgage Agent Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is an AI Mortgage Agent?</h2>
            <p className="text-xl text-muted-foreground">
              An AI Mortgage Agent is an autonomous system that handles the entire mortgage lending process from
              application intake to closing, using advanced machine learning and natural language processing to make
              intelligent decisions at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Traditional Mortgage Processing Challenges</h3>
                  <p className="text-muted-foreground">
                    Manual document review, lengthy approval times, human error in data entry, inconsistent
                    decision-making, and high operational costs plague traditional mortgage operations.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">The AI Agent Advantage</h3>
                  <p className="text-muted-foreground">
                    AI Mortgage Agents automate the entire process with intelligent document processing, instant
                    underwriting decisions, consistent application of lending criteria, and 24/7 operation capability.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Implementation</h3>
                  <p className="text-muted-foreground">
                    Our AI agents integrate seamlessly with existing loan origination systems, maintain full audit
                    trails, ensure regulatory compliance, and provide real-time performance analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-6 text-center">AI Agent Workflow</h3>
                <div className="relative h-[400px]">
                  <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Application Intake</h4>
                        <p className="text-xs text-muted-foreground">Automated document collection and validation</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[20%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Data Processing</h4>
                        <p className="text-xs text-muted-foreground">AI extracts and validates all loan data</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Risk Assessment</h4>
                        <p className="text-xs text-muted-foreground">ML models evaluate creditworthiness</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Underwriting Decision</h4>
                        <p className="text-xs text-muted-foreground">Automated approval with conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[80%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Closing Coordination</h4>
                        <p className="text-xs text-muted-foreground">Document generation and scheduling</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <div className="absolute top-[12%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[32%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[52%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[72%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Confer's AI Mortgage Agent leverages cutting-edge artificial intelligence and machine learning
              technologies to deliver enterprise-grade autonomous lending solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-6">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Document Processing</h3>
              <p className="text-muted-foreground mb-4">
                Advanced OCR and NLP models extract and validate data from loan documents with 99.9% accuracy, including
                pay stubs, bank statements, tax returns, and property appraisals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-format document support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time data validation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fraud detection capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg w-fit mb-6">
                <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning Underwriting</h3>
              <p className="text-muted-foreground mb-4">
                Proprietary ML models trained on millions of loan decisions provide instant, accurate underwriting
                decisions while maintaining full explainability for regulatory compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sub-second decision making</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Explainable AI decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Continuous model improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit mb-6">
                <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Integration</h3>
              <p className="text-muted-foreground mb-4">
                Seamless integration with existing loan origination systems, core banking platforms, and third-party
                services through robust APIs and secure data connectors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">RESTful API architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time data synchronization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Scalable cloud infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg w-fit mb-6">
                <Lock className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground mb-4">
                Bank-grade security with end-to-end encryption, comprehensive audit trails, and built-in compliance
                monitoring for all major financial regulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">GDPR and CCPA compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complete audit trails</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
              <p className="text-muted-foreground mb-4">
                High-performance processing engine handles thousands of concurrent loan applications with sub-second
                response times and 99.9% uptime guarantee.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Parallel processing architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Auto-scaling capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 monitoring and alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive analytics dashboard provides real-time insights into loan pipeline, agent performance, and
                business metrics with customizable reporting capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Customizable dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Automated reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-xl text-muted-foreground">
                Our AI Mortgage Agent uses a modular architecture with state-of-the-art components for autonomous
                lending operations.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center">
                <div className="flex space-x-1 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">ai_mortgage_agent.py</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-python">
                  {`# Confer's AI Mortgage Agent Implementation

from typing import Dict, List, Any
import asyncio
from datetime import datetime
from dataclasses import dataclass

@dataclass
class LoanApplication:
    application_id: str
    borrower_info: Dict[str, Any]
    documents: List[Dict[str, Any]]
    status: str = "received"
    
class AIMortgageAgent:
    """Autonomous AI agent for end-to-end mortgage processing."""
    
    def __init__(self, config: Dict[str, Any]):
        self.document_processor = DocumentProcessor()
        self.underwriting_engine = UnderwritingEngine()
        self.compliance_checker = ComplianceChecker()
        self.decision_engine = DecisionEngine()
        
    async def process_application(self, application: LoanApplication) -> Dict[str, Any]:
        """Process mortgage application autonomously."""
        
        # Step 1: Document Processing & Validation
        print(f"Processing application {application.application_id}")
        
        extracted_data = await self.document_processor.extract_data(
            application.documents
        )
        
        validation_result = await self.document_processor.validate_data(
            extracted_data
        )
        
        if not validation_result.is_valid:
            return self._request_additional_documents(validation_result.missing_items)
        
        # Step 2: Credit and Risk Assessment
        credit_analysis = await self.underwriting_engine.analyze_credit(
            borrower_info=application.borrower_info,
            financial_data=extracted_data
        )
        
        risk_score = await self.underwriting_engine.calculate_risk_score(
            credit_analysis, extracted_data
        )
        
        # Step 3: Compliance Verification
        compliance_result = await self.compliance_checker.verify_compliance(
            application, extracted_data, credit_analysis
        )
        
        if not compliance_result.compliant:
            return self._handle_compliance_issues(compliance_result.issues)
        
        # Step 4: Underwriting Decision
        decision = await self.decision_engine.make_decision(
            risk_score=risk_score,
            credit_analysis=credit_analysis,
            loan_parameters=extracted_data.loan_details
        )
        
        # Step 5: Generate Response
        response = await self._generate_decision_response(
            application, decision, risk_score
        )
        
        # Step 6: Initiate Next Steps
        if decision.approved:
            await self._initiate_closing_process(application, decision)
        
        return response
        
    async def _generate_decision_response(
        self, 
        application: LoanApplication, 
        decision: Any, 
        risk_score: float
    ) -> Dict[str, Any]:
        """Generate comprehensive decision response."""
        
        return {
            "application_id": application.application_id,
            "decision": decision.status,
            "loan_amount": decision.approved_amount,
            "interest_rate": decision.interest_rate,
            "loan_term": decision.term_months,
            "conditions": decision.conditions,
            "risk_score": risk_score,
            "processing_time": decision.processing_time,
            "next_steps": decision.next_steps,
            "timestamp": datetime.now().isoformat()
        }
        
    async def monitor_pipeline(self) -> Dict[str, Any]:
        """Monitor loan pipeline and agent performance."""
        
        return {
            "active_applications": await self._count_active_applications(),
            "processing_times": await self._calculate_avg_processing_time(),
            "approval_rate": await self._calculate_approval_rate(),
            "agent_utilization": await self._get_agent_utilization(),
            "compliance_score": await self._get_compliance_score()
        }

# Usage Example
async def main():
    agent = AIMortgageAgent(config={
        "model_version": "v2.1",
        "risk_threshold": 0.75,
        "compliance_rules": "CFPB_2024"
    })
    
    # Process new application
    application = LoanApplication(
        application_id="APP-2024-001",
        borrower_info={"name": "John Doe", "ssn": "***-**-1234"},
        documents=[{"type": "paystub", "url": "..."}, {"type": "bank_statement", "url": "..."}]
    )
    
    result = await agent.process_application(application)
    print(f"Decision: {result['decision']} in {result['processing_time']}ms")

if __name__ == "__main__":
    asyncio.run(main())`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mortgage Lending Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI Mortgage Agents are deployed across various lending scenarios, delivering measurable business value
              and enhanced customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Purchase Loans</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Streamline home purchase financing with instant pre-approvals, automated document processing, and
                  coordinated closing schedules that reduce time-to-close by 60%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Instant pre-approval decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated appraisal coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time status updates</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 60% faster closing, 45% reduction in fallout rate
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-green-600 to-emerald-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Refinancing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Automate refinance processing with intelligent rate analysis, equity calculations, and streamlined
                  documentation that delivers decisions in minutes, not days.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated rate-term analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Instant equity verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cash-out optimization</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 70% faster processing, 35% increase in volume
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Commercial Lending</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Handle complex commercial mortgage applications with sophisticated financial analysis, multi-entity
                  structures, and comprehensive risk assessment capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-entity analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cash flow modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Property valuation integration</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 50% faster underwriting, 25% improvement in accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
