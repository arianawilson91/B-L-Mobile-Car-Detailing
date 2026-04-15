"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  photos: { src: string; alt: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
        {photo.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-3 px-4 text-sm">
            {photo.caption}
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
        aria-label="Next image"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}
