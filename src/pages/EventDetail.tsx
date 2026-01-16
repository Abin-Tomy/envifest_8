import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import { getEventById } from "@/data/events";
import { ArrowLeft, Clock, MapPin, Users, Trophy, Phone } from "lucide-react";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = getEventById(eventId || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/events")}
            className="flex items-center gap-2 text-doom-silver/60 hover:text-primary transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-4 bg-doom-gunmetal/50 border ${
                event.theme === "fire" ? "border-doom-orange/30" : 
                event.theme === "circuit" ? "border-primary/30" : "border-doom-silver/20"
              }`}>
                <IconComponent className={`w-8 h-8 ${
                  event.theme === "fire" ? "text-doom-orange" : 
                  event.theme === "circuit" ? "text-primary" : "text-doom-silver"
                }`} />
              </div>
              <div>
                <h1 className="font-orbitron text-3xl md:text-5xl font-bold text-doom-silver">
                  {event.name}
                </h1>
                <p className="font-rajdhani text-lg text-primary mt-1">{event.tagline}</p>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-4">
              <Clock className="w-5 h-5 text-doom-silver/50 mb-2" />
              <span className="font-mono text-[10px] text-doom-silver/40 uppercase block">Timing</span>
              <span className="font-rajdhani text-sm text-doom-silver">{event.timing}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-4">
              <MapPin className="w-5 h-5 text-doom-silver/50 mb-2" />
              <span className="font-mono text-[10px] text-doom-silver/40 uppercase block">Venue</span>
              <span className="font-rajdhani text-sm text-doom-silver">{event.venue}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-4">
              <Users className="w-5 h-5 text-doom-silver/50 mb-2" />
              <span className="font-mono text-[10px] text-doom-silver/40 uppercase block">Team Size</span>
              <span className="font-rajdhani text-sm text-doom-silver">{event.teamSize}</span>
            </div>
            <div className="bg-doom-gunmetal/30 border border-doom-silver/10 p-4">
              <Trophy className="w-5 h-5 text-doom-orange/70 mb-2" />
              <span className="font-mono text-[10px] text-doom-silver/40 uppercase block">Prize Pool</span>
              <span className="font-rajdhani text-sm text-doom-orange">{event.prize}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-lg text-doom-silver mb-4">About This Event</h2>
            <p className="font-rajdhani text-doom-silver/70 leading-relaxed">
              {event.description}
            </p>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-lg text-doom-silver mb-4">Rules & Guidelines</h2>
            <ul className="space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-primary mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-rajdhani text-doom-silver/70">{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-orbitron text-lg text-doom-silver mb-4">Event Coordinators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {event.coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="bg-doom-gunmetal/30 border border-doom-silver/10 p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-doom-gunmetal border border-doom-silver/20 flex items-center justify-center font-orbitron text-primary text-lg">
                    {coordinator.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-orbitron text-sm text-doom-silver">{coordinator.name}</h3>
                    <p className="font-mono text-[10px] text-doom-silver/40 uppercase">{coordinator.role}</p>
                    <a
                      href={`tel:${coordinator.phone}`}
                      className="flex items-center gap-1 text-primary/70 hover:text-primary transition-colors mt-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span className="font-mono text-xs">{coordinator.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Register button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-12 py-4 font-orbitron text-sm tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              REGISTER NOW
            </button>
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
