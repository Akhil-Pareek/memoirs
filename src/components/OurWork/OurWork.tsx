import { AppAssets } from "@/constants/AppAssets";
import Banner from "../common/Banner";
import WorkShowcaseCard from "./WorkShowcaseCard";

export default function OurWork() {
  const portfolioCategories = [
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
      label: "Wedding Highlights",
      slug: "wedding-highlights",
    },
  ];

  return (
    <section aria-labelledby="our-work-heading" >
      {/* Banner with accessible alt */}
      <Banner srcUrl={AppAssets?.ourWorkBanner} />

      {/* Intro Section */}
      <div className="text-darkMutedRed font-cormorant py-16 space-y-12 px-4">
        <div className="flex flex-col items-center gap-5">
          <h1
            id="our-work-heading"
            className="text-5xl text-center"
            tabIndex={0}
          >
            Discover the love stories we've captured
          </h1>
          <h2 className="text-2xl" tabIndex={0}>
            In every frame, love speaks volumes.
          </h2>
          <p className="text-lg max-w-5xl 4xl:text-2xl  4xl:max-w-7xl 4xl:leading-10  mx-auto text-center" tabIndex={0}>
            Take a look at the love stories we’ve captured, frozen in time. In
            these photos, every smile and tear holds countless tales. We feel
            honored to freeze these moments and share them with you. For the
            bride and groom, their wedding is a blur of happy memories. But for
            us, each wedding tells a million different stories. Here are some of
            our favorites. If our work touches your heart, reach out to us. Your
            story could be the next one we pour our hearts into capturing.
          </p>
        </div>
      </div>

      {/* Portfolio Categories */}
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-[85%] mx-auto px-4"
        role="list"
        aria-label="Portfolio categories"
      >
        {portfolioCategories.map((item, index) => (
          <WorkShowcaseCard href={`/our-work/${item?.slug}`} key={index} item={item} />
        ))}
      </div>

      {/* Storytelling Section */}
      <div className="font-cormorant text-darkMutedRed py-12 px-4  max-w-5xl 4xl:max-w-7xl  mx-auto space-y-6 text-center">
        <h2 className="text-4xl xl:text-5xl font-semibold" tabIndex={0}>
          More Than Just Photos — We Tell Stories
        </h2>
        <p className="text-lg  4xl:text-2xl 4xl:leading-10" tabIndex={0}>
          A wedding isn’t just a celebration — it’s the beginning of a lifelong
          journey. And photography isn’t just about clicking pictures — it’s
          about capturing emotions that words can’t express. Every smile, every
          tear, every stolen glance holds a memory, and we’re here to preserve
          those forever.
        </p>

        <p className="text-lg 4xl:text-2xl 4xl:leading-10" tabIndex={0}>
          Every couple has their own unique story — some meet in the most
          unexpected ways, while others are destined by tradition. Through our
          lens, we don’t just document events, we capture the soul of your bond.
          We believe that when you look back at your wedding photos, you should
          feel everything you felt in that moment, all over again.
        </p>

        <p className="text-lg 4xl:text-2xl 4xl:leading-10" tabIndex={0}>
          Our team is more than just a group of photographers — we're
          storytellers, and more importantly, your friends. We bring calm, joy,
          and positivity to your special day so you can truly be yourself.
          Whether it’s candid laughter or a quiet emotional exchange, we blend
          in seamlessly and make you feel comfortable, so your love can shine
          naturally.
        </p>

        <p
          className="text-xl 4xl:text-2xl 4xl:leading-10 font-semibold text-primaryGolden"
          tabIndex={0}
          aria-label="You live the moment — we'll make it timeless"
        >
          You live the moment — we'll make it timeless.
        </p>
      </div>
    </section>
  );
}
