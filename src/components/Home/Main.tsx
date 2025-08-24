import { AppAssets } from "@/constants/AppAssets";
import Banner from "../common/Banner";
import Capturing from "./Capturing";
import Collaborate from "./Collaborate";
import InstagramPost from "./InstagramPost";
import Testimonial from "./Testimonial";

export default function Main() {
  return (
    <main className="font-cormorant  text-dimBlack bg-lightCream">
      {/* Hero Banner */}
      <Banner srcUrl={AppAssets?.banner} />
      {/* Capturing Section */}
      <Capturing />
      {/* Parallax */}
      <section className="h-screen bg-parallax bg-fixed" aria-hidden="true" />
      {/* Collaborate Section */}
      <Collaborate />
      {/* Testimonials */}
      <Testimonial />
      {/* Instagram Section */}
      <InstagramPost />
    </main>
  );
}
