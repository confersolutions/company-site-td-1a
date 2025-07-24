import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIWorkflowSection() {
  const workflowSteps = [
    {
      step: "1",
      title: "Assessment & Strategy",
      description: "We analyze your current processes and identify AI opportunities",
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom AI solutions tailored to your specific business needs",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Seamless integration with your existing systems and workflows",
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuous monitoring and improvement for maximum ROI",
    },
  ]

  return (
    <section className="py-24 bg-fintech-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Workflow</h2>
            <p className="text-xl text-white/80">
              A step-by-step guide to how our AI/ML solutions integrate with your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8">
                    <ArrowRight className="h-5 w-5 text-white/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="secondary">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
