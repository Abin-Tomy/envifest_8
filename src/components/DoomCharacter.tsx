import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type GestureType = "idle" | "wave" | "point" | "look" | "celebrate" | "thinking" | "surprise" | "dance";
type Direction = "left" | "right";

interface Position {
    x: number;
    y: number;
}

// Context-aware messages based on page/section
type MessageType = "emoji" | "text";

interface ContextMessage {
    type: MessageType;
    content: string;
    emoji?: string;
}

const DoomCharacter = () => {
    const location = useLocation();
    const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
    const [direction, setDirection] = useState<Direction>("right");
    const [gesture, setGesture] = useState<GestureType>("idle");
    const [isWalking, setIsWalking] = useState(false);
    const characterRef = useRef<HTMLDivElement>(null);

    // Responsive character size based on screen width
    const getResponsiveSize = () => {
        if (typeof window === 'undefined') return 100;
        const width = window.innerWidth;
        if (width < 640) return 70;  // Mobile
        if (width < 1024) return 90; // Tablet
        return 100; // Desktop
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
        minY: 80, // Increased top margin so speech bubble doesn't get cut off
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

    // Get context-aware message based on current page OR section
    // Text messages ONLY on events pages or events section, emojis everywhere else
    const getContextMessage = (): ContextMessage => {
        const path = location.pathname;

        // Check if character is hovering over the events section on home page
        if (path === "/") {
            // Get element at character position
            // Use document.elementFromPoint to see if we are over the events section
            const element = document.elementFromPoint(position.x + 50, position.y + 50);
            const eventsSection = element?.closest("#events");

            if (eventsSection) {
                const messages = [
                    { type: "text" as MessageType, content: "Check these out!", emoji: "👀" },
                    { type: "text" as MessageType, content: "Join the fun!", emoji: "🎉" },
                    { type: "text" as MessageType, content: "Pick an event!", emoji: "🎮" },
                ];
                return messages[Math.floor(Math.random() * messages.length)];
            }
        }

        // Events page - show text messages
        if (path === "/events") {
            const messages = [
                { type: "text" as MessageType, content: "Check these out!", emoji: "👀" },
                { type: "text" as MessageType, content: "Join the fun!", emoji: "🎉" },
                { type: "text" as MessageType, content: "Pick an event!", emoji: "🎮" },
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        }

        // Event details page - show text messages
        if (path.startsWith("/events/")) {
            const messages = [
                { type: "text" as MessageType, content: "Register Now!", emoji: "📝" },
                { type: "text" as MessageType, content: "Don't miss it!", emoji: "⏰" },
                { type: "text" as MessageType, content: "Join us!", emoji: "🚀" },
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        }

        // All other pages - ONLY emojis, no text
        const emojis = ["👋", "🎉", "🔥", "✨", "🎮", "🚀", "👀", "🤔", "💫", "⚡"];
        return { type: "emoji", content: emojis[Math.floor(Math.random() * emojis.length)] };
    };

    const [contextMessage, setContextMessage] = useState<ContextMessage>(getContextMessage());

    // Update context message periodically and on page change
    useEffect(() => {
        setContextMessage(getContextMessage());

        const messageInterval = setInterval(() => {
            if (!isWalking && gesture !== "idle") {
                setContextMessage(getContextMessage());
            }
        }, 12000);

        return () => clearInterval(messageInterval);
    }, [location.pathname, isWalking, gesture]);

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

                {/* Gesture indicators - now alongside context message */}
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

            {/* Speech bubble - OUTSIDE mirrored div, ONLY on events pages */}
            {!isWalking && contextMessage.type === "text" && (
                <motion.div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg border border-green-500/30">
                        <span className="mr-1">{contextMessage.emoji}</span>
                        <span className="text-green-700">{contextMessage.content}</span>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
                    </div>
                </motion.div>
            )}
        </motion.div >
    );
};

export default DoomCharacter;
