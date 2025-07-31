"use client";

import { useState } from "react";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { AppAssets } from "@/constants/AppAssets";

export default function WeddingFilmsPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const weddingVideos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/XPILTdqn_Z0?autoplay=1",
      title: "Wedding Film 1",
      thumbnail: AppAssets.ourWorkBanner, // Replace with your image
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/_ebUuqIp7MU?autoplay=1",
      title: "Wedding Film 2",
      thumbnail: AppAssets.contactUsBanner,
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/CoTXK1jUQn0?autoplay=1",
      title: "Wedding Film 3",
      thumbnail: AppAssets.aboutUsBanner,
    },
  ];

  return (
    <section className="font-cormorant bg-[#f3eae4] text-[#5c4a3c] py-20 ">
      <div className="py-10 xl:py-20 px-4 md:px-10 lg:px-20 ">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="uppercase tracking-widest text-xs text-darkMutedRed">
            Preserving Emotions Beyond Time
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            The Art of Wedding Films
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-darkMutedRed text-center">
            <p>
              In a world where moments flutter by like petals in the wind, a{" "}
              wedding film becomes more than just moving pictures — it becomes
              memory in motion. At <strong>Memoirs</strong>, we believe wedding
              cinematography is the art of storytelling with soul — where
              laughter echoes, eyes speak, and love breathes in every frame.
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

      <div className="space-y-10 w-[85%] mx-auto">
        {weddingVideos.map((video) => (
          <div
            key={video?.id}
            className="relative rounded-lg overflow-hidden aspect-video shadow-full border-b-4 border-r-4 border-white hover:border-[#d1192e] transition-all duration-300"
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
                  alt={video?.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setPlayingVideo(video?.id)}
                  className="absolute inset-0 flex items-center cursor-pointer justify-center  hover:bg-black/20 transition duration-300"
                >
                  <BsPlayCircle className="text-white transition-all duration-300 group-hover:text-[#d1192e] w-20 h-20" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
