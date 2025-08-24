import { libData } from "@/lib/data";
import ImageGallery from "./ImageGallery";

export default function PreWedding() {
  const preWeddingImages = libData?.preWeddingImages;

  return (
    <section
      className="font-cormorant text-primaryGolden pt-20 px-4"
      aria-labelledby="prewedding-heading"
      role="region"
    >
      {/* Intro Section */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p
          id="prewedding-subheading"
          className="uppercase tracking-widest text-xs text-darkMutedRed"
          tabIndex={0}
        >
          Etching Romance Into Eternity
        </p>
        <h1
          id="prewedding-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          tabIndex={0}
        >
          The Essence of Pre-Wedding Cinematics
        </h1>
        <article
          className="space-y-6 text-base md:text-lg 4xl:text-2xl leading-relaxed text-darkMutedRed text-center"
          aria-label="Pre-wedding description"
        >
          <p tabIndex={0}>
            Before the vows, before the aisle — there lies a chapter brimming
            with whispered promises and unspoken enchantment. A pre-wedding film
            is not just a montage; it's an intimate reverie, where every glance,
            every heartbeat becomes a brushstroke on the canvas of forever.
          </p>
          <p tabIndex={0}>
            At <strong>Memoirs</strong>, we craft more than visuals — we sculpt
            sentiment. With an eye for the poetic and a lens attuned to the
            ineffable, our films capture the ineffable chemistry that lingers
            between two souls before the ceremonial symphony begins.
          </p>
          <p tabIndex={0}>
            From serendipitous smiles to moonlit embraces, every frame is
            curated with nuance, elegance, and emotional precision. It’s where
            luxury meets longing, and love unveils itself in its most unscripted
            form.
          </p>
          <p className="font-semibold" tabIndex={0}>
            One day, you’ll look back — not just to see how it looked, but to
            feel how it fluttered. Because pre-wedding cinematography isn’t
            about the spectacle — it’s about soulbound storytelling.
          </p>
        </article>
      </div>

      {/* Image Gallery Section */}
      <div className="py-10">
        <ImageGallery images={preWeddingImages} />
      </div>
    </section>
  );
}
