"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type ImageItem = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageItem[];
};

export default function ImageGallery({ images }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-1 xl:w-[85%] mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img.src}
              alt={img.alt || `Gallery Image ${index + 1}`}
              width={1000}
              height={1000}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaSearch className="text-white text-2xl" />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src }))}
        plugins={[Thumbnails]}
        render={{
          slide: ({ slide }) => (
            <div className="w-screen h-screen flex items-center justify-center bg-black relative">
              <Image
                src={slide.src}
                alt="lightbox"
                className="w-auto h-full object-contain"
                fill
              />
            </div>
          ),
        }}
      />
    </>
  );
}
