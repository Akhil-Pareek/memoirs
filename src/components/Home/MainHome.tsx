import { AppAssets } from "@/constants/AppAssets";
import Banner from "../Banner";
import Collaborate from "./Collaborate";
import Instagram from "./Instagram";
import Testimonial from "./Testimonial";
import Capturing from "./Capturing";

export default function MainHome() {
  return (
    <main className="font-cormorant  text-dimBlack bg-lightCream">
      <Banner srcUrl={AppAssets?.banner} bannerLabel="Home" />
      <Capturing />
      <div className="h-screen bg-parallax bg-fixed"/>
      <Collaborate />
      <Testimonial />
      <Instagram />
    </main>
  );
}
