import { motion } from "framer-motion";
import { Gamepad2, Coins, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Arcade = () => {
    return (
        <div className="min-h-screen bg-doom-void">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-card/20 to-doom-void" />

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `
                        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm">
                            <Gamepad2 className="w-5 h-5 text-primary animate-pulse" />
                            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                                Gaming Zone
                            </span>
                        </div>

                        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase">
                            ARCADE <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">ZONE</span>
                        </h1>

                        <p className="font-rajdhani text-doom-silver/60 mt-4 max-w-xl mx-auto text-base sm:text-lg">
                            Free entry gaming arena at ENVI 8. Walk in, choose your game, and pay per play.
                        </p>

                        {/* Key Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {/* Free Entry */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="border border-primary/30 bg-card/30 backdrop-blur-sm p-6"
                            >
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <Gamepad2 className="w-8 h-8 text-primary" />
                                    <h3 className="font-poppins text-2xl font-bold text-white">Free Entry</h3>
                                </div>
                                <p className="font-rajdhani text-doom-silver/70">
                                    No entry fee or registration required. Just walk in and start playing.
                                </p>
                            </motion.div>

                            {/* Pay Per Play */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="border border-doom-orange/30 bg-card/30 backdrop-blur-sm p-6"
                            >
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <Coins className="w-8 h-8 text-doom-orange" />
                                    <h3 className="font-poppins text-2xl font-bold text-white">Pay Per Play</h3>
                                </div>
                                <p className="font-rajdhani text-doom-silver/70">
                                    Affordable gaming rates. Pay only for the games you play.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* What's Available */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border border-primary/20 bg-card/20 backdrop-blur-sm p-8 mb-12"
                    >
                        <h2 className="font-poppins text-3xl font-bold text-white mb-6 text-center">
                            What's <span className="text-primary">Available</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 font-rajdhani text-doom-silver/80">
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>Latest gaming consoles (PS5, Xbox Series X)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>High-end gaming PCs</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>Popular fighting, racing & sports games</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>Multiplayer gaming arena</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>Gaming tournaments with prizes</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary text-xl">●</span>
                                <span>All-day access during event</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border border-primary/30 bg-card/30 backdrop-blur-sm p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-primary" />
                            <h3 className="font-poppins text-2xl font-bold text-white">Location</h3>
                        </div>

                        <div className="space-y-3 font-rajdhani text-doom-silver/80">
                            <p>
                                <strong className="text-white">Venue:</strong> Arcade Zone at ENVI 8, St. Joseph's College (Autonomous), Devagiri, Calicut
                            </p>
                            <p>
                                <strong className="text-white">Hours:</strong> Open throughout the event duration
                            </p>
                            <p>
                                <strong className="text-white">Entry:</strong> Completely FREE - No registration needed
                            </p>
                            <p>
                                <strong className="text-white">Payment:</strong> Pay-per-play model at the arcade
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Arcade;
