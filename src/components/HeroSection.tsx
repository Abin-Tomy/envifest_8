import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isHovered, setIsHovered] = useState(false);
  const [showEyes, setShowEyes] = useState(false);

  // Eyes appear after 2 seconds, then periodically
  useState(() => {
    const timer = setTimeout(() => setShowEyes(true), 2000);

    const interval = setInterval(() => {
      setShowEyes(true);
      setTimeout(() => setShowEyes(false), 2000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-doom-void" />
        {/* Background Video with reduced opacity */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source src="/hero-vedio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--doom-green-dark)/0.15)_0%,transparent_60%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4">
        {/* ENVI HERO Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 mt-40 relative inline-block"
        >
          <img
            src="/hero-image.png"
            alt="ENVI 8"
            className="w-[400px] xs:w-[550px] sm:w-[680px] md:w-[830px] lg:w-[1010px] xl:w-[1130px] h-auto select-none"
            style={{
              filter: "drop-shadow(0 0 40px rgba(16, 185, 129, 0.15))",
            }}
          />
        </motion.div>

        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <motion.span
            className="font-mono text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase"
            animate={{
              color: showEyes || isHovered
                ? "hsl(var(--doom-neon))"
                : "hsl(var(--doom-silver)/0.5)",
            }}
            transition={{ duration: 0.5 }}
          >
            National Level Tech Fest
          </motion.span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-doom-silver/30"
          >
            <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
            <div className="w-px h-6 bg-gradient-to-b from-doom-silver/30 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
