import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Slider from "../common/Slider";

export default function Collaborate() {
  const content = [
    { src: AppAssets?.vogue },
    { src: AppAssets?.TOI },
    { src: AppAssets?.traveler },
    { src: AppAssets?.vogue },
    { src: AppAssets?.TOI },
    { src: AppAssets?.traveler },
  ];
  return (
    <section className="bg-white">
      <div className="text-2xl text-center pt-12">I'M FEATURING IN </div>
      <Slider
        autoplay
        loop
        breakpoints={{ md: 2, lg: 3, xl: 6 }}
        //   dots
        dotColorInactive="#000"
        dotColorActive="#23B467"
      >
        {content.map((item, index) => (
          <div key={index}>
            <Image
              src={item?.src}
              alt="Instagram post"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
