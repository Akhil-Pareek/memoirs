import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";

export default function Capturing() {
  return (
    <section className="overflow-hidden bg-warmGray py-16 px-4 relative h-[70vh] lg:h-[50vh] xl:h-screen">
      <div className=" flex justify-center items-center h-full">
        {/* Left Image */}
        <div className=" absolute -left-5 top-2 xl:-left-10 xl:top-8 w-[25%]">
          <Image
            src={AppAssets?.flowerOne}
            alt="Bride and Groom"
            className="rotate-[50deg] w-60"
            width={500}
            height={500}
          />
        </div>

        {/* Center Text */}
        <div className="xl:w-1/2 flex flex-col justify-center items-center gap-10 text-darkMutedRed  h-full">
          <p className="uppercase tracking-widest text-xs">
            Experience Real Emotions, Real Moments, Real Weddings
          </p>
          <h1 className="text-3xl xl:text-5xl font-bold">
            Capturing real emotions and <br />
            intimate moments, preserving <br />
            your special day for eternity
          </h1>
          <p className=" leading-relaxed text-center">
            Your wedding day is one of the most important days of <br /> your
            life, filled with love, joy, and unforgettable moments.
          </p>
          <p className=" leading-relaxed text-center">
            Our candid photography and videography services ensure <br /> you
            can relive the genuine emotions and unforgettable <br /> moments of
            your wedding day for years to come.
          </p>
        </div>

        {/* Right Image */}
        <div className=" absolute -right-5 md:-right-10 lg:-right-24 xl:-right-40 bottom-0 w-[25%]">
          <Image
            src={AppAssets?.flowerTwo}
            alt="Smiling Bride"
            className="-rotate-[40deg] w-60"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
