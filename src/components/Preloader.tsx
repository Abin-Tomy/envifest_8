import React, { useState, useEffect } from 'react';

const ENVI8Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start animation after brief delay
        setTimeout(() => setAnimate(true), 100);

        // Start fade out before loading completes
        setTimeout(() => setFadeOut(true), 3500);

        // Complete loading
        setTimeout(() => setLoading(false), 4000);
    }, []);

    if (!loading) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500"
            style={{ opacity: fadeOut ? 0 : 1 }}
        >
            <div className="relative">
                {/* Background particles floating - reduced and slower */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`bg-${i}`}
                        className="absolute bg-green-500 rounded-full"
                        style={{
                            width: `${Math.random() * 2.5 + 1}px`,
                            height: `${Math.random() * 2.5 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: animate ? (Math.random() * 0.12 + 0.03) : 0,
                            transition: `opacity 2s ease-out ${Math.random() * 1}s`,
                            animation: 'float 6s ease-in-out infinite',
                            animationDelay: `${Math.random() * 4}s`
                        }}
                    />
                ))}

                {/* ENVI text with particles forming */}
                <div className="relative flex items-center justify-center">
                    {[
                        { letter: 'E', from: '-translate-x-96 -translate-y-96' },
                        { letter: 'N', from: 'translate-x-96 -translate-y-96' },
                        { letter: 'V', from: '-translate-x-96 translate-y-96' },
                        { letter: 'I', from: 'translate-x-96 translate-y-96' }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            {/* Particle trail effect - flicker like embers */}
                            {[...Array(18)].map((_, i) => {
                                const size = Math.random() * 9 + 3;
                                const distance = 260 + Math.random() * 120;
                                const angle = Math.random() * Math.PI * 2;
                                const startX = Math.cos(angle) * distance;
                                const startY = Math.sin(angle) * distance;

                                return (
                                    <div
                                        key={i}
                                        className="absolute rounded-full"
                                        style={{
                                            width: `${size}px`,
                                            height: `${size}px`,
                                            background: `radial-gradient(circle, rgba(74, 222, 128, ${0.9 + Math.random() * 0.1}) 0%, rgba(34, 197, 94, ${0.5 + Math.random() * 0.3}) 40%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
                                            top: '50%',
                                            left: '50%',
                                            transform: animate
                                                ? 'translate(-50%, -50%) scale(0)'
                                                : `translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px)) scale(1)`,
                                            opacity: animate ? 0 : 1,
                                            transition: `all ${1.4 + Math.random() * 0.6}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.22 + i * 0.04}s`,
                                            filter: 'blur(0.8px)',
                                            animation: animate ? 'none' : `flicker ${0.4 + Math.random() * 0.5}s ease-in-out infinite ${Math.random() * 0.6}s`
                                        }}
                                    />
                                );
                            })}

                            {/* Main letter */}
                            <div
                                className="font-black text-green-500 relative z-10"
                                style={{
                                    fontSize: 'clamp(4rem, 15vw, 12rem)',
                                    fontWeight: 900,
                                    letterSpacing: '0.05em',
                                    transform: animate
                                        ? 'translate(0, 0) scale(1)'
                                        : `${item.from} scale(0.4)`,
                                    opacity: animate ? 1 : 0,
                                    transition: `all 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.35}s`,
                                    textShadow: 'clamp(2px, 0.5vw, 6px) clamp(2px, 0.5vw, 6px) 0px rgba(0, 0, 0, 0.6)'
                                }}
                            >
                                {item.letter}
                            </div>

                            {/* Fire flakes effect after letter appears */}
                            {animate && [...Array(25)].map((_, i) => {
                                const angle = (Math.PI * 2 * i) / 25 + Math.random() * 0.5;
                                const distance = 100 + Math.random() * 80;

                                return (
                                    <div
                                        key={`flake-${i}`}
                                        className="absolute rounded-full pointer-events-none"
                                        style={{
                                            width: `${4 + Math.random() * 5}px`,
                                            height: `${4 + Math.random() * 5}px`,
                                            background: `radial-gradient(circle, rgba(134, 239, 172, 1) 0%, rgba(74, 222, 128, 0.9) 30%, rgba(34, 197, 94, 0.5) 60%, transparent 100%)`,
                                            top: '50%',
                                            left: '50%',
                                            transform: `translate(-50%, -50%)`,
                                            animation: `sparkle ${3 + Math.random() * 1.5}s ease-in-out ${index * 0.22 + 1.3 + i * 0.08}s forwards`,
                                            opacity: 0,
                                            '--angle': `${angle}rad`,
                                            '--distance': `${distance}px`,
                                            filter: 'blur(0.5px)'
                                        } as React.CSSProperties}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Loading text */}
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 text-center px-4 z-20"
                    style={{
                        bottom: 'clamp(1rem, 3vw, 1.5rem)',
                        opacity: animate ? 1 : 0,
                        transition: 'opacity 0.8s 1.2s'
                    }}
                >
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-green-400 font-mono overflow-hidden whitespace-nowrap">
                        <span
                            style={{
                                display: 'inline-block',
                                animation: 'typing 2s steps(35) 1.5s forwards, blink 0.75s step-end infinite',
                                borderRight: '2px solid rgba(74, 222, 128, 0.75)',
                                paddingRight: '2px',
                                width: '0',
                                overflow: 'hidden'
                            }}
                        >
                            synchronizing ENVI 8 systems......
                        </span>
                    </div>
                </div>
                <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes sparkle {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(
                calc(-50% + cos(var(--angle)) * var(--distance)),
                calc(-50% + sin(var(--angle)) * var(--distance))
              ) scale(0);
            }
          }
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            0%, 50% { border-color: rgba(74, 222, 128, 0.75); }
            51%, 100% { border-color: transparent; }
          }
        `}</style>
            </div>
        </div>
    );
};

export default ENVI8Preloader;
