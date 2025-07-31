import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - Confer Solutions AI",
  description: "Insights and perspectives on AI innovation in financial services by Yatin Karnik.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
