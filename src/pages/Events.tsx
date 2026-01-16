import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { events } from "@/data/events";
import { ArrowRight } from "lucide-react";

const Events = () => {
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "fire":
        return "border-doom-orange/30 hover:border-doom-orange/60";
      case "circuit":
        return "border-primary/30 hover:border-primary/60";
      default:
        return "border-doom-silver/20 hover:border-doom-silver/40";
    }
  };

  const getIconColor = (theme: string) => {
    switch (theme) {
      case "fire":
        return "text-doom-orange";
      case "circuit":
        return "text-primary";
      default:
        return "text-doom-silver";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.4em] text-doom-silver/50 uppercase block mb-4">
              All Missions
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-doom-silver">
              EVENT <span className="text-primary">DIRECTORY</span>
            </h1>
            <p className="font-rajdhani text-doom-silver/60 mt-4 max-w-xl mx-auto">
              Choose your battlefield. Each event is a chance to prove your worth.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/events/${event.id}`}
                  className={`group block relative border bg-card/30 p-6 transition-all duration-300 hover:bg-card/50 ${getThemeStyles(event.theme)}`}
                >
                  {/* Category badge */}
                  {event.category === "featured" && (
                    <div className="absolute -top-2 right-4 px-2 py-0.5 bg-primary text-primary-foreground font-mono text-[10px] tracking-wider uppercase">
                      Featured
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-doom-gunmetal/50 rounded">
                      <event.icon className={`w-6 h-6 ${getIconColor(event.theme)}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-orbitron text-lg font-semibold text-doom-silver group-hover:text-foreground transition-colors">
                        {event.name}
                      </h3>
                      <p className="font-rajdhani text-sm text-doom-silver/50 mt-1">
                        {event.tagline}
                      </p>
                      <div className="flex items-center gap-4 mt-3 font-mono text-[10px] text-doom-silver/40">
                        <span>{event.teamSize}</span>
                        <span>•</span>
                        <span>{event.prize}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-doom-silver/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Fire accent for fire theme */}
                  {event.theme === "fire" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-doom-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
