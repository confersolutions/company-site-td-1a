"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import './as-seen-on-styles.css'

export function AsSeenOnSection() {
  const mediaLogos = [
    { 
      name: "Forbes", 
      logo: "/images/media/Forbes_logo-1-768x213.webp",
      alt: "Featured in Forbes",
      width: 300,
      height: 83
    },
    { 
      name: "Benzinga", 
      logo: "/images/media/benzinga-logo.webp",
      alt: "Featured in Benzinga",
      width: 300,
      height: 83
    },
    { 
      name: "Market Daily", 
      logo: "/images/media/Market-Daily-White-Logo-1-768x213.webp",
      alt: "Featured in Market Daily",
      width: 300,
      height: 83
    },
    { 
      name: "National Mortgage News", 
      logo: "/images/media/national-mortgage-news-logo.webp",
      alt: "Featured in National Mortgage News",
      width: 300,
      height: 83
    },
    { 
      name: "New York Weekly", 
      logo: "/images/media/new-york-weekly-logo.webp",
      alt: "Featured in New York Weekly",
      width: 300,
      height: 83
    },
    { 
      name: "MarketWatch", 
      logo: "/images/media/MarketWatch-2-768x213.webp",
      alt: "Featured in MarketWatch",
      width: 300,
      height: 83
    },
  ]

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...mediaLogos, ...mediaLogos];

  return (
    <section className="py-8 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground">As Seen On</h3>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="animate-infinite-scroll flex items-center"
              style={{
                '--logo-count': mediaLogos.length,
              } as React.CSSProperties}
            >
              {duplicatedLogos.map((media, index) => (
                <div 
                  key={`${media.name}-${index}`} 
                  className="flex-shrink-0 px-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative" style={{ width: `${media.width * 0.7}px`, height: `${media.height * 0.7}px` }}>
                    <OptimizedImage
                      src={media.logo}
                      alt={media.alt || media.name}
                      width={media.width}
                      height={media.height}
                      responsive={false}
                      className="h-full w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
