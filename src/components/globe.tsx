"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

type GlobeProps = {
  className?: string;
};

export function InteractiveGlobe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.15,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.88, 0.91, 0.94],
      markerColor: [0.36, 0.49, 0.6],
      glowColor: [0.78, 0.84, 0.9],
      markers: [
        { location: [28.6139, 77.209], size: 0.06 },
        { location: [37.7749, -122.4194], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.04 },
      ],
    });

    let frame = 0;
    const onFrame = () => {
      phi += 0.003;
      globe.update({ phi });
      frame = requestAnimationFrame(onFrame);
    };
    frame = requestAnimationFrame(onFrame);

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: "1" }}
      aria-hidden
    />
  );
}
