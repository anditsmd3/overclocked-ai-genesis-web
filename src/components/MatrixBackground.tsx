
import React, { useEffect, useRef } from 'react';

function MatrixBackground({ timeout = 50 }) {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        
        const context = canvas.current.getContext('2d');
        if (!context) return;

        const width = document.body.offsetWidth;
        const height = document.body.offsetHeight;
        canvas.current.width = width;
        canvas.current.height = height;

        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);

        const columns = Math.floor(width / 20) + 1;
        const yPositions: number[] = Array.from({ length: columns }).fill(0) as number[];

        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);

        const botColors = ['#ff0066', '#00ff66', '#6600ff', '#ff6600', '#00ffff', '#ffff00', '#ff3366', '#33ff66'];

        const matrixEffect = () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, width, height);

            context.font = '15pt monospace';

            yPositions.forEach((y, index) => {
                // 10% chance for bot icon, 90% for regular characters
                const isBotIcon = Math.random() < 0.1;
                
                if (isBotIcon) {
                    // Set random bright color for bot icon with glow effect
                    const botColor = botColors[Math.floor(Math.random() * botColors.length)];
                    context.fillStyle = botColor;
                    context.shadowColor = botColor;
                    context.shadowBlur = 15;
                    const text = '⚡'; // Using a distinctive character as placeholder for bot
                    const x = index * 20;
                    context.fillText(text, x, y);
                    // Reset shadow for regular characters
                    context.shadowBlur = 0;
                } else {
                    // Regular green matrix characters
                    context.fillStyle = '#0f0';
                    const text = String.fromCharCode(Math.random() * 128);
                    const x = index * 20;
                    context.fillText(text, x, y);
                }

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [timeout]);

    return (
        <div
            style={{
                background: '#000000',
                overflow: 'hidden',
                position: 'fixed',
                height: '100%',
                width: '100%',
                zIndex: 0,
                left: '0',
                top: '0',
            }}
        >
            <canvas
                ref={canvas}
            />
        </div>
    );
}

export default MatrixBackground;
