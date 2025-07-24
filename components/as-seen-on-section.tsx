export function AsSeenOnSection() {
  const mediaLogos = [
    { name: "Tech Bullion", logo: "/images/media/techbullion-logo.webp" },
    { name: "Forbes", logo: "/images/media/Forbes_logo-1-768x213.webp" },
    { name: "Benzinga", logo: "/images/media/benzinga-logo.webp" },
    { name: "MarketDaily", logo: "/images/media/Market-Daily-White-Logo-1-768x213.webp" },
    { name: "National Mortgage News", logo: "/images/media/national-mortgage-news-logo.webp" },
    { name: "MPA", logo: "/images/media/mpa-logo.webp" },
    { name: "HW", logo: "/images/media/hw-logo.webp" },
    { name: "Los Angeles Wire", logo: "/images/media/los-angeles-wire-logo.webp" },
    { name: "MReport", logo: "/images/media/mreport-logo.webp" },
    { name: "US Reporter", logo: "/images/media/us-reporter-logo.webp" },
    { name: "NY Wire", logo: "/images/media/ny-wire-logo.webp" },
    { name: "ABNewswire", logo: "/images/media/abnewswire-logo.webp" },
    { name: "TechBullion", logo: "/images/media/techbullion-logo.webp" },
    { name: "USA Wire", logo: "/images/media/usa-wire-logo.webp" },
    { name: "NY Weekly", logo: "/images/media/new-york-weekly-logo.webp" },
    { name: "MarketWatch", logo: "/images/media/MarketWatch-2-768x213.webp" },
    { name: "Digital Journal", logo: "/images/media/digital-journal-768x213.webp" },
    { name: "News Channel Nebraska", logo: "/images/media/nebraskanewschannel.webp" },
    { name: "EIN Presswire", logo: "/images/media/EIN_claim-color_positive-768x185.webp" },
    { name: "TalkMarkets", logo: "/images/media/talkmarkets-logo.png" },
  ]

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">As Seen On</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {mediaLogos.map((media, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={media.logo || "/placeholder.svg"}
                  alt={media.name}
                  className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
