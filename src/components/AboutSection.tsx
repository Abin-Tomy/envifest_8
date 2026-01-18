import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecorativeShapes from "./DecorativeShapes";
import ValorantOverlay from "./ValorantOverlay";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample media items - replace with your actual images/videos
  const mediaItems = [
    { type: 'image', src: '/envipr1.jpeg', alt: 'Event 1' },
    { type: 'image', src: '/envipr2.jpeg', alt: 'Event 2' },
    { type: 'video', src: '/envipr7.mp4', alt: 'Event Video 1' },
    { type: 'image', src: '/envipr3.jpeg', alt: 'Event 3' },
    { type: 'image', src: '/envipr4.jpeg', alt: 'Event 4' },
    { type: 'video', src: '/envipr8.mp4', alt: 'Event Video 2' },
    { type: 'image', src: '/envipr5.jpeg', alt: 'Event 5' },
    { type: 'image', src: '/envipr6.jpeg', alt: 'Event 6' },
    { type: 'image', src: '/envipr1.jpeg', alt: 'Event 7' },
    { type: 'image', src: '/envipr2.jpeg', alt: 'Event 8' },
    { type: 'video', src: '/envipr9.mp4', alt: 'Event Video 3' },
    { type: 'image', src: '/envipr3.jpeg', alt: 'Event 9' },
    { type: 'image', src: '/envipr4.jpeg', alt: 'Event 10' },
    { type: 'image', src: '/envipr5.jpeg', alt: 'Event 11' },
    { type: 'image', src: '/envipr6.jpeg', alt: 'Event 12' },
    { type: 'image', src: '/envipr1.jpeg', alt: 'Event 13' },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Decorative corner shapes */}
      <DecorativeShapes position="top" animate={true} />

      {/* Valorant-style overlay */}
      <ValorantOverlay variant="left" />

      {/* Background elements - combining both */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-emerald-950/30 to-doom-void" />

      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:pr-16"
          >
            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
                // About the Event
              </span>
            </motion.div>

            {/* Main heading */}
            <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6 sm:mb-8">
              <span className="block text-doom-silver">GET READY FOR</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">
                ENVI
              </span>
              <span className="block text-doom-silver">2026</span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-rajdhani text-lg sm:text-xl md:text-2xl text-doom-silver/80 leading-relaxed max-w-lg"
            >
              Tech fest filled with workshops, hackathons, and an electrifying concert!
              <span className="block mt-4 text-primary/80">
                Don't miss the excitement!
              </span>
            </motion.p>

            {/* Stats Section - replacing navigation arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-8 sm:gap-12 mt-8"
            >
              {[
                { value: "15+", label: "EVENTS" },
                { value: "1000+", label: "PARTICIPANTS" },
                { value: "₹50K+", label: "PRIZES" },
              ].map((stat, index) => (
                <div key={stat.label} className="relative group">
                  <div className="font-poppins text-3xl sm:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs tracking-widest text-doom-silver/50 mt-1">
                    {stat.label}
                  </div>
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Grid Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Page Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="absolute -top-8 right-0 z-20 text-primary/60 text-sm font-mono"
              >
                16 / 16 MEDIA
              </motion.div>

              {/* Diagonal Grid Container */}
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ rotate: -15, scale: 1.4 }}
                  animate={isInView ? { rotate: -15, scale: 1.4 } : {}}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                  style={{
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="grid grid-cols-4 gap-3 w-full h-full p-8">
                    {mediaItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.7 + (index * 0.05),
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 aspect-square"
                      >
                        {item.type === 'video' ? (
                          <video
                            src={item.src}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-doom-void/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-doom-void/40 pointer-events-none" />
              </div>

              {/* Info text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 }}
                className="mt-6 text-center"
              >
                <p className="font-mono text-xs text-doom-silver/50">
                  <span className="text-primary">PAST EVENTS</span> // HOVER TO PREVIEW
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;