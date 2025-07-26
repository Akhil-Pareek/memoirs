import Image from "next/image";

interface IBanner {
  bannerLabel: string;
  srcUrl: string;
}

export default function Banner({ bannerLabel,srcUrl }: IBanner) {
  return (
    <div
      className="relative h-screen "
      aria-labelledby="banner-heading"
      aria-describedby="banner-description"
      role="region"
    >
      {/* Background Image */}
      <Image
        src={srcUrl}
        alt="Solar Background"
        fill
        priority
        quality={75}
        sizes="(min-width: 1024px) 100vw"
        className="object-cover z-0 "
      />
      {/* <p className=" font-cormorant absolute top-[50%] left-[35%] xl:left-[44%] 2xl:left-[47%] text-3xl lg:text-5xl text-white">{bannerLabel}</p> */}
      {/* <Image
        src={AppAssets?.mobileBanner}
        alt="Solar Background"
        fill
        priority
        quality={75}
        sizes="(max-width: 1023px) 100vw"
        className="object-cover z-0 lg:hidden"
      /> */}

      {/* Foreground Content */}
      <div className="relative z-10 capitalize flex flex-col justify-center items-center gap-8 h-[60%] md:h-[70%] xl:h-[60%] px-4 text-center">
        {/* <h1
          id="banner-heading"
          className="font-bold text-sm 2xl:text-3xl leading-tight"
        >
          <span>Stop chasing your tail.</span>
          <br />
          <span>Start closing more deals with less effort!</span>
        </h1>

        <div id="banner-description" className="2xl:space-y-1">
          <h2 className="md:text-2xl font-bold text-dark-teal md:leading-8">
            India’s 1<sup>st</sup> Solar Management
            <span className="xl:hidden inline">
              <br />
            </span>
            Information System
          </h2>
          <p className="text-lg 2xl:text-sm text-dark-gray md:leading-8 px-4 md:px-0 max-w-2xl mx-auto">
            ALDS Green is the key to unlocking new levels of efficiency,
            profitability, and customer satisfaction.
          </p>
        </div> */}
      </div>
    </div>
  );
}
