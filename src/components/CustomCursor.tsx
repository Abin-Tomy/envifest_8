import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover') ||
                target.closest('.cursor-hover')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Center dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 28,
                }}
            />

            {/* Crosshair - Horizontal line */}
            <motion.div
                className="fixed top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 12),
                    y: mousePosition.y,
                    width: isHovering ? 40 : 24,
                    opacity: isHovering ? 1 : 0.6,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            />

            {/* Crosshair - Vertical line */}
            <motion.div
                className="fixed top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y - (isHovering ? 20 : 12),
                    height: isHovering ? 40 : 24,
                    opacity: isHovering ? 1 : 0.6,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            />

            {/* Corner brackets - Top Left */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 0),
                    y: mousePosition.y - (isHovering ? 24 : 0),
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <div className="w-3 h-3 border-l-2 border-t-2 border-primary" />
            </motion.div>

            {/* Corner brackets - Top Right */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x + (isHovering ? 21 : 0),
                    y: mousePosition.y - (isHovering ? 24 : 0),
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <div className="w-3 h-3 border-r-2 border-t-2 border-primary" />
            </motion.div>

            {/* Corner brackets - Bottom Left */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 0),
                    y: mousePosition.y + (isHovering ? 21 : 0),
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <div className="w-3 h-3 border-l-2 border-b-2 border-primary" />
            </motion.div>

            {/* Corner brackets - Bottom Right */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x + (isHovering ? 21 : 0),
                    y: mousePosition.y + (isHovering ? 21 : 0),
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <div className="w-3 h-3 border-r-2 border-b-2 border-primary" />
            </motion.div>

            {/* Outer scanning ring on hover */}
            {isHovering && (
                <motion.div
                    className="fixed top-0 left-0 border border-primary/30 rounded-full pointer-events-none z-[9996]"
                    animate={{
                        x: mousePosition.x - 32,
                        y: mousePosition.y - 32,
                        width: 64,
                        height: 64,
                        rotate: 360,
                    }}
                    transition={{
                        rotate: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                        default: {
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                        },
                    }}
                />
            )}

            {/* Glow effect on hover */}
            {isHovering && (
                <motion.div
                    className="fixed top-0 left-0 bg-primary/10 rounded-full pointer-events-none z-[9995] blur-xl"
                    animate={{
                        x: mousePosition.x - 40,
                        y: mousePosition.y - 40,
                        width: 80,
                        height: 80,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 15,
                    }}
                />
            )}
        </>
    );
};

export default CustomCursor;
