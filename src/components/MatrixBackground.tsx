import React, { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';

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

        // Create a temporary canvas to render the Bot icon
        const createBotIcon = (color: string, size: number = 15) => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            if (!tempCtx) return null;
            
            tempCanvas.width = size;
            tempCanvas.height = size;
            
            // Create SVG string for Bot icon (simplified version)
            const svgString = `
                <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="11" width="16" height="10" rx="2" fill="${color}"/>
                    <circle cx="8.5" cy="15.5" r="1" fill="#000"/>
                    <circle cx="15.5" cy="15.5" r="1" fill="#000"/>
                    <path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="${color}" stroke-width="2"/>
                    <path d="M8 21l0-4.5" stroke="${color}" stroke-width="2"/>
                    <path d="M16 21l0-4.5" stroke="${color}" stroke-width="2"/>
                </svg>
            `;
            
            const img = new Image();
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            return new Promise<HTMLCanvasElement | null>((resolve) => {
                img.onload = () => {
                    tempCtx.drawImage(img, 0, 0, size, size);
                    URL.revokeObjectURL(url);
                    resolve(tempCanvas);
                };
                img.onerror = () => resolve(null);
                img.src = url;
            });
        };

        const matrixEffect = async () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, width, height);

            context.font = '15pt monospace';

            for (let index = 0; index < yPositions.length; index++) {
                const y = yPositions[index];
                
                // 10% chance for bot icon, 90% for regular characters
                const isBotIcon = Math.random() < 0.1;
                
                if (isBotIcon) {
                    // Set random bright color for bot icon with glow effect
                    const botColor = botColors[Math.floor(Math.random() * botColors.length)];
                    context.fillStyle = botColor;
                    context.shadowColor = botColor;
                    context.shadowBlur = 15;
                    
                    const x = index * 20;
                    
                    // Try to create and draw bot icon, fallback to robot emoji if it fails
                    try {
                        const botCanvas = await createBotIcon(botColor, 15);
                        if (botCanvas) {
                            context.drawImage(botCanvas, x, y - 15, 15, 15);
                        } else {
                            // Fallback to a simple robot character
                            context.fillText('🤖', x, y);
                        }
                    } catch (error) {
                        // Fallback to a simple robot character
                        context.fillText('🤖', x, y);
                    }
                    
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
            }
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