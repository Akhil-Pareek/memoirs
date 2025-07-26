import Banner from "@/components/Banner";
import Discover from "@/components/OurWork/Discover";
import { AppAssets } from "@/constants/AppAssets";

export default function page() {
  return (
    <section>
      <Banner bannerLabel="Our Work" srcUrl={AppAssets?.ourWorkBanner} />
      <Discover />
    </section>
  );
}
