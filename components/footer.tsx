"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { ConsultationModal } from "./consultation-modal"

export function Footer() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <img src="/images/confer-logo.png" alt="Confer Solutions AI Logo" className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                  Confer Inc.
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Confer specializes in AI-powered business solutions that automate workflows, enhance decision-making, and
              drive measurable impact. Our AI-driven tools empower businesses to work smarter, innovate faster, and
              scale with confidence.
              <br />
              <br />
              Discover how AI can transform your business today.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/Confer.today"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/confer_inc"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/80769992/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/mortgage.mentorpro/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions/ai-mortgage-agent"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Mortgage Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/rag-chatbot"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  RAG Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/document-processing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Document Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/risk-assessment"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/data-analytics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fraud-detection"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fraud Detection
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agents/autonomous-mortgage-bank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Autonomous AI Bank
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our AI Agents</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ai-agents/sales-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sales Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agents/processing-agent"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Processing Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agents/underwriting-agent"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Underwriting Agent
                </Link>
              </li>
              <li>
                <Link href="/ai-agents/closing-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Closing Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-agents/post-closing-agent"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Post-Closing Agent
                </Link>
              </li>
              <li>
                <Link href="/ai-agents/voice-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Voice Agent
                </Link>
              </li>
              <li>
                <Link href="/ai-agents/worker-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Worker Agent
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-muted-foreground">Corporate HQ</div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <div>7540 TX-121 Suite 200,</div>
                  <div>McKinney, TX 75070,</div>
                  <div>United States</div>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">(469) 945-7357</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">info@confersolutions.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 | All Rights Reserved Confer Inc
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about/eula" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                End User License Agreement
              </Link>
              <Link href="/about/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/about/disclaimers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Disclaimers
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        title="Contact Sales"
        buttonText="Send Message"
      />
    </footer>
  )
}

export default Footer;
