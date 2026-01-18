import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-doom-silver/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-doom-void to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="font-poppins text-2xl font-bold text-doom-silver">
              ENVI<span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">8</span>
            </span>
            <span className="text-doom-silver/30">|</span>
            <span className="font-mono text-xs text-doom-silver/50 tracking-widest">
              DOOMSDAY
            </span>
          </motion.div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-rajdhani text-doom-silver/60">
              The Doom is Near. Assemble for Innovation.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-doom-silver/40"
          >
            © 2025 ENVI 8. All rights reserved.
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-doom-silver/5 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <span className="font-mono text-[10px] text-doom-silver/30 tracking-widest uppercase">
            [System Status: Online]
          </span>
          <span className="hidden md:inline text-doom-silver/20">|</span>
          <span className="font-mono text-[10px] text-doom-silver/30 tracking-widest uppercase">
            [Threat Level: Maximum]
          </span>
          <span className="hidden md:inline text-doom-silver/20">|</span>
          <span className="font-mono text-[10px] text-doom-silver/30 tracking-widest uppercase">
            [Protocol: Doomsday]
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;