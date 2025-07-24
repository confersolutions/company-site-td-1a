import { TrendingUp, Target, Shield, Zap } from "lucide-react"
import Image from "next/image"

export function WhyConferSection() {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-fintech-600" />,
      title: "Automation",
      description:
        "Streamline operations and reduce manual tasks with intelligent automation powered by cutting-edge AI technology.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Target className="h-10 w-10 text-fintech-600" />,
      title: "Accuracy",
      description:
        "Enhance decision-making with precise data analysis and insights, minimizing errors and improving outcomes.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Shield className="h-10 w-10 text-fintech-600" />,
      title: "Compliance",
      description:
        "Stay ahead of regulatory requirements with AI-powered compliance monitoring and risk assessment tools.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-fintech-600" />,
      title: "Speed",
      description:
        "Accelerate processes and response times, delivering faster service to your customers and stakeholders.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Top Companies Choose Confer Inc. for AI Powered Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered solutions deliver tangible benefits that transform how financial institutions operate and
            serve their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md border border-border card-hover">
              <div className="relative h-48 w-full">
                <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-lg">{benefit.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
