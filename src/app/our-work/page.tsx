import Banner from "@/components/Banner";
import Discover from "@/components/OurWork/Discover";
import { AppAssets } from "@/constants/AppAssets";

export default function page() {
  return (
    <section>
      <Banner bannerLabel="Our Work" srcUrl={AppAssets?.ourWorkBanner} />
      <Discover />
      <section className="font-cormorant text-darkMutedRed py-12 px-4 max-w-5xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl xl:text-5xl font-semibold">
          More Than Just Photos — We Tell Stories
        </h2>
        <p className="text-lg xl:text-xl">
          A wedding isn’t just a celebration — it’s the beginning of a lifelong
          journey. And photography isn’t just about clicking pictures — it’s
          about capturing emotions that words can’t express. Every smile, every
          tear, every stolen glance holds a memory, and we’re here to preserve
          those forever.
        </p>

        <p className="text-lg xl:text-xl">
          Every couple has their own unique story — some meet in the most
          unexpected ways, while others are destined by tradition. Through our
          lens, we don’t just document events, we capture the soul of your bond.
          We believe that when you look back at your wedding photos, you should
          feel everything you felt in that moment, all over again.
        </p>

        <p className="text-lg xl:text-xl">
          Our team is more than just a group of photographers — we're
          storytellers, and more importantly, your friends. We bring calm, joy,
          and positivity to your special day so you can truly be yourself.
          Whether it’s candid laughter or a quiet emotional exchange, we blend
          in seamlessly and make you feel comfortable, so your love can shine
          naturally.
        </p>

        <p className="text-xl font-semibold text-primaryGolden">
          You live the moment — we'll make it timeless.
        </p>
      </section>
    </section>
  );
}
