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
    { type: 'image', src: '/envipr6.jpeg', alt: 'Event 5' },
    { type: 'image', src: '/envipr4.jpeg', alt: 'Event 4' },
    { type: 'video', src: '/envipr8.mp4', alt: 'Event Video 2' },
    { type: 'image', src: '/envipr3.jpeg', alt: 'Event 3' },
    { type: 'video', src: '/envipr9.mp4', alt: 'Event Video 3' },
    { type: 'video', src: '/envi7.1.mp4', alt: 'Event 7' },
    { type: 'image', src: '/envipr2.jpeg', alt: 'Event 8' },
    { type: 'video', src: '/envi7.3.mp4', alt: 'Event 6' },
    { type: 'image', src: '/envipr5.jpeg', alt: 'Event 9' },
    { type: 'image', src: '/envipr4.jpeg', alt: 'Event 10' },
    { type: 'video', src: '/envi7.2.mp4', alt: 'Event 12' },
    { type: 'image', src: '/envipr5.jpeg', alt: 'Event 11' },
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
            className="lg:pr-8 xl:pr-16"
          >
            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="font-mono text-[0.6rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] text-primary uppercase">
                // The Convergence Begins
              </span>
            </motion.div>

            {/* Main heading */}
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8">
              <span className="block text-doom-silver">THE FINAL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/40">
                COUNTDOWN
              </span>
              {/* ENVI 8 - Avengers Doomsday Style */}
              <div className="relative mb-8">
                {/* Glow effect behind text */}
                <div className="absolute inset-0 blur-3xl opacity-60">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-center">
                    <span className="text-emerald-500">ENVI 8</span>
                  </h1>
                </div>

                {/* Main text with gradients */}
                <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-center">
                  <span
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(180deg, #f0f0f0 0%, #d4d4d4 25%, #a8a8a8 50%, #7a7a7a 75%, #4a4a4a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.3))',
                      textShadow: '0 1px 0 rgba(255,255,255,0.4), 0 -1px 0 rgba(0,0,0,0.6)'
                    }}
                  >
                    ENVI{' '}
                  </span>
                  <span
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(180deg, #6ee7b7 0%, #34d399 15%, #10b981 30%, #059669 50%, #047857 70%, #065f46 85%, #064e3b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 30px rgba(16,185,129,0.6)) drop-shadow(0 0 60px rgba(16,185,129,0.4))',
                      textShadow: '0 1px 0 rgba(110,231,183,0.5), 0 -1px 0 rgba(0,0,0,0.8)'
                    }}
                  >
                    8
                  </span>
                </h1>

                {/* Subtle reflection effect */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-full opacity-20 blur-sm">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-center transform scale-y-[-0.3] origin-top">
                    <span className="text-gray-400">ENVI</span>
                    <span className="text-emerald-600">8</span>
                  </h1>
                </div>
              </div>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-rajdhani text-base sm:text-lg md:text-xl lg:text-2xl text-doom-silver/90 leading-relaxed max-w-lg"
            >
              When timelines collide and reality fractures, only the brightest minds can prevent the collapse.
              <span className="block mt-4 text-primary/90 font-medium">
                Assemble. Innovate. Survive the convergence.
              </span>
            </motion.p>

            {/* Stats Section - replacing navigation arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8"
            >
              {[
                { value: "15+", label: "MISSIONS" },
                { value: "1000+", label: "HEROES" },
                { value: "₹50K+", label: "INFINITY REWARDS" },
              ].map((stat, index) => (
                <div key={stat.label} className="relative group">
                  <div className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-black text-primary drop-shadow-[0_0_10px_rgba(42,154,88,0.5)]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[0.65rem] sm:text-xs tracking-wider sm:tracking-widest text-doom-silver/60 mt-1 uppercase">
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
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto">


              {/* Diagonal Grid Container */}
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ rotate: -15, scale: 1.4 }}
                  animate={isInView ? { rotate: -15, scale: 1.4 } : {}}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                  style={{
                    transformOrigin: 'center center',
                    willChange: 'transform'
                  }}
                >
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 w-full h-full p-4 sm:p-6 md:p-8">
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
                        className="relative group cursor-pointer overflow-hidden rounded-md sm:rounded-lg border border-primary/20 sm:border-2 hover:border-primary/60 transition-all duration-300 aspect-square"
                        style={{ willChange: 'transform' }}
                      >
                        {item.type === 'video' ? (
                          <video
                            src={item.src}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            style={{ willChange: 'transform' }}
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            style={{ willChange: 'transform' }}
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
                className="mt-4 sm:mt-6 text-center"
              >
                <p className="font-mono text-[0.65rem] sm:text-xs text-doom-silver/50">
                  <span className="text-primary">PAST EVENTS</span>
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