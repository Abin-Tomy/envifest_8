import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecorativeShapes from "./DecorativeShapes";
import ValorantOverlay from "./ValorantOverlay";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Decorative corner shapes */}
      <DecorativeShapes position="top" animate={true} />

      {/* Valorant-style overlay */}
      <ValorantOverlay variant="left" />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-card/20 to-doom-void" />

      {/* Floating mask silhouette */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary/20">
          {/* Doom mask silhouette */}
          <path d="M50 10 L80 30 L80 60 L70 75 L65 90 L50 95 L35 90 L30 75 L20 60 L20 30 Z" />
          <ellipse cx="35" cy="45" rx="8" ry="10" className="fill-doom-void" />
          <ellipse cx="65" cy="45" rx="8" ry="10" className="fill-doom-void" />
          <path d="M40 70 L50 75 L60 70" strokeWidth="2" className="stroke-doom-void fill-none" />
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text content - asymmetrical layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:pr-16"
          >
            {/* Section tag */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
                // About the Event
              </span>
            </div>

            {/* Main heading - condensed cinematic style */}
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
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-rajdhani text-lg sm:text-xl md:text-2xl text-doom-silver/80 leading-relaxed max-w-lg"
            >
              Tech fest filled with workshops, hackathons, and an electrifying concert!
              <span className="block mt-4 text-primary/80">
                Don't miss the excitement!
              </span>
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 sm:mt-12 flex gap-6 sm:gap-8 flex-wrap"
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

          {/* Visual element - floating 3D-ish element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square float-animation">
              {/* Hexagonal frame */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="hsl(var(--doom-neon))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Outer hex */}
                <polygon
                  points="100,10 180,55 180,145 100,190 20,145 20,55"
                  fill="none"
                  stroke="url(#hexGrad)"
                  strokeWidth="1"
                  className="opacity-60"
                />

                {/* Inner hex */}
                <polygon
                  points="100,30 160,65 160,135 100,170 40,135 40,65"
                  fill="none"
                  stroke="url(#hexGrad)"
                  strokeWidth="0.5"
                  className="opacity-40"
                />

                {/* Core */}
                <circle cx="100" cy="100" r="40" fill="none" stroke="url(#hexGrad)" strokeWidth="1" className="opacity-80" />

                {/* Inner circle glow */}
                <circle cx="100" cy="100" r="30" fill="hsl(var(--primary))" fillOpacity="0.1" />

                {/* 8 symbol in center */}
                <text x="100" y="115" textAnchor="middle" className="fill-primary font-poppins text-[40px] font-bold">
                  8
                </text>
              </svg>

              {/* Orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_hsl(var(--primary))]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-doom-neon rounded-full shadow-[0_0_15px_hsl(var(--doom-neon))]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;