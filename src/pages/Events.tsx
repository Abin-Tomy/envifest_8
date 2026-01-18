import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { getMainEvents, getOnlineEvents } from "@/data/events";
import { ArrowRight } from "lucide-react";

const Events = () => {
  const mainEvents = getMainEvents();
  const onlineEvents = getOnlineEvents();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const EventCard = ({ event, index }: { event: any; index: number }) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      className="group relative"
    >
      <Link to={`/events/${event.id}`} className="block h-full relative z-10">
        {/* 1. The Glowing Backlight (Ambient) */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-md" />

        {/* 2. CARD CHASSIS */}
        <div className="relative h-[380px] sm:h-[420px] md:h-[450px] bg-[#050505] border border-white/10 overflow-hidden transition-all duration-500 flex flex-col">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none mix-blend-screen" />

          {/* Gradient Overlay to fade texture at edges */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/90 pointer-events-none" />

          {/* Top "Status" Bar */}
          <div className="h-12 border-b border-white/5 flex justify-between items-center px-4 bg-white/[0.02] relative z-10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]" />
              <span className="font-mono text-[9px] tracking-widest text-white/60 uppercase">Live Feed</span>
            </div>
            <span className="font-orbitron text-[10px] text-white/30 group-hover:text-primary/50 transition-colors">
              {event.category === "featured" ? "FEATURED" : "ACTIVE"}
            </span>
          </div>

          {/* Main Visual Area */}
          <div className="flex-1 relative flex flex-col items-center justify-center p-6 group-hover:-translate-y-1 transition-transform duration-500 z-10">
            {/* The "Arc Reactor" Icon Wrapper */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              {/* Outer Static Ring */}
              <div className="absolute inset-0 border border-white/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />

              {/* Rotating Data Ring */}
              <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-primary/30" />

              {/* Inner Active Ring (Fast Spin on Hover) */}
              <div className="absolute inset-1 border-t-2 border-primary rounded-full animate-spin transition-opacity opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />

              {/* Icon Itself */}
              <event.icon className="w-8 h-8 text-doom-silver group-hover:text-white transition-colors relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

              {/* Core Glow */}
              <div className="absolute inset-0 bg-primary/30 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide text-center uppercase drop-shadow-md relative z-10">
              {event.name}
            </h3>

            <p className="text-center font-rajdhani text-white/50 leading-relaxed max-w-[220px] text-xs sm:text-sm group-hover:text-white/80 transition-colors relative z-10 font-medium mb-4">
              {event.tagline}
            </p>

            {/* Event Details */}
            <div className="flex flex-col gap-2 items-center relative z-10">
              <div className="flex items-center gap-2 font-mono text-sm text-primary/80 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>{event.registrationFee}</span>
              </div>
              <div className="font-mono text-sm text-white/40 tracking-wider text-center">
                {event.timing.split('|').map((part, i) => (
                  <div key={i}>{part.trim()}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with Details */}
          <div className="relative mt-auto z-10">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

            <div className="p-4 relative z-10 bg-black/40 backdrop-blur-sm">
              <button className="w-full group/btn relative overflow-hidden bg-white/5 hover:bg-primary border border-white/10 hover:border-primary/50 transition-all duration-300 py-3 px-4">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]" />
                <span className="font-orbitron text-xs tracking-[0.2em] uppercase text-white group-hover/btn:text-black font-bold flex items-center justify-center gap-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Footer background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Interactive Tech Corners - Rectangular */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 transition-all duration-300 group-hover:border-primary/60 group-hover:w-6 group-hover:h-6" />
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 transition-all duration-300 group-hover:border-primary/60 group-hover:w-6 group-hover:h-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Header - Large, Centered, All Caps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">EVENTS</span>
            </h1>
            <p className="font-rajdhani text-doom-silver/60 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Choose your battlefield. Each event is a chance to prove your worth.
            </p>
          </motion.div>

          {/* Main Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
                MAIN <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">EVENTS</span>
              </h2>
              <div className="h-1 w-32 bg-primary mt-4 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {mainEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}

              {/* Arcade Zone Card - No Registration */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mainEvents.length * 0.1, duration: 0.7, ease: "easeOut" }}
                className="group relative"
              >
                <Link to="/arcade" className="block h-full relative z-10">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent opacity-40 blur-md" />

                  <div className="relative h-[380px] sm:h-[420px] md:h-[450px] bg-gradient-to-br from-primary/10 to-[#050505] border-2 border-primary/40 overflow-hidden flex flex-col hover:border-primary/60 transition-all duration-300">
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />

                    <div className="absolute top-4 right-4 z-30">
                      <div className="px-3 py-1 bg-primary text-black font-poppins font-bold text-xs uppercase">Free Entry</div>
                    </div>

                    <div className="h-12 border-b border-primary/20 flex justify-between items-center px-4 bg-primary/5 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]" />
                        <span className="font-mono text-[9px] tracking-widest text-primary uppercase">No Registration</span>
                      </div>
                      <span className="font-orbitron text-[10px] text-primary">ARCADE</span>
                    </div>

                    <div className="flex-1 relative flex flex-col items-center justify-center p-6 z-10 group-hover:-translate-y-1 transition-transform duration-500">
                      <div className="w-16 h-16 border-2 border-primary bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>

                      <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide text-center uppercase">
                        ARCADE ZONE
                      </h3>

                      <p className="text-center font-rajdhani text-white/50 leading-relaxed max-w-[220px] text-xs sm:text-sm mb-4 font-medium group-hover:text-white/80 transition-colors">
                        Free entry gaming arena. Pay per play.
                      </p>

                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex items-center gap-2 font-mono text-sm text-primary tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span>Free Entry</span>
                        </div>
                        <div className="font-mono text-sm text-white/40 tracking-wider text-center">
                          <div>All Day Access</div>
                          <div>Pay Per Play</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-auto z-10">
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      <div className="p-4 relative z-10 bg-black/40 backdrop-blur-sm">
                        <div className="w-full relative overflow-hidden bg-primary/10 hover:bg-primary border border-primary/50 hover:border-primary transition-all py-3 px-4 group/btn">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]" />
                          <span className="font-orbitron text-xs tracking-[0.2em] uppercase text-primary group-hover/btn:text-black font-bold flex items-center justify-center gap-2">
                            View Details <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:w-8 group-hover:h-8" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:w-8 group-hover:h-8" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Online Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
                ONLINE <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">EVENTS</span>
              </h2>
              <div className="h-1 w-32 bg-primary mt-4 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {onlineEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;

