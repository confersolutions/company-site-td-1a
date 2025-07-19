import { CheckCircle, Clock, Shield, Zap } from "lucide-react"
import Image from "next/image"

export function WhyConferEnhanced() {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Automation",
      description:
        "Streamline operations and reduce manual tasks with intelligent automation powered by cutting-edge AI technology.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: "85% reduction in manual processing",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Accuracy",
      description:
        "Enhance decision-making with precise data analysis and insights, minimizing errors and improving outcomes.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: "99.5% accuracy rate",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Compliance",
      description:
        "Stay ahead of regulatory requirements with AI-powered compliance monitoring and risk assessment tools.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: "100% regulatory compliance",
      gradient: "from-purple-600 to-indigo-700",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Speed",
      description:
        "Accelerate processes and response times, delivering faster service to your customers and stakeholders.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      stats: "10x faster processing",
      gradient: "from-amber-600 to-orange-700",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Confer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered solutions deliver tangible benefits that transform how financial institutions operate and
            serve their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-lg border border-border card-hover">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-80`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit">{benefit.icon}</div>
                  <div>
                    <div className="text-white/90 text-sm font-medium mb-1">{benefit.stats}</div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6">
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
