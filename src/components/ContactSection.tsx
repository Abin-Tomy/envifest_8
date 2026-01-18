import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";
import ValorantOverlay from "./ValorantOverlay";

const coordinators = [
  {
    name: "Dattan",
    role: "Coordinator",
    phone: "+91 94004 47688",
    clearanceLevel: "ALPHA",
  },
  {
    name: "Nahashal",
    role: "Coordinator",
    phone: "+91 73560 95410",
    clearanceLevel: "BETA",
  },
  {
    name: "Akshath",
    role: "Coordinator",
    phone: "+91 70348 76060",
    clearanceLevel: "BETA",
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isActive, setIsActive] = useState(true);

  // Check if current time is within active hours (6:30 AM - 11:59 PM)
  const checkActiveStatus = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Active from 6:30 AM (6.5 hours) to 11:59 PM (23.99 hours)
    // Inactive from 12:00 AM (0 hours) to 6:29 AM (6.48 hours)
    const currentTimeInMinutes = hours * 60 + minutes;
    const activeStartTime = 6 * 60 + 30; // 6:30 AM in minutes
    const inactiveStartTime = 0; // 12:00 AM in minutes

    // Active if time is >= 6:30 AM OR < 12:00 AM (which means >= 6:30 AM)
    const active = currentTimeInMinutes >= activeStartTime;
    setIsActive(active);
  };

  useEffect(() => {
    // Check status on mount
    checkActiveStatus();

    // Update status every minute
    const interval = setInterval(checkActiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="contact" className="relative py-16 sm:py-24 md:py-32 px-4">
      {/* Decorative bottom line */}
      <DecorativeShapes position="bottom" animate={true} />

      {/* Valorant-style overlay */}
      <ValorantOverlay variant="both" />

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
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-doom-silver">
            COMMAND <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">CENTER</span>
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
              {/* Card */}
              <div className="relative border border-doom-silver/20 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                {/* Classified stamp - inside card */}
                <div className="absolute top-10 right-1 z-20 rotate-12 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="px-2.5 py-1 border border-doom-red bg-doom-void font-mono text-xs text-doom-red tracking-wider">
                    CLASSIFIED
                  </div>
                </div>

                {/* Header bar */}
                <div className="bg-doom-gunmetal/50 px-4 py-2 border-b border-doom-silver/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-doom-silver/50">
                    AGENT PROFILE
                  </span>
                  <span className={`font-mono text-[10px] tracking-widest ${isActive ? "text-primary" : "text-doom-red"
                    }`}>
                    ● {isActive ? "ACTIVE" : "INACTIVE"}
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
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-doom-silver group-hover:text-foreground transition-colors">
                      {coordinator.name}
                    </h3>
                    <p className="font-rajdhani text-doom-silver/60">{coordinator.role}</p>
                    <div className="font-mono text-[10px] text-primary/50 mt-2">
                      CLEARANCE: LEVEL 8
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
              className="block font-orbitron text-xl sm:text-2xl md:text-3xl text-primary hover:text-doom-neon transition-colors break-all"
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
              St. Joseph's College (Autonomous), Devagiri
              <span className="block text-doom-silver/50 text-base mt-1">
                Calicut, Kerala
              </span>
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 border border-doom-silver/20 bg-card/30 backdrop-blur-sm overflow-hidden relative group"
        >
          {/* Tech Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary z-10 pointer-events-none" />

          {/* Top status bar */}
          <div className="absolute top-0 left-0 right-0 bg-doom-gunmetal/90 backdrop-blur-sm px-4 py-2 border-b border-primary/30 z-10 pointer-events-none">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-primary tracking-widest">LOCATION COORDINATES</span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-doom-orange">THREAT LEVEL: MAXIMUM</span>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-mono text-[10px] text-primary"
                >
                  ● LIVE TRACKING
                </motion.span>
              </div>
            </div>
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(16,185,129,0.03)_2px,rgba(16,185,129,0.03)_4px)] pointer-events-none z-10" />

          {/* Grid overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />

          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-[5]" />

          {/* Pulsing corner indicators */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full z-10 pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full z-10 pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-2 left-2 w-2 h-2 bg-doom-orange rounded-full z-10 pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-2 right-2 w-2 h-2 bg-doom-orange rounded-full z-10 pointer-events-none"
          />

          {/* Bottom status bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-doom-gunmetal/90 backdrop-blur-sm px-4 py-2 border-t border-primary/30 z-10 pointer-events-none">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-doom-silver/50">MISSION: LOCATE TARGET</span>
              <span className="text-primary">DISTANCE: 0.0 KM</span>
              <span className="text-doom-silver/50">PROTOCOL: DOOMSDAY</span>
            </div>
          </div>


          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125214.23058939862!2d75.68365573883054!3d11.26547502753809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b8ea22b4ac3%3A0x5be6bfc17781275d!2sSt.%20Joseph&#39;s%20College%20(Autonomous)%2C%20Devagiri!5e0!3m2!1sen!2sin!4v1768579016475!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;