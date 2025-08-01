export function AsSeenOnSection() {
  const mediaLogos = [
    { 
      name: "Forbes", 
      logo: "/images/media/Forbes_logo-1-768x213.webp",
      alt: "Featured in Forbes"
    },
    { 
      name: "Benzinga", 
      logo: "/images/media/benzinga-logo.webp",
      alt: "Featured in Benzinga"
    },
    { 
      name: "Market Daily", 
      logo: "/images/media/Market-Daily-White-Logo-1-768x213.webp",
      alt: "Featured in Market Daily"
    },
    { 
      name: "National Mortgage News", 
      logo: "/images/media/national-mortgage-news-logo.webp",
      alt: "Featured in National Mortgage News"
    },
    { 
      name: "New York Weekly", 
      logo: "/images/media/new-york-weekly-logo.webp",
      alt: "Featured in New York Weekly"
    },
    { 
      name: "MarketWatch", 
      logo: "/images/media/MarketWatch-2-768x213.webp",
      alt: "Featured in MarketWatch"
    },
  ]

  return (
    <section className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">As Seen On</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {mediaLogos.map((media, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={media.logo || "/placeholder.svg"}
                  alt={media.alt || media.name}
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
