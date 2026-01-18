import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Zap, Users, Trophy, Coins, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArcadeZone = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const features = [
        {
            icon: Gamepad2,
            title: "Free Entry",
            description: "No entry fee required",
        },
        {
            icon: Coins,
            title: "Pay-Per-Play",
            description: "Affordable gaming rates",
        },
        {
            icon: Users,
            title: "Multiplayer",
            description: "Challenge your friends",
        },
        {
            icon: Zap,
            title: "Latest Games",
            description: "Top gaming titles",
        },
        {
            icon: Trophy,
            title: "Tournaments",
            description: "Win exciting prizes",
        },
    ];

    return (
        <section ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-card/30 to-black">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm">
                        <Gamepad2 className="w-5 h-5 text-primary animate-pulse" />
                        <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                            Gaming Zone
                        </span>
                    </div>

                    <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-doom-green to-primary">
                            ARCADE
                        </span>{" "}
                        ZONE
                    </h2>

                    <p className="font-rajdhani text-lg sm:text-xl text-doom-silver/80 max-w-2xl mx-auto">
                        Free entry to our gaming arena. Pay per game and experience the latest titles, compete with friends, and unleash your gaming skills.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Left - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <Link to="/arcade" className="block">
                            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-doom-void border-2 border-primary/30 overflow-hidden hover:border-primary/60 transition-all duration-300 cursor-pointer">
                                {/* Placeholder for arcade image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Gamepad2 className="w-32 h-32 text-primary/20 group-hover:text-primary/30 transition-colors" />
                                </div>

                                {/* Animated overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary" />
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary" />
                                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary" />
                                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary" />

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.3)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Click indicator */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-primary/90 text-black px-6 py-3 font-poppins font-bold text-sm uppercase flex items-center gap-2">
                                        Explore Arcade
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-doom-green text-black px-6 py-3 font-poppins font-bold text-xs sm:text-sm uppercase shadow-lg shadow-primary/50 border-2 border-black">
                                FREE ENTRY • PAY TO PLAY
                            </div>
                        </Link>
                    </motion.div>

                    {/* Right - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="flex items-start gap-4 p-4 border border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-primary/50 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-poppins text-lg font-bold text-white mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="font-rajdhani text-sm text-doom-silver/70">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Link to="/arcade" className="inline-block group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all" />
                            <div className="relative px-8 py-4 border-2 border-primary bg-black/50 backdrop-blur-sm group-hover:bg-black/70 transition-all">
                                <p className="font-mono text-primary text-sm tracking-wider uppercase flex items-center gap-3">
                                    <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Walk In • Pay • Play • Compete • Win
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </p>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ArcadeZone;
