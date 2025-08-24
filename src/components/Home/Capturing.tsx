import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";

export default function Capturing() {
  return (
    <section
      className="overflow-hidden bg-warmGray py-16 px-4 relative h-[90vh] md:h-[65vh] lg:h-[50vh] xl:h-screen 4xl:h-[80vh]"
      aria-labelledby="capturing-heading"
    >
      <div className="flex justify-center items-center h-full">
        {/* Decorative Left Image */}
        <div className="absolute -left-5 top-2 xl:-left-10 xl:top-8 w-[25%]">
          <Image
            src={AppAssets?.flowerOne}
            alt=""
            role="presentation"
            className="rotate-[50deg] w-60"
            width={500}
            height={500}
          />
        </div>

        {/* Content */}
        <div className="lg:w-[70%] xl:w-1/2 4xl:w-[70%] flex flex-col justify-center items-center gap-10 text-darkMutedRed h-full text-center">
          <p className="uppercase tracking-widest text-xs 4xl:text-base">
            Experience Real Emotions, Real Moments, Real Weddings
          </p>
          <h2 id="capturing-heading" className="text-3xl xl:text-5xl 4xl:text-[60px] font-bold">
            Capturing real emotions and
            <span className="hidden xl:inline">
              <br />
            </span>
            intimate moments, preserving{" "}
            <span className="hidden xl:inline">
              <br />
            </span>
            your special day for eternity
          </h2>
          <div className="space-y-5 4xl:text-xl">
            <p className="leading-relaxed ">
              Your wedding day is one of the most important days of your life,
              filled with love, joy, and unforgettable moments.
            </p>
            <p className="leading-relaxed">
              Our candid photography and videography services ensure you can
              relive the genuine emotions and unforgettable moments of your
              wedding day for years to come.
            </p>
          </div>
        </div>

        {/* Decorative Right Image */}
        <div className="absolute -right-5 md:-right-10 lg:-right-24 xl:-right-48 2xl:-right-60 bottom-0 w-[25%] 4xl:w-fit 4xl:-right-14 ">
          <Image
            src={AppAssets?.flowerTwo}
            alt=""
            role="presentation"
            className="-rotate-[40deg] w-60 "
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
