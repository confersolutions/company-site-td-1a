import type { Metadata } from "next"
import ClosingAgentClientPage from "./ClosingAgentClientPage"

export const metadata: Metadata = {
  title: "Closing Agent | AI-Powered Mortgage Closing Coordination | Confer Solutions AI",
  description:
    "Eliminate wire fraud, tolerance violations, and closing delays with AI that coordinates every detail across all parties while ensuring perfect compliance.",
}

export default function ClosingAgentPage() {
  return <ClosingAgentClientPage />
}
