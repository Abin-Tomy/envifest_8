import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (location.pathname !== "/") {
            return;
        }
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    // Glitch text effect
    const glitchTextStyle = {
        textShadow: "2px 0px 0px rgba(255,0,0,0.5), -2px 0px 0px rgba(0,255,255,0.5)",
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "backdrop-blur-md" : ""
                }`}
        >
            {/* Crescent shape created using inset shadows on left/right only */}
            <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-5 bg-[#0a0a0a] rounded-full shadow-[inset_3px_0_0_#10b981,inset_-3px_0_0_#10b981]">
                <ul className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                    {[
                        { label: "HOME", path: "/", isLink: true },
                        { label: "EVENTS", path: "/events", isLink: true },
                        { label: "CONTACT", id: "contact", isLink: false },
                    ].map((item, index) => (
                        <motion.li
                            key={item.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            {item.isLink ? (
                                <Link
                                    to={item.path!}
                                    style={glitchTextStyle}
                                    className="font-orbitron text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.1em] text-white hover:text-primary transition-colors duration-300"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(item.id!)}
                                    style={glitchTextStyle}
                                    className="font-orbitron text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.1em] text-white hover:text-primary transition-colors duration-300"
                                >
                                    {item.label}
                                </button>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navigation;
