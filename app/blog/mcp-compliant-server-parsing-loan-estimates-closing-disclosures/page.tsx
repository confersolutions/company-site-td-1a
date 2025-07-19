import { ArrowLeft, Calendar, User, Clock, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MCPServerBlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* Title and Meta */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            MCP-Compliant Server for Parsing Loan Estimates (LE) and Closing Disclosures (CD)
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Yatin Karnik</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>April 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/blog/mcp-server-blog.png"
              alt="MCP Server Architecture Diagram"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">
            Why the Mortgage Industry Needs a Canonical Adapter for PDF-to-LLM Transformation—And How We Built It
          </h2>

          <h3 className="text-xl font-semibold mb-3">
            The Problem: Inconsistent, Unstructured, and LLM-Unfriendly LE and CD Data
          </h3>

          <p className="mb-4">
            Every mortgage transaction starts and ends with two critical documents: the Loan Estimate (LE) and Closing
            Disclosure (CD). These documents hold the fees, the timelines, the APRs, the tolerances—everything a lender,
            fintech platform, regulator, or analytics engine needs to understand the economics and compliance of a deal.
            Even if you want to use AI all the way from origination to post-close data analytics, including HMDA
            reporting and investor delivery, you still need structured data that maps cleanly to both MISMO standards
            and LLM inputs.
          </p>

          <p className="mb-4">
            But here's the problem: the data in these documents is trapped in PDFs. And every time a system needs to
            extract information from them—whether to pre-fill underwriting systems, feed AI models, or audit
            compliance—they have to reinvent the wheel.
          </p>

          <p className="mb-4">
            Some banks have in-house tools. Even those who have it struggle—most still operate with manual steps in the
            loop, and even the 80th percentile of automation maturity still requires human intervention 20% of the time.
            But even they could benefit from a self-healing AI layer that brings that down to just ~2% human effort.
          </p>

          <p className="mb-6">
            Others rely on vendors. Many still do this manually. Worse, every implementation parses fields differently,
            maps them to slightly different names, and fails silently when layouts change. Despite over a decade of
            effort, a large portion of the industry remains non-compliant with MISMO standards, especially in automated
            workflows.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="font-semibold text-red-800 mb-2">That means:</p>
            <ul className="list-disc list-inside text-red-700 space-y-1">
              <li>Fintechs spend weeks reverse-engineering LE formats just to get basic fields.</li>
              <li>LLMs hallucinate because inputs lack structure, field meaning, or domain nuance.</li>
              <li>
                The same fee might show up in multiple sections, and there's no reliable cross-validation for what
                should appear where. But LLMs now require deterministic input logic, and our structured mapping provides
                exactly that certainty.
              </li>
              <li>Compliance teams miss violations because tolerances or delivery timelines aren't calculated.</li>
              <li>No two systems speak the same mortgage language.</li>
            </ul>
            <p className="text-red-800 mt-2 font-medium">This is expensive, risky, and unsustainable.</p>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            The Opportunity: A Shared, Open MCP Server for LE and CD Parsing
          </h3>

          <p className="mb-4">
            Imagine a world where anyone—a bank, a bot, a compliance platform—could simply send a PDF URL and get back:
          </p>

          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>A structured JSON that matches the MISMO data standard.</li>
            <li>LLM-enriched context like field explanations, summaries, and flags.</li>
            <li>A portable, reviewable codebase that runs on-prem or via a hosted API.</li>
          </ul>

          <p className="mb-4">This isn't just convenient. It's critical infrastructure.</p>

          <p className="mb-6">
            We believe this canonical transformation layer should live in an open MCP (Model Context Protocol) server
            dedicated to LE and CD parsing. It's not trying to replace your models. It's not trying to own your data.
            It's a standardized gateway that transforms messy PDFs into a structured, machine-ready context your systems
            and LLMs can reason over.
          </p>

          <h3 className="text-xl font-semibold mb-3">Our Solution: The LE/CD MCP Server</h3>

          <p className="mb-4">We've built an MCP server that:</p>

          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Parses PDFs of LEs and CDs</li>
            <li>Returns MISMO-compliant JSON (e.g., fees.origination_charges → GFEOriginationCharges)</li>
            <li>
              Adds metadata for LLM context, including:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Field definitions</li>
                <li>Flags ("Fee exceeds standard tolerance")</li>
                <li>Delivery timeline logic</li>
                <li>Calculated APR deltas</li>
              </ul>
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">MVP Scope:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-2 text-blue-900">Tool</th>
                    <th className="text-left py-2 text-blue-900">Input</th>
                    <th className="text-left py-2 text-blue-900">Output</th>
                  </tr>
                </thead>
                <tbody className="text-blue-800">
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-mono">parse_le_to_mismo_json</td>
                    <td className="py-2">pdf_url</td>
                    <td className="py-2">JSON + LLM context</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-mono">parse_cd_to_mismo_json</td>
                    <td className="py-2">pdf_url</td>
                    <td className="py-2">JSON + LLM context</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">(Later) validate_le_cd_consistency</td>
                    <td className="py-2">both JSONs</td>
                    <td className="py-2">pass/fail + flags</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">What Makes This Different?</h3>

          <p className="mb-4">
            <strong>We're not trying to parse every document.</strong> We're going deep, not wide. We specialize in LE
            and CD, because those two documents are the heart of every mortgage transaction.
          </p>

          <p className="mb-4">
            <strong>We don't replace your LLMs.</strong> We supercharge them with enriched, trustworthy inputs. You can
            use any LLM you want. You can create your own reasoning pipelines. But no matter how good your model is, it
            still needs clean, structured input. Rather than spending time on brittle mapping logic or letting models
            hallucinate, we give you standardized, MISMO compliant JSON—built by mortgage pros.
          </p>

          <p className="mb-4">
            <strong>We aren't asking for your data.</strong> We give you the tools. You can run this on-prem. You can
            inspect every line of code. You can modify it to meet your regulatory, internal, or privacy standards.
          </p>

          <p className="mb-6">
            <strong>This isn't vendor lock-in. This is industry collaboration.</strong> We're building this out in the
            open, for the benefit of everyone—so no lender, fintech, or compliance team ever needs to solve this problem
            again. We believe this should be a shared layer—like HTTP, not another proprietary tool.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center">
            <p className="text-green-800 font-semibold text-lg">
              Let's work together. Help us make this the standard the industry deserves.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">How We Built It</h3>

          <p className="mb-6">
            We started with best-in-class PDF parsers and fine-tuned the pipeline to extract mortgage-specific data
            blocks. Each block is mapped to MISMO field names, and enriched with metadata.
          </p>

          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Github className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm">GitHub CI • Codecov • MIT License • Python 3.9+</span>
            </div>
            <Link
              href="https://github.com/confersolutions/mcp-mortgage-server"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
              View the full source code on GitHub: confersolutions/mcp-mortgage-server
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <h3 className="text-xl font-semibold mb-3">Why the Industry Needs It Now</h3>

          <p className="mb-4">
            Every LLM-powered mortgage assistant. Every pre-underwriting automation. Every compliance validation engine.
            They all need the same thing: structured, contextual data from LE and CD PDFs.
          </p>

          <p className="mb-4">
            Even consumer-facing AI apps—something as simple as a chatbot that answers "What fees are listed on my
            LE?"—need a deterministic, reliable way to extract information from these documents without hallucinations
            or inconsistencies. Whether it's fetching fee breakdowns, answering borrower questions, or performing
            agentic flows like summarizing key terms, the foundation has to be structured, mapped, and consistent.
          </p>

          <p className="mb-4">
            And for decisioning engines—whether rule-based or powered by AI—the need is even greater. Lenders building
            systems to decide next-best actions, pricing strategies, or exception handling workflows depend on clean
            inputs. Without standardized mappings and validation logic, these systems are prone to error.
          </p>

          <p className="mb-6">
            Not to mention compliance. Critical Control Validation (CCV) tasks, tolerance flagging, and delivery checks
            must someday be automated too—and they will likely be performed by AI agents. These agents will need a
            canonical, explainable, and trusted data format to operate at scale.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-blue-900 font-medium">
              By standardizing this once and for all, we save every player in the ecosystem hundreds of engineering
              hours, reduce risk, and eliminate fragmentation. But more importantly, we free up innovation.
            </p>
            <p className="text-blue-800 mt-2">
              Let every team—big bank, nimble fintech, AI startup—focus on building reasoning models, rich workflows,
              and intelligent assistants. Let them think about how to think. And let this open-source MCP server be the
              dependable bridge—transparent, interpretable, and trusted—to get them the data they need to do it.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">Example: Parsing LE PDF to JSON</h3>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm">
              {`# Example: Parsing LE PDF to JSON
result = parse_le_to_mismo_json(pdf_url="https://example.com/le.pdf")

# Output (early structure, actively expanding for CCV, HMDA, and compliance reasoning)
{
  "GFEOriginationCharges": {
    "value": 2500,
    "description": "Charges by lender for originating the loan",
    "flags": ["Above typical range for 1% origination cap"],
    "tolerance_bucket": "Limited Increase",
    "source_location": "Page 2, Section A"
  },
  "APRDelta": 0.31,
  "DeliveryTimeline": {
    "received_by_borrower": "2024-03-01",
    "days_to_close": 12,
    "compliance_check": "Pass"
  },
  "HMDA": {
    "loan_purpose": "Home purchase",
    "property_type": "Single-family",
    "loan_term": 30
  },
  "CCVChecks": [
    {
      "check": "Origination Fee within Tolerance",
      "status": "Pass",
      "reference_rule": "12 CFR 1026.19"
    },
    {
      "check": "Delivery within Required Timeline",
      "status": "Pass",
      "reference_rule": "TRID Timing Requirements"
    }
  ]
}`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">Self-Hosting Sample Setup</h3>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm">
              {`# Clone and run MCP server locally
git clone https://github.com/confersolutions/mcp-mortgage-server.git
cd mcp-mortgage-server
pip install -r requirements.txt
python main.py`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">Agent Prompting Example with LLM Integration</h3>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm">
              {`# Example prompt injection with JSON and enriched metadata
prompt = f"""
You are a mortgage compliance AI assistant.
Given the following structured LE data:
{json.dumps(le_json, indent=2)}
Identify any tolerance violations or unusual fees.
"""
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
)`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold mb-3">Validating LE and CD Consistency (Future scope)</h3>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm">
              {`# Example: Validating consistency between LE and CD
result = validate_le_cd_consistency(le_json, cd_json)

# Output
{
  "status": "fail",
  "issues": [
    {
      "field": "TotalClosingCosts",
      "le_value": 8234,
      "cd_value": 8910,
      "discrepancy": 676,
      "tolerance_exceeded": true
    }
  ]
}`}
            </pre>
          </div>

          <p className="text-center text-lg font-medium mb-8">
            Please help shape the future of AI-driven mortgage data infrastructure.
          </p>

          <h3 className="text-xl font-semibold mb-3">Join the Movement</h3>

          <p className="mb-4">
            We're inviting banks, fintechs, AI companies, and regulators to adopt this as the industry standard. Help us
            refine it. Help us keep it accurate and up-to-date. Help make the mortgage stack finally LLM-ready.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-6 text-center">
            <p className="text-lg font-semibold mb-2">Explore the GitHub repo:</p>
            <Link
              href="https://github.com/confersolutions/mcp-mortgage-server"
              className="text-blue-100 hover:text-white transition-colors inline-flex items-center gap-1 text-lg"
            >
              github.com/confersolutions/mcp-mortgage-server
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-center text-lg font-medium text-primary">
            Let's stop reinventing the wheel. Let's build the adapter layer the industry needs.
          </p>
        </div>
      </article>
    </div>
  )
}
