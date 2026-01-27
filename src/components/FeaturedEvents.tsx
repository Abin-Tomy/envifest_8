import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getFeaturedEvents } from "@/data/events";
import { ArrowRight } from "lucide-react";
import ValorantOverlay from "./ValorantOverlay";

const FeaturedEvents = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const featuredEvents = getFeaturedEvents();

  return (
    <section ref={ref} id="events" className="relative py-16 sm:py-24 md:py-32 px-4 bg-black overflow-hidden">
      {/* Valorant-style overlay */}
      <ValorantOverlay variant="right" />

      {/* Cinematic Background Fog/Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      {/* Reduced container width from 7xl to 5xl for narrower cards */}
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 relative"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-primary uppercase whitespace-nowrap">
              Priority Targets Detected
            </span>
            <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight uppercase relative inline-block">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">Critical</span>
          </h2>
        </motion.div>

        {/* Cards Grid - narrower cards due to parent container max-width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              className="group relative"
            >
              <Link to={`/events/${event.id}`} className="block h-full relative z-10">

                {/* 1. The Glowing Backlight (Ambient) */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-md" />

                {/* 2. CARD CHASSIS */}
                <div className="relative h-[300px] sm:h-[380px] md:h-[420px] bg-[#050505] border border-white/10 overflow-hidden transition-all duration-500 flex flex-col">

                  {/* Dynamic Poster Background */}
                  {event.poster ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
                      style={{ backgroundImage: `url('${event.poster}')` }}
                    />
                  ) : (
                    <>
                      {/* Background Image for Hackathon Card */}
                      {event.id === "hackathon" && (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                          style={{ backgroundImage: "url('/wanda.jpg')" }}
                        />
                      )}

                      {/* Background Image for Ideathon Card */}
                      {event.id === "ideathon" && (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                          style={{ backgroundImage: "url('/shuri.jpg')" }}
                        />
                      )}

                      {/* Background Image for QuizBit Card */}
                      {event.id === "techquiz" && (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                          style={{ backgroundImage: "url('/BruceBanner.jpg')" }}
                        />
                      )}
                    </>
                  )}

                  {/* === UPDATED: Reduced Opacity to 10% === */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none mix-blend-screen" />

                  {/* Gradient Overlay to fade texture at edges */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/90 pointer-events-none" />

                  {/* Top "Status" Bar */}
                  <div className="h-10 sm:h-12 border-b border-white/5 flex justify-between items-center px-3 sm:px-4 bg-white/[0.02] relative z-10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]" />
                      <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-white/60 uppercase">Live Feed</span>
                    </div>
                    <span className="font-orbitron text-[9px] sm:text-[10px] text-white/30 group-hover:text-primary/50 transition-colors uppercase truncate max-w-[120px] sm:max-w-none">{event.teamSize}</span>
                  </div>

                  {/* Main Visual Area */}
                  <div className="flex-1 relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 group-hover:-translate-y-1 transition-transform duration-500 z-10">

                    {/* The "Arc Reactor" Icon Wrapper */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center flex-shrink-0">
                      {/* Outer Static Ring */}
                      <div className="absolute inset-0 border border-white/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />

                      {/* Rotating Data Ring */}
                      <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-primary/30" />

                      {/* Inner Active Ring (Fast Spin on Hover) */}
                      <div className="absolute inset-1 border-t-2 border-primary rounded-full animate-spin transition-opacity opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />

                      {/* Icon Itself */}
                      <event.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-doom-silver group-hover:text-white transition-colors relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                      {/* Core Glow */}
                      <div className="absolute inset-0 bg-primary/30 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h3 className="font-orbitron text-[17px] sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-2.5 md:mb-3 tracking-wide text-center uppercase drop-shadow-md relative z-10 px-2 break-words w-full leading-tight">
                      {event.name}
                    </h3>

                    <p className="text-center font-rajdhani text-white/50 leading-relaxed max-w-[200px] sm:max-w-[240px] text-xs sm:text-xs md:text-sm group-hover:text-white/80 transition-colors relative z-10 font-medium mb-3 sm:mb-3 md:mb-4 px-2">
                      {event.tagline}
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center relative z-10 w-full px-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-xs md:text-sm text-primary/80 tracking-wider">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary"></span>
                        <span className="break-words text-center">{event.registrationFee}</span>
                      </div>
                      <div className="font-mono text-[11px] sm:text-xs md:text-sm text-white/40 tracking-wider text-center break-words leading-tight">
                        {event.timing.split('|')[0].trim()}
                      </div>
                    </div>
                  </div>

                  {/* === UPDATED FOOTER: REGISTER BUTTON === */}
                  <div className="relative mt-auto z-10">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

                    <div className="p-2.5 sm:p-3 md:p-4 relative z-10 bg-black/40 backdrop-blur-sm">
                      <button className="w-full group/btn relative overflow-hidden bg-white/5 hover:bg-primary border border-white/10 hover:border-primary/50 transition-all duration-300 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]" />
                        <span className="font-orbitron text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white group-hover/btn:text-black font-bold flex items-center justify-center gap-1.5 sm:gap-2">
                          View Details <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                      </button>
                    </div>

                    {/* Footer background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Interactive Tech Corners - Rectangular */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    {/* Top Left Bracket */}
                    <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-white/20 transition-all duration-300 group-hover:border-primary/60 group-hover:w-5 group-hover:h-5 sm:group-hover:w-6 sm:group-hover:h-6" />
                    {/* Bottom Right Bracket */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-white/20 transition-all duration-300 group-hover:border-primary/60 group-hover:w-5 group-hover:h-5 sm:group-hover:w-6 sm:group-hover:h-6" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-20 text-center"
        >
          <Link to="/events" className="inline-block relative px-8 py-4 bg-primary border border-primary">
            <span className="font-orbitron text-sm tracking-[0.2em] text-black uppercase relative z-10 flex items-center gap-4 font-bold">
              View All Events <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedEvents;