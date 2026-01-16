import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const coordinators = [
  {
    name: "Alex Stark",
    role: "Lead Coordinator",
    phone: "+91 98765 43210",
    clearanceLevel: "ALPHA",
    status: "ACTIVE",
  },
  {
    name: "Sarah Rogers",
    role: "Technical Head",
    phone: "+91 98765 43211",
    clearanceLevel: "BETA",
    status: "ACTIVE",
  },
  {
    name: "John Banner",
    role: "Event Manager",
    phone: "+91 98765 43212",
    clearanceLevel: "BETA",
    status: "ACTIVE",
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="contact" className="relative py-16 sm:py-24 md:py-32 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-card/10 to-doom-void" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-4 block">
            // Establish Connection
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-doom-silver">
            COMMAND <span className="text-glow text-primary">CENTER</span>
          </h2>
        </motion.div>

        {/* Coordinator cards - Agent Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={coordinator.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Classified stamp */}
              <div className="absolute -top-3 -right-3 z-20 rotate-12 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="px-3 py-1 border-2 border-doom-red bg-doom-void font-mono text-xs text-doom-red tracking-widest">
                  CLASSIFIED
                </div>
              </div>

              {/* Card */}
              <div className="relative border border-doom-silver/20 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                {/* Header bar */}
                <div className="bg-doom-gunmetal/50 px-4 py-2 border-b border-doom-silver/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-doom-silver/50">
                    AGENT PROFILE
                  </span>
                  <span className={`font-mono text-[10px] tracking-widest ${coordinator.status === "ACTIVE" ? "text-primary" : "text-doom-red"
                    }`}>
                    ● {coordinator.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 border-2 border-primary/30 bg-doom-gunmetal/50 flex items-center justify-center relative overflow-hidden">
                    <div className="font-orbitron text-3xl font-bold text-primary/50">
                      {coordinator.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    {/* Scanlines */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="font-orbitron text-lg sm:text-xl font-bold text-doom-silver group-hover:text-foreground transition-colors">
                      {coordinator.name}
                    </h3>
                    <p className="font-rajdhani text-doom-silver/60">{coordinator.role}</p>
                    <div className="font-mono text-[10px] text-primary/50 mt-2">
                      CLEARANCE: {coordinator.clearanceLevel}
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-3 py-3 px-4 border border-primary/30 bg-primary/5 font-mono text-sm text-primary hover:bg-primary/10 transition-all group/phone"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="group-hover/phone:tracking-wider transition-all">
                      {coordinator.phone}
                    </span>
                  </a>
                </div>

                {/* Footer bar */}
                <div className="bg-doom-gunmetal/30 px-4 py-2 border-t border-doom-silver/10">
                  <span className="font-mono text-[10px] text-doom-silver/30 tracking-widest">
                    TAP TO ESTABLISH COMMS
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="border border-doom-silver/20 bg-card/30 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <span className="font-mono text-xs text-doom-silver/50 tracking-widest block">
                  TRANSMISSION CHANNEL
                </span>
                <span className="font-rajdhani text-lg text-doom-silver">Email</span>
              </div>
            </div>
            <a
              href="mailto:envifest@gmail.com"
              className="block font-orbitron text-xl sm:text-2xl md:text-3xl text-primary hover:text-doom-neon transition-colors text-glow break-all"
            >
              envifest@gmail.com
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="border border-doom-silver/20 bg-card/30 backdrop-blur-sm p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-doom-orange" />
              <div>
                <span className="font-mono text-xs text-doom-silver/50 tracking-widest block">
                  COORDINATES
                </span>
                <span className="font-rajdhani text-lg text-doom-silver">Venue Location</span>
              </div>
            </div>
            <p className="font-rajdhani text-lg sm:text-xl text-doom-silver/80">
              College Campus, City Name
              <span className="block text-doom-silver/50 text-base mt-1">
                Exact coordinates will be revealed soon
              </span>
            </p>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 border border-doom-silver/20 bg-card/30 backdrop-blur-sm h-64 flex items-center justify-center relative overflow-hidden"
        >
          {/* Dark map placeholder */}
          <div className="absolute inset-0 bg-doom-gunmetal/30" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)/0.05) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)/0.05) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />

          {/* Center marker */}
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 mx-auto mb-4 border-2 border-doom-orange bg-doom-orange/20 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-doom-orange rounded-full" />
            </motion.div>
            <span className="font-mono text-sm text-doom-silver/60">
              Interactive map coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;