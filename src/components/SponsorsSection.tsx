import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder sponsor logos (these would be replaced with actual logos)
const titleSponsor = {
  name: "TechCorp Industries",
  poster: "/CORBIT.png",
  website: "https://example.com",
};

const eventSponsors = [
  { name: "Adverse", logo: "/Adverse_Logo.png", isImage: true, website: "https://example.com" },
  { name: "Oscorp", logo: "OC", website: "https://example.com" },
  { name: "Wayne Enterprises", logo: "WE", website: "https://example.com" },
  { name: "Umbrella Corp", logo: "UC", website: "https://example.com" },
  { name: "Cyberdyne", logo: "CD", website: "https://example.com" },
  { name: "Weyland-Yutani", logo: "WY", website: "https://example.com" },
  { name: "Tyrell Corp", logo: "TC", website: "https://example.com" },
  { name: "Massive Dynamic", logo: "MD", website: "https://example.com" },
];

const SponsorsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-card/5 to-doom-void" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-4 block">
            // Strategic Partners
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-doom-silver">
            ALLIED <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">FORCES</span>
          </h2>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.4em] text-doom-silver/60 uppercase mb-4 block">
            Powered By
          </span>

          {/* Title sponsor logo */}
          <a
            href={titleSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative cursor-hover"
          >
            <div className="px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 border-2 border-primary/30 bg-card/30 backdrop-blur-sm relative group hover:border-primary/60 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

              {/* Sponsor poster */}
              <img
                src={titleSponsor.poster}
                alt={titleSponsor.name}
                className="max-h-48 sm:max-h-56 md:max-h-64 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>
        </motion.div>

        {/* Event Sponsors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
        >
          <span className="font-mono text-xs tracking-[0.4em] text-doom-silver/60 uppercase">
            Event Sponsors
          </span>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex animate-marquee" style={{ willChange: 'transform' }}>
            {[...eventSponsors, ...eventSponsors].map((sponsor, index) => (
              <a
                key={`${sponsor.name}-${index}`}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 group cursor-hover"
              >
                <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 border border-doom-silver/20 bg-card/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/40 grayscale group-hover:grayscale-0">
                  {sponsor.isImage ? (
                    <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 max-w-20 sm:max-h-16 sm:max-w-28 md:max-h-20 md:max-w-36 object-contain" />
                  ) : (
                    <span className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold text-doom-silver/50 group-hover:text-primary transition-colors duration-300">
                      {sponsor.logo}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="font-mono text-xs sm:text-sm text-doom-silver/40">
            Interested in sponsoring? Contact us at{" "}
            <a href="mailto:envifest@gmail.com" className="text-primary hover:text-doom-neon transition-colors">
              envifest@gmail.com
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;