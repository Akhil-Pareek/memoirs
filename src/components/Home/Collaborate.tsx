import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Slider from "../common/Slider";

export default function Collaborate() {
  const content = [
    { src: AppAssets?.vogue, alt: "Featured in Vogue magazine" },
    { src: AppAssets?.TOI, alt: "Featured in Times of India" },
    { src: AppAssets?.traveler, alt: "Featured in Traveler magazine" },
    { src: AppAssets?.vogue, alt: "Featured in Vogue magazine" },
    { src: AppAssets?.TOI, alt: "Featured in Times of India" },
    { src: AppAssets?.traveler, alt: "Featured in Traveler magazine" },
  ];

  return (
    <section className="bg-white" aria-labelledby="collaborate-heading">
      <h2
        id="collaborate-heading"
        className="text-2xl 4xl:text-2xl text-center pt-12 font-bold"
      >
        I'M FEATURING IN
      </h2>
      <Slider
        autoplay
        loop
        breakpoints={{ md: 2, lg: 3, xl: 6 }}
        dotColorInactive="#000"
        dotColorActive="#23B467"
      >
        {content.map((item, index) => (
          <div key={index}>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
