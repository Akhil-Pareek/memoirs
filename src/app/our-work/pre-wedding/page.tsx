import ImageGallery from "@/components/OurWork/ImageGallery";
import { AppAssets } from "@/constants/AppAssets";
import React from "react";

export default function page() {
  const weddingImages = [
    { src: AppAssets?.post1 },
    { src: AppAssets?.couple },
    { src: AppAssets?.banner },
    { src: AppAssets?.parallax },
    { src: AppAssets?.ourWorkBanner },
    { src: AppAssets?.post1 },
  ];
  return (
    <div className="font-cormorant bg-[#f3eae4] text-[#5c4a3c] py-20 ">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="uppercase tracking-widest text-xs text-darkMutedRed">
          Etching Romance Into Eternity
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          The Essence of Pre-Wedding Cinematics
        </h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-darkMutedRed text-center">
          <p>
            Before the vows, before the aisle — there lies a chapter brimming
            with whispered promises and unspoken enchantment. A pre-wedding film
            is not just a montage; it's an intimate reverie, where every glance,
            every heartbeat becomes a brushstroke on the canvas of forever.
          </p>
          <p>
            At <strong>Memoirs</strong>, we craft more than visuals — we sculpt
            sentiment. With an eye for the poetic and a lens attuned to the
            ineffable, our films capture the ineffable chemistry that lingers
            between two souls before the ceremonial symphony begins.
          </p>
          <p>
            From serendipitous smiles to moonlit embraces, every frame is
            curated with nuance, elegance, and emotional precision. It’s where
            luxury meets longing, and love unveils itself in its most unscripted
            form.
          </p>
          <p className="font-semibold">
            One day, you’ll look back — not just to see how it looked, but to
            feel how it fluttered. Because pre-wedding cinematography isn’t
            about the spectacle — it’s about soulbound storytelling.
          </p>
        </div>
      </div>
      <div className="px-4 py-10">
        <ImageGallery images={weddingImages} />
      </div>
    </div>
  );
}
