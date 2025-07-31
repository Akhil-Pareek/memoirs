import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const couples = [
    {
      id: 1,
      name: "Aarav & Meera",
      slug: "aarav-meera",
      src: AppAssets?.discoverOne,
    },
    {
      id: 2,
      name: "Vihaan & Anaya",
      slug: "vihaan-anaya",
      src: AppAssets?.discoverTwo,
    },
    {
      id: 3,
      name: "Rohan & Ishita",
      slug: "rohan-ishita",
      src: AppAssets?.discoverThree,
    },
    {
      id: 4,
      name: "Arjun & Priya",
      slug: "arjun-priya",
      src: AppAssets?.discoverOne,
    },
    {
      id: 5,
      name: "Kabir & Kiara",
      slug: "kabir-kiara",
      src: AppAssets?.discoverTwo,
    },
    {
      id: 6,
      name: "Dev & Saanvi",
      slug: "dev-saanvi",
      src: AppAssets?.discoverThree,
    },
    {
      id: 7,
      name: "Raj & Isha",
      slug: "raj-isha",
      src: AppAssets?.discoverOne,
    },
    {
      id: 8,
      name: "Nikhil & Tara",
      slug: "nikhil-tara",
      src: AppAssets?.discoverTwo,
    },
    {
      id: 9,
      name: "Ethan & Olivia",
      slug: "ethan-olivia",
      src: AppAssets?.discoverThree,
    },
    {
      id: 10,
      name: "Noah & Emma",
      slug: "noah-emma",
      src: AppAssets?.discoverOne,
    },
  ];

  return (
    <section className="text-darkMutedRed font-cormorant py-16 space-y-12 px-4 pt-44">
      <div className="flex flex-col items-center gap-5">
        <p className="text-5xl text-center">
          Weddings — Where Souls Vow and Journeys Begin
        </p>
        <p className="text-2xl text-center">
          A single day that echoes through a lifetime.
        </p>
        <p className="text-lg max-w-5xl mx-auto text-center">
          A wedding is more than a celebration — it’s a sacred moment where two
          lives entwine, two hearts synchronize, and two souls promise to walk
          as one. It marks the beginning of a shared forever, where love becomes
          not just a feeling, but a commitment — quiet, fierce, and enduring.
          <br />
          <br />
          In the embrace of a spouse, we find not only companionship, but
          courage. Not just laughter, but refuge. A partner is the mirror of our
          spirit, the keeper of our dreams, and the silent strength through
          every season of life.
          <br />
          <br />
          <em className="italic">
            Love is not always loud. Sometimes, it’s the way they wait at the
            door, the way they remember your silences, or the way they hold your
            trembling hand without a word.
          </em>
          <br />
          <br />
          We believe every wedding holds magic — not in the grandeur of the
          venue, but in the unspoken glances, the trembling vows, and the tears
          held back by fathers. Here, we capture not just images, but the
          invisible thread that ties two lives together. Let your love story
          live through our lens — honest, heartfelt, and timeless.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-[85%] mx-auto">
        {couples.map((item, index) => (
          <Link
            href={`/our-work/real-wedding/${item?.slug}`}
            key={index}
            className="w-full group shadow-full relative rounded-2xl border-t-5 border-primaryGolden/[60%] transition-all duration-300 hover:border-[#d1192e] overflow-hidden"
          >
            {/* Left white overlay */}
            <div className="absolute top-0 left-0 h-full w-[50%] bg-white/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>

            {/* Right red overlay */}
            <div className="absolute top-0 right-0 h-full w-[50%] bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>

            {/* Image Layer */}
            <div className="overflow-hidden relative z-0 w-full">
              <Image
                alt={item?.name}
                src={item?.src}
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 w-full"
              />
            </div>

            {/* Link with animated underline */}
            <div className="group text-center bg-white  w-[50%] py-1.5 rounded-2xl  font-semibold transition-all duration-300 text-primaryGolden absolute bottom-[8%] left-[25%] z-20">
              <div className="relative inline-block">
                <span>{item?.name}</span>
                <div className="h-[2px] w-2 bg-primaryGolden group-hover:w-full transition-all duration-300 mx-auto"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
