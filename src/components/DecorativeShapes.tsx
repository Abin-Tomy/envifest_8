import { motion } from 'framer-motion';

interface DecorativeShapesProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all' | 'top' | 'bottom';
    animate?: boolean;
    className?: string;
}

const DecorativeShapes = ({ position = 'all', animate = true, className = '' }: DecorativeShapesProps) => {
    const DecorativeLine = ({ side }: { side: 'top' | 'bottom' }) => {
        const positions = {
            top: 'top-0 left-1/4 w-1/2 h-[2px]',
            bottom: 'bottom-0 left-1/4 w-1/2 h-[2px]',
        };

        const className = `absolute ${positions[side]} bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-10 drop-shadow-[0_0_4px_rgba(16,185,129,0.6)]`;

        if (animate) {
            return (
                <motion.div
                    className={className}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
            );
        }

        return <div className={className} />;
    };

    return (
        <>
            {(position === 'all' || position === 'top') && <DecorativeLine side="top" />}
            {(position === 'all' || position === 'bottom') && <DecorativeLine side="bottom" />}
        </>
    );
};

export default DecorativeShapes;
