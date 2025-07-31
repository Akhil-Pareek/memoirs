import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";

export default function Discover() {
  const discoverItems = [
    {
      src: AppAssets?.discoverOne,
      label: "Pre Weddings",
      slug: "pre-wedding",
    },
    {
      src: AppAssets?.discoverThree,
      label: "Real Weddings",
      slug: "real-wedding",
    },

    {
      src: AppAssets?.discoverOne,
      label: "Films",
      slug: "film",
    },
  ];

  return (
    <section className="text-darkMutedRed font-cormorant py-16 space-y-12 px-4">
      <div className="flex flex-col items-center gap-5 ">
        <p className="text-5xl text-center">
          Discover the love stories we've captured
        </p>
        <p className="text-2xl">In every frame, love speaks volumes.</p>
        <p className="text-lg max-w-5xl mx-auto text-center">
          Take a look at the love stories we’ve captured, frozen in time. In
          these photos, every smile and tear holds countless tales. We feel
          honored to freeze these moments and share them with you. For the bride
          and groom, their wedding is a blur of happy memories. But for us, each
          wedding tells a million different stories. Here are some of our
          favorites. If our work touches your heart, reach out to us. Your story
          could be the next one we pour our hearts into capturing.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-[85%] mx-auto">
        {discoverItems.map((item, index) => (
          <Link
            href={`/our-work/${item?.slug}`}
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
                alt={item?.label}
                src={item?.src}
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 w-full"
              />
            </div>

            {/* Link with animated underline */}
            <div className="group text-center bg-white  w-[50%] py-1.5 rounded-2xl  font-semibold transition-all duration-300 text-primaryGolden absolute bottom-[8%] left-[25%] z-20">
              <div className="relative inline-block">
                <span>{item?.label}</span>
                <div className="h-[2px] w-2 bg-primaryGolden group-hover:w-full transition-all duration-300 mx-auto"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
