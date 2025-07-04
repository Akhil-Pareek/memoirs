import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Slider from "../common/Slider";

export default function Instagram() {
  const content = [
    { src: AppAssets?.post1, link: "https://www.instagram.com/p/POST_ID_1" },
    { src: AppAssets?.post2, link: "https://www.instagram.com/p/POST_ID_2" },
    { src: AppAssets?.post3, link: "https://www.instagram.com/p/POST_ID_3" },
    { src: AppAssets?.post4, link: "https://www.instagram.com/p/POST_ID_4" },
    { src: AppAssets?.post5, link: "https://www.instagram.com/p/POST_ID_5" },
    { src: AppAssets?.post6, link: "https://www.instagram.com/p/POST_ID_6" },
    { src: AppAssets?.post1, link: "https://www.instagram.com/p/POST_ID_1" },
    { src: AppAssets?.post2, link: "https://www.instagram.com/p/POST_ID_2" },
    { src: AppAssets?.post3, link: "https://www.instagram.com/p/POST_ID_3" },
    { src: AppAssets?.post4, link: "https://www.instagram.com/p/POST_ID_4" },
    { src: AppAssets?.post5, link: "https://www.instagram.com/p/POST_ID_5" },
    { src: AppAssets?.post6, link: "https://www.instagram.com/p/POST_ID_6" },
    { src: AppAssets?.post1, link: "https://www.instagram.com/p/POST_ID_1" },
    { src: AppAssets?.post2, link: "https://www.instagram.com/p/POST_ID_2" },
    { src: AppAssets?.post3, link: "https://www.instagram.com/p/POST_ID_3" },
    { src: AppAssets?.post4, link: "https://www.instagram.com/p/POST_ID_4" },
    { src: AppAssets?.post5, link: "https://www.instagram.com/p/POST_ID_5" },
    { src: AppAssets?.post6, link: "https://www.instagram.com/p/POST_ID_6" },
  ];
  return (
    <section className="bg-grayishBlue py-12 space-y-8 ">
      <div className="text-2xl text-center pt-12">
        FOLLOW US ON INSTAGRAM{" "}
        <Link
          href="https://www.instagram.com/memoirs_jaipur/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          memoirs_jaipur
        </Link>
      </div>
      <div className="">
        <Slider
          autoplay
          loop
          breakpoints={{ md: 2, lg: 3 ,xl:6 }}
        //   dots
          dotColorInactive="#000"
          dotColorActive="#23B467"
        >
          {content.map((item, index) => (
            <div className="relative group mx-1" key={index}>
              <Image
                src={item?.src}
                alt="Instagram post"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />

              <Link
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-dimBlack/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              >
                <FaInstagram className="text-white text-xl" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
