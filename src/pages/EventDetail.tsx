import { motion, useInView } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import { getEventById } from "@/data/events";
import { ArrowLeft, Clock, MapPin, Users, Trophy, Phone, Image } from "lucide-react";
import DoomBackground from "@/components/DoomBackground";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = getEventById(eventId || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const posterRef = useRef(null);
  const buttonRef = useRef(null);
  const infoRef = useRef(null);
  const descRef = useRef(null);
  const rulesRef = useRef(null);
  const coordRef = useRef(null);

  // InView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const posterInView = useInView(posterRef, { once: true, margin: "-100px" });
  const buttonInView = useInView(buttonRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const descInView = useInView(descRef, { once: true, margin: "-100px" });
  const rulesInView = useInView(rulesRef, { once: true, margin: "-100px" });
  const coordInView = useInView(coordRef, { once: true, margin: "-100px" });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron text-4xl text-doom-silver mb-4">Event Not Found</h1>
          <Link to="/events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = event.icon;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Animated Matrix Background */}
      <DoomBackground opacity={0.08} />
      <main className="pt-20 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/events")}
            className="flex items-center gap-2 px-4 py-2 bg-doom-gunmetal/30 border border-doom-silver/20 text-doom-silver hover:border-primary hover:text-primary transition-all mb-8 font-mono text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </motion.button>

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className={`p-2 sm:p-3 md:p-4 bg-doom-gunmetal/50 border ${event.theme === "fire" ? "border-doom-orange/30" :
                event.theme === "circuit" ? "border-primary/30" : "border-doom-silver/20"
                }`}>
                <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${event.theme === "fire" ? "text-doom-orange" :
                  event.theme === "circuit" ? "text-primary" : "text-doom-silver"
                  }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-orbitron text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-doom-silver break-words">
                  {event.name}
                </h1>
                <p className="font-rajdhani text-sm sm:text-base md:text-lg text-primary mt-1">{event.tagline}</p>
              </div>
            </div>
          </motion.div>

          {/* Event Poster Placeholder */}
          <motion.div
            ref={posterRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={posterInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 sm:mb-8 mx-auto px-4 sm:px-0"
            style={{ maxWidth: '22rem' }}
          >
            <div className="relative bg-doom-gunmetal/30 border-2 border-doom-silver/20 overflow-hidden flex items-center justify-center" style={{ aspectRatio: '1080/1350' }}>
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />

              {/* Placeholder content */}
              <div className="relative z-10 text-center">
                <Image className="w-12 h-12 sm:w-16 sm:h-16 text-doom-silver/30 mx-auto mb-2 sm:mb-3" />
                <p className="font-mono text-[10px] sm:text-xs text-doom-silver/40 uppercase tracking-wider">Event Poster</p>
                <p className="font-mono text-[9px] sm:text-[10px] text-doom-silver/30 mt-1">1080 × 1350</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-primary/30" />
            </div>
          </motion.div>

          {/* Register button */}
          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, y: 30 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            {event.registrationLink ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block px-8 sm:px-12 py-3 sm:py-4 font-orbitron text-xs sm:text-sm tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                REGISTER NOW
              </a>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-block px-8 sm:px-12 py-3 sm:py-4 font-orbitron text-xs sm:text-sm tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                REGISTER NOW
              </button>
            )}
          </motion.div>

          {/* Info cards */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-12"
          >
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-2 sm:p-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-doom-silver/50 mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase block">Timing</span>
              <span className="font-rajdhani text-xs sm:text-sm text-doom-silver break-words">{event.timing}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-2 sm:p-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-doom-silver/50 mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase block">Venue</span>
              <span className="font-rajdhani text-xs sm:text-sm text-doom-silver break-words">{event.venue}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-2 sm:p-3 col-span-2 sm:col-span-1">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-doom-silver/50 mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase block">Team Size</span>
              <span className="font-rajdhani text-xs sm:text-sm text-doom-silver">{event.teamSize}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-2 sm:p-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-doom-silver/50 mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase block">Reg Fees</span>
              <span className="font-rajdhani text-xs sm:text-sm text-doom-silver break-words">{event.registrationFee}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-2 sm:p-3">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-doom-orange/70 mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase block">Prize Pool</span>
              <div className="font-rajdhani text-xs sm:text-sm text-doom-orange">
                {event.prize.split('|').map((prize, index) => (
                  <div key={index} className="break-words">{prize.trim()}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            ref={descRef}
            initial={{ opacity: 0, y: 30 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-base sm:text-lg md:text-xl text-doom-silver mb-3 sm:mb-4">About This Event</h2>
            <p className="font-rajdhani text-sm sm:text-base text-doom-silver/70 leading-relaxed">
              {event.description}
            </p>
          </motion.div>

          {/* Rules */}
          <motion.div
            ref={rulesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={rulesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-base sm:text-lg md:text-xl text-doom-silver mb-3 sm:mb-4">Rules & Guidelines</h2>
            <ul className="space-y-2 sm:space-y-3">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="font-mono text-[10px] sm:text-xs text-primary mt-0.5 sm:mt-1 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-rajdhani text-sm sm:text-base text-doom-silver/70">{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coordinators */}
          <motion.div
            ref={coordRef}
            initial={{ opacity: 0, y: 30 }}
            animate={coordInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-base sm:text-lg md:text-xl text-doom-silver mb-3 sm:mb-4">Event Coordinators</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {event.coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="bg-doom-gunmetal/30 border border-doom-silver/10 p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-doom-gunmetal border border-doom-silver/20 flex items-center justify-center font-orbitron text-primary text-base sm:text-lg flex-shrink-0">
                    {coordinator.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-xs sm:text-sm text-doom-silver truncate">{coordinator.name}</h3>
                    <p className="font-mono text-[9px] sm:text-[10px] text-doom-silver/40 uppercase">{coordinator.role}</p>
                    <a
                      href={`tel:${coordinator.phone}`}
                      className="flex items-center gap-1 text-primary/70 hover:text-primary transition-colors mt-1"
                    >
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span className="font-mono text-[10px] sm:text-xs">{coordinator.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventName={event.name}
      />
    </div>
  );
};

export default EventDetail;
