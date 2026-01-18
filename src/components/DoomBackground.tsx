import { useEffect, useRef } from "react";

interface DoomBackgroundProps {
    opacity?: number;
}

export default function DoomBackground({ opacity = 0.1 }: DoomBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "ENVI_8_DOOMSDAY";
        const fontSize = 20;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#2a9a58ff"; // Matrix Green
            ctx.font = `${fontSize}px Orbitron`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity }}>
            <canvas ref={canvasRef} id="doomCanvas" className="w-full h-full" />
            <div className="scanlines absolute inset-0" />
        </div>
    );
}
