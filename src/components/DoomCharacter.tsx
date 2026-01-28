import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type GestureType = "idle" | "wave" | "point" | "look" | "celebrate" | "thinking" | "surprise" | "dance";
type Direction = "left" | "right";

interface Position {
    x: number;
    y: number;
}

const DoomCharacter = () => {
    const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
    const [direction, setDirection] = useState<Direction>("right");
    const [gesture, setGesture] = useState<GestureType>("idle");
    const [isWalking, setIsWalking] = useState(false);
    const characterRef = useRef<HTMLDivElement>(null);

    // Responsive character size based on screen width
    const getResponsiveSize = () => {
        if (typeof window === 'undefined') return 100;
        const width = window.innerWidth;
        if (width < 640) return 60;  // Mobile: smaller
        if (width < 1024) return 80; // Tablet: medium
        return 100; // Desktop: full size
    };

    const [size, setSize] = useState(getResponsiveSize());

    // Update size on window resize
    useEffect(() => {
        const handleSizeChange = () => {
            setSize(getResponsiveSize());
        };
        handleSizeChange();
        window.addEventListener("resize", handleSizeChange);
        return () => window.removeEventListener("resize", handleSizeChange);
    }, []);

    // Get viewport boundaries (character stays within visible viewport)
    const getViewportBounds = () => ({
        maxX: window.innerWidth - size - 20,
        maxY: window.innerHeight - size - 20,
        minX: 20,
        minY: 20,
    });



    // Random roaming within VIEWPORT (not page)
    useEffect(() => {
        const roamInterval = setInterval(() => {
            const bounds = getViewportBounds();
            const shouldMove = Math.random() > 0.25; // 75% chance to move

            if (shouldMove) {
                // Calculate new position within viewport bounds
                const newX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
                const newY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);

                // Mirror based on movement direction
                if (newX > position.x) {
                    setDirection("right");
                } else {
                    setDirection("left");
                }

                setIsWalking(true);
                setPosition({ x: newX, y: newY });

                // Stop walking after movement completes
                setTimeout(() => setIsWalking(false), 2500);
            }
        }, 6000); // Move every 6 seconds

        return () => clearInterval(roamInterval);
    }, [position]);

    // Random gesture system with more animations
    useEffect(() => {
        const gestureInterval = setInterval(() => {
            if (!isWalking) {
                const gestures: GestureType[] = ["wave", "point", "look", "celebrate", "thinking", "surprise", "dance"];
                const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];

                setGesture(randomGesture);

                // Different duration for different gestures
                const duration = randomGesture === "dance" ? 3000 : 2000;
                setTimeout(() => setGesture("idle"), duration);
            }
        }, 8000);

        return () => clearInterval(gestureInterval);
    }, [isWalking]);

    // React to scroll with gestures (character stays in viewport)
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            // React to scroll with a surprise gesture
            if (!isWalking && gesture === "idle") {
                setGesture("surprise");
                scrollTimeout = setTimeout(() => setGesture("idle"), 1000);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isWalking, gesture]);

    // Handle window resize to keep character in bounds
    useEffect(() => {
        const handleResize = () => {
            const bounds = getViewportBounds();
            setPosition(prev => ({
                x: Math.min(Math.max(prev.x, bounds.minX), bounds.maxX),
                y: Math.min(Math.max(prev.y, bounds.minY), bounds.maxY),
            }));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Get gesture-specific animations
    const getGestureAnimation = () => {
        switch (gesture) {
            case "wave":
                return { rotate: [0, -15, 15, -15, 15, 0] };
            case "celebrate":
                return { y: [0, -25, 0, -25, 0], scale: [1, 1.1, 1, 1.1, 1] };
            case "look":
                return { rotate: [0, 20, -20, 20, 0] };
            case "point":
                return { scale: [1, 1.15, 1] };
            case "thinking":
                return { rotate: [0, -5, 0, -5, 0], y: [0, -5, 0] };
            case "surprise":
                return { scale: [1, 1.3, 1], y: [0, -15, 0] };
            case "dance":
                return { rotate: [0, -10, 10, -10, 10, -10, 10, 0], y: [0, -10, 0, -10, 0, -10, 0] };
            default:
                return {};
        }
    };


    return (
        <motion.div
            ref={characterRef}
            className="fixed pointer-events-none z-[100]"
            style={{
                width: size,
                height: size,
            }}
            animate={{
                x: position.x,
                y: position.y,
                opacity: isWalking ? 0.5 : 1, // Reduce opacity when moving over content
            }}
            transition={{
                x: { duration: 2.5, ease: "easeInOut" },
                y: { duration: 2.5, ease: "easeInOut" },
                opacity: { duration: 0.3 },
            }}
        >
            <motion.div
                className="relative w-full h-full doom-character"
                animate={{
                    scaleX: direction === "left" ? -1 : 1,
                    ...getGestureAnimation(),
                }}
                transition={{
                    scaleX: { duration: 0.3 },
                    rotate: { duration: gesture === "dance" ? 2 : 0.8, repeat: gesture === "dance" ? 1 : 0 },
                    y: { duration: gesture === "dance" ? 2 : 0.6, repeat: gesture === "dance" ? 1 : 0 },
                    scale: { duration: 0.5 },
                }}
            >
                {/* Character sprite with walking animation */}
                <div className={`relative w-full h-full ${isWalking ? 'walking' : 'idle-bounce'}`}>
                    <img
                        src="/doom-sprite.png"
                        alt="Dr. Doom"
                        className="w-full h-full object-contain pixelated"
                        style={{
                            imageRendering: "pixelated",
                            filter: "drop-shadow(0 6px 12px rgba(16, 185, 129, 0.4))",
                        }}
                    />
                </div>

                {/* Gesture indicators */}
                {gesture === "point" && (
                    <motion.div
                        className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        👉
                    </motion.div>
                )}

                {gesture === "wave" && (
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl"
                        animate={{ rotate: [0, 25, -25, 25, 0] }}
                        transition={{ duration: 0.6, repeat: 2 }}
                    >
                        👋
                    </motion.div>
                )}

                {gesture === "celebrate" && (
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl"
                        animate={{ scale: [1, 1.4, 1], rotate: [0, 360] }}
                        transition={{ duration: 0.6 }}
                    >
                        🎉
                    </motion.div>
                )}

                {gesture === "thinking" && (
                    <motion.div
                        className="absolute -top-12 right-0 text-3xl"
                        animate={{ opacity: [0, 1, 0.5, 1] }}
                        transition={{ duration: 1.5 }}
                    >
                        🤔
                    </motion.div>
                )}

                {gesture === "surprise" && (
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl"
                        animate={{ scale: [0, 1.3, 1] }}
                        transition={{ duration: 0.3 }}
                    >
                        ❗
                    </motion.div>
                )}

                {gesture === "dance" && (
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl"
                        animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                        transition={{ duration: 1, repeat: 2 }}
                    >
                        🕺
                    </motion.div>
                )}
            </motion.div>

            {/* Animated shadow */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/40 rounded-full blur-md"
                animate={isWalking ? {
                    scaleX: [1, 0.7, 1, 0.7, 1],
                    opacity: [0.4, 0.3, 0.4, 0.3, 0.4],
                } : {
                    scaleY: [1, 0.8, 1],
                }}
                transition={{
                    duration: isWalking ? 0.5 : 2,
                    repeat: Infinity,
                }}
            />
        </motion.div >
    );
};

export default DoomCharacter;
