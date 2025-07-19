import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Confer Solutions and our mission to transform financial services with AI.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Confer Inc.</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We help businesses design, develop, and deploy AI solutions that enhance efficiency, automate processes, and
          drive measurable impact.
        </p>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Confer Solutions is a leading provider of AI-powered solutions for business transformation. Founded by a
            team of experts in artificial intelligence, machine learning, and financial technology, we're dedicated to
            helping businesses leverage the power of AI to streamline operations, enhance decision-making, and deliver
            exceptional customer experiences.
          </p>

          <p>
            We possess deep expertise in the financial services and mortgage industries, enabling us to provide tailored
            AI solutions that address the unique challenges and opportunities within these sectors.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses with AI-powered solutions that drive innovation, improve efficiency,
            and create sustainable value. We are committed to delivering cutting-edge technology and exceptional service
            to help our clients achieve their strategic goals.
          </p>

          <h2>Our Approach</h2>
          <p>
            We take a collaborative approach to AI implementation, working closely with our clients to understand their
            unique challenges and develop tailored solutions that address their specific needs. Our team combines deep
            expertise in AI and machine learning with extensive knowledge of the financial services industry, enabling
            us to deliver solutions that drive real business value.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> We're constantly pushing the boundaries of what's possible with AI.
            </li>
            <li>
              <strong>Excellence:</strong> We're committed to delivering the highest quality solutions and services.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with transparency and honesty in all our interactions.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of partnership and teamwork.
            </li>
            <li>
              <strong>Impact:</strong> We measure our success by the value we create for our clients.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
