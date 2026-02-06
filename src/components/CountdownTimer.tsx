import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CountdownTimerProps {
    eventDate: Date;
}

const CountdownTimer = ({ eventDate }: CountdownTimerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [showDate, setShowDate] = useState(true);

    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Transition from date to timer after 2 seconds when in view
    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setShowDate(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date().getTime();
            const target = eventDate.getTime();
            const difference = target - now;

            if (difference > 0) {
                const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
                const months = Math.floor(totalDays / 30);
                const days = totalDays % 30;

                setTimeLeft({
                    months: months,
                    days: days,
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        calculateTime();
        const interval = setInterval(calculateTime, 1000);
        return () => clearInterval(interval);
    }, [eventDate]);

    const TimerBlock = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <span className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tabular-nums">
                {String(value).padStart(2, "0")}
            </span>
            <span className="font-mono text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-white/60 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                {label}
            </span>
        </div>
    );

    return (
        <section
            ref={ref}
            className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-doom-void via-card/10 to-doom-void" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_60%)]" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <div className="flex flex-col items-center justify-center min-h-[200px] relative">
                    <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-3000 ease-in-out"
                        style={{ opacity: showDate ? 1 : 0, pointerEvents: showDate ? 'auto' : 'none' }}
                    >
                        <div className="text-center">
                            <h3 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wider">
                                FEBRUARY 09 2026
                            </h3>
                            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-doom-silver/40">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <span>TARGET DATE LOCKED</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-3000 ease-in-out"
                        style={{ opacity: showDate ? 0 : 1, pointerEvents: showDate ? 'none' : 'auto' }}
                    >
                        <div className="w-full">
                            {/* Timer container */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                                    <TimerBlock value={timeLeft.months} label="Months" />
                                    <span className="font-orbitron text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/40 -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6">:</span>
                                    <TimerBlock value={timeLeft.days} label="Days" />
                                    <span className="font-orbitron text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/40 -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6">:</span>
                                    <TimerBlock value={timeLeft.hours} label="Hours" />
                                    <span className="font-orbitron text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/40 -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6">:</span>
                                    <TimerBlock value={timeLeft.minutes} label="Minutes" />
                                    <span className="font-orbitron text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/40 -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6">:</span>
                                    <TimerBlock value={timeLeft.seconds} label="Seconds" />
                                </div>

                                {/* Status indicator */}
                                <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-doom-silver/40">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    <span>DOOMSDAY IMMINENT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CountdownTimer;
