import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ValorantOverlay from "./ValorantOverlay";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Glitch text effect
  const glitchTextStyle = {
    textShadow: "2px 0px 0px rgba(255,0,0,0.5), -2px 0px 0px rgba(0,255,255,0.5)",
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ENVI Logo - Top Left - Hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block absolute top-4 left-4 sm:top-6 sm:left-8 md:left-12 lg:left-16 z-20"
      >
        <Link to="/">
          <img
            src="/envi-logo.png"
            alt="ENVI Logo"
            className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </motion.div>

      {/* Navigation Bar - Top Center */}
      <motion.nav
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-16 sm:top-6 left-1/2 z-20 -translate-x-1/2"
      >
        <div
          className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-2 sm:py-3 md:py-3.5 lg:py-4 backdrop-blur-md shadow-lg shadow-primary/20"
          style={{
            clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.25) 100%)',
            border: '2px solid rgba(16, 185, 129, 0.5)',
            boxShadow: 'inset 0 1px 2px rgba(16, 185, 129, 0.3), 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.15)',
          }}
        >
          <ul className="flex items-center justify-center gap-4 sm:gap-10 md:gap-16 lg:gap-20">
            {[
              { label: "HOME", path: "/", isLink: true },
              { label: "EVENTS", path: "/events", isLink: true },
              { label: "CONTACT", id: "contact", isLink: false },
            ].map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.isLink ? (
                  <Link
                    to={item.path!}
                    className="relative font-poppins text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id!)}
                    className="relative font-poppins text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-doom-void" style={{ willChange: 'transform' }} />
        {/* Background Video with reduced opacity */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
          style={{ willChange: 'transform' }}
        >
          <source src="/hero-vedio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--doom-green-dark)/0.15)_0%,transparent_60%)]" style={{ willChange: 'transform' }} />
      </motion.div>

      {/* Valorant-style geometric overlay */}
      <ValorantOverlay variant="both" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4">
        {/* ENVI Logo - Between Nav and Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:hidden mt-32 sm:mt-44 md:mt-48 mb-8 sm:mb-10 md:mb-12"
        >
          <img
            src="/envi-logo.png"
            alt="ENVI Logo"
            className="mx-auto h-16 sm:h-20 md:h-24 lg:h-28 w-auto hover:scale-105 transition-transform duration-300"
            style={{
              filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
            }}
          />
        </motion.div>

        {/* ENVI HERO Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 relative inline-block lg:mt-40"
        >
          <img
            src="/hero-image.png"
            alt="ENVI 8"
            className="w-[320px] xs:w-[420px] sm:w-[520px] md:w-[640px] lg:w-[760px] xl:w-[860px] h-auto select-none"
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
            className="font-mono text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary"
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
