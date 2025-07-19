"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ConsultationButton } from "@/components/consultation-button"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/images/confer-logo.png" alt="Confer Solutions AI Logo" className="h-10 w-10 mr-2 rounded" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Confer Solutions AI
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex space-x-6">
              <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </Link>

              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("industries")}
                  className="flex items-center text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
                >
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "industries" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        href="/industries/finance-mortgage"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Finance & Mortgage
                      </Link>
                      <Link
                        href="/industries/retail-ecommerce"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Retail & E-commerce
                      </Link>
                      <Link
                        href="/industries/healthcare"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Healthcare
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Our AI Agents Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("agents")}
                  className="flex items-center text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
                >
                  Our AI Agents
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "agents" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        href="/ai-agents/autonomous-mortgage-bank"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Autonomous AI Mortgage Bank
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <Link
                        href="/ai-agents/sales-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Sales Agent
                      </Link>
                      <Link
                        href="/ai-agents/processing-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Processing Agent
                      </Link>
                      <Link
                        href="/ai-agents/underwriting-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Underwriting Agent
                      </Link>
                      <Link
                        href="/ai-agents/closing-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Closing Agent
                      </Link>
                      <Link
                        href="/ai-agents/post-closing-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Post-Closing Agent
                      </Link>
                      <Link
                        href="/ai-agents/voice-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Voice Agent
                      </Link>
                      <Link
                        href="/ai-agents/worker-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Worker Agent
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        href="/solutions"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        All Solutions
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <Link
                        href="/solutions/ai-mortgage-agent"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        AI Mortgage Agent
                      </Link>
                      <Link
                        href="/solutions/rag-chatbot"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        RAG Chatbot
                      </Link>
                      <Link
                        href="/solutions/document-processing"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Document Processing
                      </Link>
                      <Link
                        href="/solutions/risk-assessment"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Risk Assessment
                      </Link>
                      <Link
                        href="/solutions/data-analytics"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Data Analytics
                      </Link>
                      <Link
                        href="/solutions/fraud-detection"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Fraud Detection
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/blog"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/about/newsroom"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        onClick={closeDropdowns}
                      >
                        Newsroom
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <ConsultationButton size="sm">Get a Demo</ConsultationButton>
            </div>
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Home
              </Link>

              {/* Mobile Industries Menu */}
              <div className="py-2">
                <div className="text-foreground/80 font-medium mb-2">Industries</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/industries/finance-mortgage"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Finance & Mortgage
                  </Link>
                  <Link
                    href="/industries/retail-ecommerce"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Retail & E-commerce
                  </Link>
                  <Link
                    href="/industries/healthcare"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Healthcare
                  </Link>
                </div>
              </div>

              {/* Mobile AI Agents Menu */}
              <div className="py-2">
                <div className="text-foreground/80 font-medium mb-2">Our AI Agents</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/ai-agents/autonomous-mortgage-bank"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Autonomous AI Mortgage Bank
                  </Link>
                  <Link
                    href="/ai-agents/sales-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Sales Agent
                  </Link>
                  <Link
                    href="/ai-agents/processing-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Processing Agent
                  </Link>
                  <Link
                    href="/ai-agents/underwriting-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Underwriting Agent
                  </Link>
                  <Link
                    href="/ai-agents/closing-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Closing Agent
                  </Link>
                  <Link
                    href="/ai-agents/post-closing-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Post-Closing Agent
                  </Link>
                  <Link
                    href="/ai-agents/voice-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Voice Agent
                  </Link>
                  <Link
                    href="/ai-agents/worker-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Worker Agent
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions Menu */}
              <div className="py-2">
                <div className="text-foreground/80 font-medium mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/solutions"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    All Solutions
                  </Link>
                  <Link
                    href="/solutions/ai-mortgage-agent"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    AI Mortgage Agent
                  </Link>
                  <Link
                    href="/solutions/rag-chatbot"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    RAG Chatbot
                  </Link>
                  <Link
                    href="/solutions/document-processing"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Document Processing
                  </Link>
                  <Link
                    href="/solutions/risk-assessment"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Risk Assessment
                  </Link>
                  <Link
                    href="/solutions/data-analytics"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Data Analytics
                  </Link>
                  <Link
                    href="/solutions/fraud-detection"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Fraud Detection
                  </Link>
                </div>
              </div>

              {/* Mobile About Menu */}
              <div className="py-2">
                <div className="text-foreground/80 font-medium mb-2">About</div>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block text-foreground/60 hover:text-foreground transition-colors py-1">
                    About Us
                  </Link>
                  <Link href="/blog" className="block text-foreground/60 hover:text-foreground transition-colors py-1">
                    Blog
                  </Link>
                  <Link
                    href="/about/newsroom"
                    className="block text-foreground/60 hover:text-foreground transition-colors py-1"
                  >
                    Newsroom
                  </Link>
                </div>
              </div>

              <Link href="/about/contact" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Contact
              </Link>
              <ConsultationButton className="w-full mt-2">Get a Demo</ConsultationButton>
            </nav>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdowns} />}
    </header>
  )
}
