import { motion } from 'framer-motion';

interface ValorantOverlayProps {
    variant?: 'left' | 'right' | 'both' | 'minimal';
}

const ValorantOverlay = ({ variant = 'both' }: ValorantOverlayProps) => {
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Bottom Right Corner - shown on 'right' and 'both' variants */}
            {(variant === 'right' || variant === 'both') && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-8 right-8 opacity-40"
                >
                    {/* Vertical bar */}
                    <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-primary/50" />

                    {/* Angular bracket at bottom */}
                    <div className="absolute bottom-0 right-4">
                        <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
                            <path d="M 0 35 L 0 25 L 40 25 L 50 15 L 50 0" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
                        </svg>
                    </div>

                    {/* Vertical dots */}
                    <div className="absolute bottom-24 right-0 space-y-2 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    </div>
                </motion.div>
            )}

            {/* Top Right Accent - shown on 'right' and 'both' variants */}
            {(variant === 'right' || variant === 'both') && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute top-8 right-8 opacity-40"
                >
                    {/* Small vertical dots */}
                    <div className="space-y-2 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    </div>

                    {/* Angular line */}
                    <div className="absolute top-10 right-0">
                        <svg width="50" height="25" viewBox="0 0 50 25" fill="none">
                            <path d="M 50 0 L 50 8 L 8 8 L 0 16" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
                        </svg>
                    </div>
                </motion.div>
            )}

            {/* Left Middle Accent - shown on 'both' variant only */}
            {variant === 'both' && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute left-8 top-1/2 -translate-y-1/2 opacity-40"
                >
                    {/* Vertical bar */}
                    <div className="w-[1px] h-32 bg-primary/50" />

                    {/* Horizontal accent line */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                            <path d="M 0 10 L 30 10 L 40 0" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
                        </svg>
                    </div>

                    {/* Vertical dots */}
                    <div className="absolute top-36 left-0 space-y-2 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    </div>
                </motion.div>
            )}

            {/* Bottom Left Accent - shown on 'left' variant only */}
            {variant === 'left' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute bottom-8 left-8 opacity-40"
                >
                    {/* Angular bracket */}
                    <div className="relative">
                        <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
                            <path d="M 0 45 L 0 35 L 50 35 L 70 15 L 70 0" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
                        </svg>
                    </div>

                    {/* Vertical dots below bracket */}
                    <div className="absolute -bottom-10 left-0 space-y-2 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    </div>
                </motion.div>
            )}

            {/* Top Left Accent - shown on 'left' variant only */}
            {variant === 'left' && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-8 left-8 opacity-40"
                >
                    {/* Vertical bar */}
                    <div className="w-[1px] h-20 bg-primary/50" />

                    {/* Vertical dots */}
                    <div className="absolute top-24 left-0 space-y-2 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ValorantOverlay;
