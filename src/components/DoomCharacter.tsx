import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

type GestureType = "idle" | "wave" | "point" | "look" | "celebrate" | "thinking" | "surprise" | "dance";
type Direction = "left" | "right";

interface Position {
    x: number;
    y: number;
}

// Context states for intelligent behavior
type ContextState = 
    | "idle"
    | "events_section_cards"     // Mouse hovering event cards
    | "events_section_browse"    // Casually in events section
    | "events_page_browse"       // On events page browsing
    | "events_page_card_hover"   // Hovering a card on events page
    | "event_detail_register"    // On event detail page
    | "event_detail_browse"      // Browsing event details
    | "following_mouse"          // Following user mouse
    | "on_break";                // Taking a break (hidden)

interface ContextMessage {
    content: string;
    priority: number; // Higher priority messages take precedence
}

const DoomCharacter = () => {
    const location = useLocation();
    const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
    const [direction, setDirection] = useState<Direction>("right");
    const [gesture, setGesture] = useState<GestureType>("idle");
    const [isWalking, setIsWalking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isOnBreak, setIsOnBreak] = useState(false);
    const [isFollowingMouse, setIsFollowingMouse] = useState(false);
    const [contextState, setContextState] = useState<ContextState>("idle");
    const [currentMessage, setCurrentMessage] = useState<ContextMessage | null>(null);
    const [showMessage, setShowMessage] = useState(false);
    const characterRef = useRef<HTMLDivElement>(null);
    const mousePositionRef = useRef<Position>({ x: 0, y: 0 });
    const lastInteractionRef = useRef<number>(Date.now());

    // Responsive character size based on screen width
    const getResponsiveSize = () => {
        if (typeof window === 'undefined') return 100;
        const width = window.innerWidth;
        if (width < 640) return 70;
        if (width < 1024) return 90;
        return 100;
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

    // Get viewport boundaries
    const getViewportBounds = useCallback(() => ({
        maxX: window.innerWidth - size - 20,
        maxY: window.innerHeight - size - 20,
        minX: 20,
        minY: 80,
    }), [size]);

    // Context-aware message generator
    const getMessageForContext = useCallback((context: ContextState): ContextMessage | null => {
        const path = location.pathname;
        
        switch (context) {
            case "events_section_cards":
                const cardMessages = [
                    "This event looks awesome!",
                    "You should register for this!",
                    "Don't miss this one!",
                    "Click to see more details!",
                    "Perfect event for you!",
                ];
                return { 
                    content: cardMessages[Math.floor(Math.random() * cardMessages.length)], 
                    priority: 10 
                };
                
            case "events_section_browse":
                const browseMessages = [
                    "Check out all our events!",
                    "Click 'View All Events' below!",
                    "So many events to explore!",
                    "Find your perfect event!",
                    "Scroll down for more!",
                ];
                return { 
                    content: browseMessages[Math.floor(Math.random() * browseMessages.length)], 
                    priority: 5 
                };
                
            case "events_page_card_hover":
                const pageCardMessages = [
                    "Great choice!",
                    "This one's popular!",
                    "Register before it fills up!",
                    "Click to learn more!",
                    "Looks interesting right!",
                ];
                return { 
                    content: pageCardMessages[Math.floor(Math.random() * pageCardMessages.length)], 
                    priority: 10 
                };
                
            case "events_page_browse":
                const pageBrowseMessages = [
                    "Take your time browsing!",
                    "Found anything you like?",
                    "Each event is unique!",
                    "Hover over cards for details!",
                    "Pick your battlefield!",
                ];
                return { 
                    content: pageBrowseMessages[Math.floor(Math.random() * pageBrowseMessages.length)], 
                    priority: 3 
                };
                
            case "event_detail_register":
                const registerMessages = [
                    "Hit that register button!",
                    "Secure your spot now!",
                    "Don't wait, register today!",
                    "Limited slots available!",
                    "Join the competition!",
                ];
                return { 
                    content: registerMessages[Math.floor(Math.random() * registerMessages.length)], 
                    priority: 8 
                };
                
            case "event_detail_browse":
                const detailMessages = [
                    "Read the rules carefully!",
                    "Check out the prizes!",
                    "Great event details here!",
                    "Don't forget to register!",
                    "This looks exciting!",
                ];
                return { 
                    content: detailMessages[Math.floor(Math.random() * detailMessages.length)], 
                    priority: 4 
                };
                
            case "following_mouse":
                const followMessages = [
                    "Where are we going?",
                    "Lead the way!",
                    "I'll follow you!",
                    "Exploring together!",
                ];
                return { 
                    content: followMessages[Math.floor(Math.random() * followMessages.length)], 
                    priority: 2 
                };
                
            default:
                // Generic idle messages based on page
                if (path === "/") {
                    const homeMessages = [
                        "Welcome to ENVIFEST!",
                        "Scroll down for events!",
                        "Epic stuff awaits!",
                    ];
                    return { 
                        content: homeMessages[Math.floor(Math.random() * homeMessages.length)], 
                        priority: 1 
                    };
                }
                return null;
        }
    }, [location.pathname]);

    // Detect what the user is hovering over
    const detectUserContext = useCallback(() => {
        const path = location.pathname;
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        
        // Get element under mouse cursor
        const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
        
        if (path === "/") {
            // Check if in events section
            const eventsSection = document.getElementById("events");
            if (eventsSection) {
                const rect = eventsSection.getBoundingClientRect();
                const isInEventsSection = mouseY >= rect.top && mouseY <= rect.bottom;
                
                if (isInEventsSection) {
                    // Check if hovering over an event card
                    const isOverCard = elementUnderMouse?.closest('a[href^="/events/"]');
                    if (isOverCard) {
                        return "events_section_cards";
                    }
                    return "events_section_browse";
                }
            }
        }
        
        if (path === "/events") {
            // Check if hovering over an event card
            const isOverCard = elementUnderMouse?.closest('a[href^="/events/"]');
            if (isOverCard) {
                return "events_page_card_hover";
            }
            return "events_page_browse";
        }
        
        if (path.startsWith("/events/")) {
            // Check if near register button
            const registerBtn = document.querySelector('button:contains("REGISTER"), a:contains("REGISTER")') ||
                               document.querySelector('[class*="register"], [class*="REGISTER"]');
            if (registerBtn) {
                const rect = registerBtn.getBoundingClientRect();
                const isNearRegister = 
                    mouseX >= rect.left - 100 && 
                    mouseX <= rect.right + 100 && 
                    mouseY >= rect.top - 100 && 
                    mouseY <= rect.bottom + 100;
                if (isNearRegister) {
                    return "event_detail_register";
                }
            }
            return "event_detail_browse";
        }
        
        if (isFollowingMouse) {
            return "following_mouse";
        }
        
        return "idle";
    }, [location.pathname, isFollowingMouse]);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY };
            lastInteractionRef.current = Date.now();
        };
        
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Context detection loop
    useEffect(() => {
        if (isOnBreak) return;
        
        const contextInterval = setInterval(() => {
            const newContext = detectUserContext();
            if (newContext !== contextState) {
                setContextState(newContext);
                
                // Show message for new context
                const message = getMessageForContext(newContext);
                if (message && (!currentMessage || message.priority >= currentMessage.priority)) {
                    setCurrentMessage(message);
                    setShowMessage(true);
                    
                    // Trigger appropriate gesture
                    if (newContext.includes("card") || newContext.includes("register")) {
                        setGesture("point");
                    } else if (newContext.includes("browse")) {
                        setGesture("look");
                    }
                    
                    // Hide message after delay
                    setTimeout(() => {
                        setShowMessage(false);
                        setGesture("idle");
                    }, 4000);
                }
            }
        }, 1000);
        
        return () => clearInterval(contextInterval);
    }, [contextState, detectUserContext, getMessageForContext, currentMessage, isOnBreak]);

    // Break system - disappear and reappear
    useEffect(() => {
        const scheduleBreak = () => {
            // Take a break every 45-90 seconds
            const breakDelay = 45000 + Math.random() * 45000;
            
            return setTimeout(() => {
                setIsOnBreak(true);
                setIsVisible(false);
                setShowMessage(false);
                
                // Come back after 8-15 seconds
                const returnDelay = 8000 + Math.random() * 7000;
                setTimeout(() => {
                    setIsOnBreak(false);
                    setIsVisible(true);
                    
                    // Random position when returning
                    const bounds = getViewportBounds();
                    setPosition({
                        x: bounds.minX + Math.random() * (bounds.maxX - bounds.minX),
                        y: bounds.minY + Math.random() * (bounds.maxY - bounds.minY),
                    });
                }, returnDelay);
            }, breakDelay);
        };
        
        const breakTimeout = scheduleBreak();
        return () => clearTimeout(breakTimeout);
    }, [isVisible, getViewportBounds]);

    // Occasional mouse following
    useEffect(() => {
        const followInterval = setInterval(() => {
            // 15% chance to start following mouse
            if (!isFollowingMouse && !isOnBreak && Math.random() < 0.15) {
                setIsFollowingMouse(true);
                
                // Follow for 5-10 seconds
                setTimeout(() => {
                    setIsFollowingMouse(false);
                }, 5000 + Math.random() * 5000);
            }
        }, 10000);
        
        return () => clearInterval(followInterval);
    }, [isFollowingMouse, isOnBreak]);

    // Mouse following movement
    useEffect(() => {
        if (!isFollowingMouse || isOnBreak) return;
        
        const followInterval = setInterval(() => {
            const bounds = getViewportBounds();
            const targetX = Math.min(Math.max(mousePositionRef.current.x - size / 2, bounds.minX), bounds.maxX);
            const targetY = Math.min(Math.max(mousePositionRef.current.y - size / 2, bounds.minY), bounds.maxY);
            
            // Smooth following with offset
            const offsetX = (Math.random() - 0.5) * 100;
            const offsetY = (Math.random() - 0.5) * 100;
            
            const newX = Math.min(Math.max(targetX + offsetX, bounds.minX), bounds.maxX);
            const newY = Math.min(Math.max(targetY + offsetY, bounds.minY), bounds.maxY);
            
            if (newX > position.x) setDirection("right");
            else setDirection("left");
            
            setIsWalking(true);
            setPosition({ x: newX, y: newY });
            setTimeout(() => setIsWalking(false), 1500);
        }, 2000);
        
        return () => clearInterval(followInterval);
    }, [isFollowingMouse, isOnBreak, position, size, getViewportBounds]);

    // Random roaming when not following mouse
    useEffect(() => {
        if (isFollowingMouse || isOnBreak) return;
        
        const roamInterval = setInterval(() => {
            const bounds = getViewportBounds();
            const shouldMove = Math.random() > 0.25;

            if (shouldMove) {
                const newX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
                const newY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);

                if (newX > position.x) {
                    setDirection("right");
                } else {
                    setDirection("left");
                }

                setIsWalking(true);
                setPosition({ x: newX, y: newY });
                setTimeout(() => setIsWalking(false), 2500);
            }
        }, 6000);

        return () => clearInterval(roamInterval);
    }, [position, isFollowingMouse, isOnBreak, getViewportBounds]);

    // Random gesture system
    useEffect(() => {
        if (isOnBreak) return;
        
        const gestureInterval = setInterval(() => {
            if (!isWalking && !showMessage) {
                const gestures: GestureType[] = ["wave", "point", "look", "celebrate", "thinking", "surprise", "dance"];
                const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];

                setGesture(randomGesture);
                const duration = randomGesture === "dance" ? 3000 : 2000;
                setTimeout(() => setGesture("idle"), duration);
            }
        }, 8000);

        return () => clearInterval(gestureInterval);
    }, [isWalking, showMessage, isOnBreak]);

    // Scroll detection for events section
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            
            // Check if scrolled to events section
            const eventsSection = document.getElementById("events");
            if (eventsSection && location.pathname === "/") {
                const rect = eventsSection.getBoundingClientRect();
                const isEventsSectionVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isEventsSectionVisible && !showMessage) {
                    // Trigger events section message
                    setContextState("events_section_browse");
                    const message = getMessageForContext("events_section_browse");
                    if (message) {
                        setCurrentMessage(message);
                        setShowMessage(true);
                        setGesture("surprise");
                        
                        setTimeout(() => {
                            setShowMessage(false);
                            setGesture("idle");
                        }, 4000);
                    }
                }
            }
            
            // React to scroll with a surprise gesture
            if (!isWalking && gesture === "idle" && !showMessage) {
                setGesture("surprise");
                scrollTimeout = setTimeout(() => setGesture("idle"), 1000);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isWalking, gesture, location.pathname, showMessage, getMessageForContext]);

    // Handle window resize
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
    }, [getViewportBounds]);

    // Gesture animations
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
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={characterRef}
                    className="fixed pointer-events-none z-[100]"
                    style={{
                        width: size,
                        height: size,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: position.x,
                        y: position.y,
                        opacity: isWalking ? 0.5 : 1,
                        scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
                    transition={{
                        x: { duration: isFollowingMouse ? 1.5 : 2.5, ease: "easeInOut" },
                        y: { duration: isFollowingMouse ? 1.5 : 2.5, ease: "easeInOut" },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.5 },
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
                        {/* Character sprite */}
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

                        {/* Only surprise gesture indicator - exclamation */}
                        {gesture === "surprise" && (
                            <motion.div
                                className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl"
                                animate={{ scale: [0, 1.3, 1] }}
                                transition={{ duration: 0.3 }}
                            >
                                ❗
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

                    {/* Speech bubble with context-aware messages */}
                    <AnimatePresence>
                        {showMessage && currentMessage && !isWalking && (
                            <motion.div
                                className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
                                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative bg-white text-black px-3 py-2 rounded-lg text-xs font-bold shadow-lg border-2 border-green-500/50">
                                    <span className="text-green-700">{currentMessage.content}</span>
                                    {/* Speech bubble tail */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DoomCharacter;
