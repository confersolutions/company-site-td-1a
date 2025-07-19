import type { Metadata } from "next"
import SalesAgentClientPage from "./SalesAgentClientPage"

export const metadata: Metadata = {
  title: "AI Mortgage Sales Agent | Never Miss a Deal | Confer Solutions AI",
  description:
    "Revolutionize your mortgage sales with AI that ensures 100% compliance, maximizes conversion rates, and operates 24/7 across every communication channel.",
}

export default function SalesAgentPage() {
  return <SalesAgentClientPage />
}
