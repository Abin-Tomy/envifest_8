import { useEffect, useState } from "react";

interface PreloaderProps {
    message?: string;
}

const Preloader = ({ message = "Loading..." }: PreloaderProps) => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-red-500/10" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px",
                        animation: "grid-move 20s linear infinite",
                    }}
                />
            </div>

            {/* Loading content */}
            <div className="relative z-10 text-center">
                {/* Spinning logo/icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative h-20 w-20">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin"
                            style={{ animationDuration: "3s" }} />

                        {/* Middle ring */}
                        <div className="absolute inset-2 rounded-full border-4 border-purple-500/30 animate-spin"
                            style={{ animationDuration: "2s", animationDirection: "reverse" }} />

                        {/* Inner ring */}
                        <div className="absolute inset-4 rounded-full border-4 border-red-500/30 animate-spin"
                            style={{ animationDuration: "1.5s" }} />

                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">
                        ENVI <span className="text-blue-500">8</span>
                    </h2>
                    <p className="text-sm text-gray-400 font-mono">
                        {message}
                        <span className="inline-block w-8 text-left">{dots}</span>
                    </p>
                </div>

                {/* Progress bar */}
                <div className="mt-6 w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse"
                        style={{
                            animation: "loading-bar 2s ease-in-out infinite",
                            width: "60%"
                        }} />
                </div>
            </div>

            <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes loading-bar {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
