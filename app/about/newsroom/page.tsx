import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ExternalLink, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Confer News Room | Featured in Forbes, Benzinga & Major Financial Publications",
  description:
    "Confer Solutions AI featured in Forbes, Benzinga, National Mortgage News, and 20+ major publications. Latest press coverage of our mortgage technology innovations.",
}

export default function NewsroomPage() {
  const featuredArticles = [
    {
      title: "How The Big Short Educated A Generation On The Financial Crisis Of 2008",
      publication: "Forbes",
      date: "March 29, 2022",
      logo: "/images/media/Forbes_logo-1-768x213.webp",
      category: "Industry Analysis",
      excerpt: "Oscar-winning 2015 adaption of Michael Lewis' book, of the same...",
      featured: true,
    },
    {
      title: "When Mortgage Rates Dipped, Fees And Charges Soared",
      publication: "Benzinga",
      date: "March 29, 2022",
      logo: "/images/media/benzinga-logo.webp",
      category: "Market Analysis",
      excerpt:
        "Let's be clear: anyone who has bought or owned a home over the past twenty years won the interest rate lottery. After peaking at 18.45% in 1982, the height of the so-called Reagan Recession...",
      featured: true,
    },
    {
      title: "Loan Estimates and the CFPB",
      publication: "MarketDaily",
      date: "March 29, 2022",
      logo: "/images/media/Market-Daily-White-Logo-1-768x213.webp",
      category: "Regulatory",
      excerpt:
        "July 2010, Congress passed the Dodd-Frank Wall Street Reform and Consumer Protection Act, which then-President Barack Obama signed into law. The law, often referred to as the...",
      featured: true,
    },
  ]

  const allArticles = [
    {
      title: "May was a bad month to buy a home, analysis shows",
      publication: "Consumer Affairs",
      date: "June 7, 2022",
      logo: "/images/media/consumer-affairs-logo.png",
      category: "Market Analysis",
      excerpt:
        "May was the least affordable month to purchase a home in 16 years, according to a new analysis from property data firm Black Knight...",
    },
    {
      title: "CEO shares more thoughts on the market, mortgage demands",
      publication: "Valuation Review",
      date: "June 6, 2022",
      logo: "/images/media/valuation-review-logo.png",
      category: "Executive Interview",
      excerpt:
        "Valuation Review caught up with Yatin Karnik, founder and CEO of mortgage comparison site Confer, Inc., to gain additional marketing insights...",
    },
    {
      title: "American Nightmare: It Costs How Much More to Buy a Home?",
      publication: "TheStreet",
      date: "June 5, 2022",
      logo: "/images/media/thestreet-logo.png",
      category: "Market Analysis",
      excerpt:
        "The U.S. residential real estate market is so hot the heat is keeping young buyers away from the housing sector...",
    },
    {
      title: "Cut Through a Tangled Web of Fees",
      publication: "Scotsman Guide",
      date: "May 31, 2022",
      logo: "/images/media/scotsman-guide-logo.png",
      category: "Consumer Advocacy",
      excerpt:
        "For clients, finding the perfect house and having their offer accepted is harder than ever these days...",
    },
    {
      title: "Title Insurance on the Blockchain",
      publication: "Financial Technology Today",
      date: "May 25, 2022",
      logo: "/images/media/financial-tech-today-logo.png",
      category: "Technology",
      excerpt:
        "Insurance is one of those necessary evils: we know we need it, but it often seems like a waste of money...",
    },
    {
      title: "Help Buyers Avoid Excessive Lending Fees",
      publication: "Residential Specialist",
      date: "May 5, 2022",
      logo: "/images/media/residential-specialist-logo.png",
      category: "Consumer Advocacy",
      excerpt:
        "If you want to help your clients and take your real estate business to the next level, become an expert on...",
    },
    {
      title: "Are Cash Offers Crushing Home Buyer's Dreams?",
      publication: "TalkMarkets",
      date: "April 28, 2022",
      logo: "/images/media/talkmarkets-logo.png",
      category: "Market Analysis",
      excerpt:
        "You're out of luck in this post-pandemic, red-hot housing market if you don't have the cash. Buyers with...",
    },
    {
      title: "Are Cash Offers Crushing Home Buyer's Dreams?",
      publication: "National Mortgage News",
      date: "April 28, 2022",
      logo: "/images/media/national-mortgage-news-logo.webp",
      category: "Market Analysis",
      excerpt:
        "You're out of luck in this post-pandemic, red-hot housing market if you don't have the cash. Buyers with...",
    },
    {
      title: "Case study: Confer fine-tunes online mortgage lending marketplace",
      publication: "MPA",
      date: "April 25, 2022",
      logo: "/images/media/mpa-logo.webp",
      category: "Case Study",
      excerpt: "Confer Inc. is seeking venture capital to help support the development...",
    },
    {
      title: "Industry veteran 'educates' borrowers about being misled",
      publication: "Valuation Review",
      date: "April 13, 2022",
      logo: "/images/media/valuation-review-logo.png",
      category: "Industry Insight",
      excerpt:
        "Home lending industry veteran Yatin Karnik shared with Valuation Review his thoughts on how to better educate borrowers from his article 'Don't...",
    },
    {
      title: "Opinion: Lack of conformity in title fees facilitates predatory lending",
      publication: "HW (Housing Wire)",
      date: "April 13, 2022",
      logo: "/images/media/hw-logo.webp",
      category: "Opinion",
      excerpt: "Title insurance protects borrowers from financial loss if the lender...",
    },
    {
      title: "What are Lender Credits, Lender Concessions, and Over Tolerance?",
      publication: "Los Angeles Wire",
      date: "April 5, 2022",
      logo: "/images/media/los-angeles-wire-logo.webp",
      category: "Educational",
      excerpt: "Most home buyers spend hours — if not, days — comparing numbers. From asking price to real estate...",
    },
    {
      title: "Origination fees can present a web of inconsistencies. Is it time to 'democratize' the lending process?",
      publication: "MReport",
      date: "April 4, 2022",
      logo: "/images/media/mreport-logo.webp",
      category: "Industry Analysis",
      excerpt: "When borrowers seek mortgage loans from lenders, they tend to...",
    },
    {
      title: "Mortgage Tenure: More Than Maturity",
      publication: "US Reporter",
      date: "March 30, 2022",
      logo: "/images/media/us-reporter-logo.webp",
      category: "Industry Insight",
      excerpt:
        "It can be challenging to navigate the mortgage industry to find the best loan for you. On the one hand, you do have to worry about your monthly payment and whether...",
    },
    {
      title: "CfaaS Becomes the Next 'As A Service' Solution",
      publication: "New York Wire",
      date: "March 29, 2022",
      logo: "/images/media/ny-wire-logo.webp",
      category: "Technology",
      excerpt:
        "As the cloud has grown, so has XaaS. From the well known Software as a Service (SaaS) to the rapidly growing Platform as a Service (PaaS)...",
    },
    {
      title: "Confer Inc. announces beta launch of its free Loan Estimate comparison app",
      publication: "ABNewsWire",
      date: "March 29, 2022",
      logo: "/images/media/abnewswire-logo.webp",
      category: "Product Launch",
      excerpt: "Revolutionary Tech Allows Loan Estimate Comparisons that will Expose How Lenders are Cheating...",
    },
    {
      title: "Confer Inc. Announces Beta Launch of Its Free Loan Estimate Comparison App",
      publication: "Benzinga",
      date: "March 29, 2022",
      logo: "/images/media/benzinga-logo.webp",
      category: "Product Launch",
      excerpt:
        "Confer, Inc., is excited to announce that the Beta Version of its Loan Estimate Comparison App has launched. To be one of the lucky initial 500...",
    },
    {
      title: "Open to the Public, but Restricted Platforms? Web 3.0 Solution",
      publication: "TechBullion",
      date: "March 28, 2022",
      logo: "/images/media/techbullion-logo.webp",
      category: "Technology",
      excerpt:
        "When the internet was introduced, the 'worldwide web' had the potential to be used as a tool to democratize access to information. In the 1990s...",
    },
    {
      title: "What's In A 'Title'?",
      publication: "USA Wire",
      date: "March 15, 2022",
      logo: "/images/media/usa-wire-logo.webp",
      category: "Industry Insight",
      excerpt:
        "When the internet was introduced, the 'worldwide web' had the potential to be used as a tool to democratize access to information. In the 1990s...",
    },
    {
      title: "Open to the Public, but Restricted Platforms? Web 3.0 Solution",
      publication: "New York Weekly",
      date: "March 3, 2022",
      logo: "/images/media/new-york-weekly-logo.webp",
      category: "Technology",
      excerpt:
        "When the internet was introduced, the 'worldwide web' had the potential to be used as a tool to democratize access to information. In the 1990s...",
    },
    {
      title: "Confer Inc. Announced the Launch of Meta Mortgage Platform",
      publication: "MarketWatch",
      date: "February 17, 2022",
      logo: "/images/media/MarketWatch-2-768x213.webp",
      category: "Product Launch",
      excerpt:
        "When the internet was introduced, the 'worldwide web' had the potential to be used as a tool to democratize access to information. In the 1990s...",
    },
    {
      title: "Confer Inc. Announced the Launch of Meta Mortgage Platform",
      publication: "Digital Journal",
      date: "February 17, 2022",
      logo: "/images/media/digital-journal-768x213.webp",
      category: "Product Launch",
      excerpt:
        "Confer Inc. is an American company introducing an innovative mortgage platform powered by blockchain technology, allowing its...",
    },
    {
      title: "Confer Inc. Announced the Launch of Meta Mortgage Platform",
      publication: "News Channel Nebraska",
      date: "February 17, 2022",
      logo: "/images/media/nebraskanewschannel.webp",
      category: "Product Launch",
      excerpt: "Confer Inc. is an American company introducing an innovative mortgage platform powered by...",
    },
    {
      title: "Confer Inc. Announced the Launch of Meta Mortgage Platform",
      publication: "EIN Presswire",
      date: "February 15, 2022",
      logo: "/images/media/EIN_claim-color_positive-768x185.webp",
      category: "Product Launch",
      excerpt:
        "The official launch date of the Confer app that introduces MetaMortgage, will be available to download on iOS and Android on April 1st, 2022.",
    },
  ]

  const stats = [
    { label: "Major Publications", value: "20+", icon: Award },
    { label: "Articles Published", value: "25+", icon: TrendingUp },
    { label: "Media Mentions", value: "50+", icon: ExternalLink },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Confer News Room
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Featured in Forbes, Benzinga, National Mortgage News, and leading financial publications for our
              innovative mortgage technology
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-fintech-100 dark:bg-fintech-900 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-fintech-600 dark:text-fintech-400" />
                  </div>
                  <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Coverage</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-fintech-200 dark:border-fintech-800"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-72 h-36">
                      <Image
                        src={article.logo || "/placeholder.svg"}
                        alt={`${article.publication} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center text-muted-foreground text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <span className="bg-fintech-100 dark:bg-fintech-900 text-fintech-800 dark:text-fintech-200 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{article.excerpt}</p>
                  <ConsultationButton variant="outline" size="sm" className="w-full">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </ConsultationButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Complete Press Coverage</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {allArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-56 h-28">
                      <Image
                        src={article.logo || "/placeholder.svg"}
                        alt={`${article.publication} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center text-muted-foreground text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <span className="bg-fintech-100 dark:bg-fintech-900 text-fintech-800 dark:text-fintech-200 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-bold mb-3 text-center text-sm leading-tight">{article.title}</h3>
                  <p className="text-muted-foreground text-xs mb-4 text-center line-clamp-3">{article.excerpt}</p>
                  <ConsultationButton variant="outline" size="sm" className="w-full">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </ConsultationButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Contact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interview requests, or additional information about our mortgage AI technology
          </p>
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Yatin Karnik</h3>
            <p className="text-muted-foreground mb-2">CEO & Founder</p>
            <p className="text-muted-foreground mb-4">Confer Solutions AI</p>
            <div className="space-y-2 mb-8">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@confersolutions.ai" className="text-fintech-600 hover:underline">
                  info@confersolutions.ai
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1-469-945-7357" className="text-fintech-600 hover:underline">
                  (469) 945-7357
                </a>
              </p>
            </div>
            <ConsultationButton size="lg">Schedule Media Interview</ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
