import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";

export default function Discover() {
  const discoverItems = [
    {
      src: AppAssets?.discoverOne,
      label: "Pre Weddings",
      slug: "pre-weddings",
    },
    {
      src: AppAssets?.discoverOne,
      label: "Real Weddings",
      slug: "real-weddings",
    },

    {
      src: AppAssets?.discoverThree,
      label: "Films",
      slug: "films",
    },
  ];

  return (
    <section className="text-darkMutedRed font-cormorant py-16 space-y-12">
      <div className="flex flex-col items-center gap-5 ">
        <p className="text-5xl">Discover the love stories we've captured</p>
        <p className="text-2xl">In every frame, love speaks volumes.</p>
        <p className="text-lg xl:w-[60%] text-center">
          Take a look at the love stories we’ve captured, frozen in time. In
          these photos, every smile and tear holds countless tales. We feel
          honored to freeze these moments and share them with you. For the bride
          and groom, their wedding is a blur of happy memories. But for us, each
          wedding tells a million different stories. Here are some of our
          favorites. If our work touches your heart, reach out to us. Your story
          could be the next one we pour our hearts into capturing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 xl:w-[85%] mx-auto">
        {discoverItems.map((item, index) => (
          <Link
            href={`/our-work/${item?.slug}`}
            key={index}
            className="space-y-5"
          >
            <div className="overflow-hidden">
              <Image
                alt={item?.label}
                src={item?.src}
                width={500}
                height={500}
                className="cursor-pointer hover:scale-105 transition-all duration-500"
              />
            </div>
            <p className="text-center xl:text-xl font-semibold text-primaryGolden">
              {item?.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
