"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              {photo.caption && (
                <p className="text-white text-sm px-4 pb-4 font-medium">
                  {photo.caption}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % photos.length)
          }
        />
      )}
    </>
  );
}
