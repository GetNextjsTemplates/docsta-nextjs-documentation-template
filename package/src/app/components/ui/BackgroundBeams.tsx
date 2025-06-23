'use client';
import { useEffect, useRef } from 'react';

export function BackgroundBeams() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        let animationFrameId: number;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const lines = Array.from({ length: 10 }, (_, i) => ({
            radius: i * 80 + 100,
            angle: Math.random() * 360,
            speed: Math.random() * 0.5 + 0.2,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(15,126,217,0.10)';
            ctx.lineWidth = 1;

            for (let r = 100; r < canvas.width / 1.5; r += 80) {
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, r, 0, 2 * Math.PI);
                ctx.stroke();
            }

            // Draw rotating beams (glow segments)
            lines.forEach((line) => {
                line.angle += line.speed;
                const rad = (line.angle * Math.PI) / 180;

                const cx = canvas.width / 2;
                const cy = canvas.height / 2;

                const x = cx + Math.cos(rad) * line.radius;
                const y = cy + Math.sin(rad) * line.radius;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rad);

                ctx.beginPath();
                ctx.rect(-1.5, -2, 1, 20);
                ctx.fillStyle = 'rgba(15,126,217,0.6)';
                ctx.shadowColor = '#0F7ED9';
                ctx.shadowBlur = 12;
                ctx.fill();

                ctx.restore();
            });


            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    );
}
