import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.style.cursor === "pointer";
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Hide cursor on mobile/tablet devices
    const isMobile = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isMobile) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    backgroundColor: isHovering ? "hsl(var(--primary))" : "white",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Outer dotted rotating ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    border: "2px dotted",
                    borderColor: isHovering ? "hsl(var(--primary))" : "rgba(255, 255, 255, 0.6)",
                    mixBlendMode: "difference",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    rotate: 360,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
            />

            {/* Inner solid ring */}
            <motion.div
                className="fixed top-0 left-0 w-7 h-7 rounded-full border pointer-events-none z-[9997]"
                style={{
                    x: mousePosition.x - 14,
                    y: mousePosition.y - 14,
                    borderColor: isHovering ? "hsl(var(--primary) / 0.5)" : "rgba(255, 255, 255, 0.3)",
                    mixBlendMode: "difference",
                }}
                animate={{
                    scale: isHovering ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
