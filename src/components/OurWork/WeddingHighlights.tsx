"use client";
import Image from "next/image";
import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";

interface IWeddingHighlights {
  weddingHighlightsData: any;
}

export default function WeddingHighlights({ weddingHighlightsData }: IWeddingHighlights) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section
      className="font-cormorant bg-lightCream text-primaryGolden py-20"
      aria-labelledby="wedding-films-heading"
    >
      <div className="py-10 xl:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p
            className="uppercase tracking-widest text-xs 4xl:text-base text-darkMutedRed "
            role="note"
          >
            Etching memories into motion
          </p>
          <h2
            id="wedding-films-heading"
            className="text-3xl md:text-4xl lg:text-5xl 4xl:max-w-7xl font-bold leading-tight"
          >
            The Art of Wedding Films
          </h2>
          <div className="space-y-6 text-base md:text-lg 4xl:text-2xl leading-relaxed text-darkMutedRed text-center">
            <p>
              In a world where moments flutter by like petals in the wind, a{" "}
              <strong>wedding film</strong> becomes more than just moving
              pictures — it becomes memory in motion. At{" "}
              <strong>Memoirs</strong>, we believe wedding cinematography is the
              art of storytelling with soul — where laughter echoes, eyes speak,
              and love breathes in every frame.
            </p>
            <p>
              A wedding film is your story — told not through posed scenes, but
              through real, unrehearsed emotion. It lets you relive not only how
              everything looked, but how it all felt. It’s the sound of your
              grandmother’s blessing, the crack in your voice as you say “I do,”
              the tears held back by your father — all woven into one timeless
              tapestry.
            </p>
            <p className="font-semibold">
              Years from now, you’ll press play — and in an instant, be
              transported back. Because wedding films don’t just record time…
              they preserve legacy.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 xl:space-y-6 px-4 xl:w-[85%] mx-auto grid xl:grid-cols-2 gap-x-5">
        {weddingHighlightsData.map((video: any) => (
          <article
            key={video?.id}
            className="relative rounded-lg overflow-hidden aspect-video shadow-full border-b-4 border-r-4 border-white hover:border-scarletRed transition-all duration-300"
            aria-label={video?.title}
          >
            {playingVideo === video?.id ? (
              <iframe
                width="100%"
                height="100%"
                src={video?.url}
                title={video?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="group">
                <Image
                  src={video?.thumbnail}
                  alt={`Thumbnail for ${video?.title}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setPlayingVideo(video?.id)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/20 transition duration-300"
                  aria-label={`Play ${video?.title}`}
                  tabIndex={0}
                >
                  <BsPlayCircle
                    className="text-white transition-all duration-300 group-hover:text-scarletRed w-8 h-8 xl:w-12 xl:h-12"
                    aria-hidden="true"
                  />
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
