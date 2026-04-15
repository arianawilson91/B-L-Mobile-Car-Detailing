"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden select-none cursor-ew-resize shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (full, underneath) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
      />
      {/* "After" label */}
      <div className="absolute top-4 right-4 bg-red-primary text-white px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider z-10">
        After
      </div>

      {/* Before image (clipped on top) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full" style={{ minWidth: "100%" }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            style={{
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "100%",
              maxWidth: "none",
            }}
          />
        </div>
        {/* "Before" label */}
        <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <button
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize border-2 border-red-primary"
          aria-label="Drag to compare before and after"
        >
          <svg className="w-6 h-6 text-red-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l-6-7 6-7zm8 0l6 7-6 7V5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
