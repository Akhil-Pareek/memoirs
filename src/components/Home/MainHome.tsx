import Collaborate from "./Collaborate";
import HomeBanner from "./HomeBanner";
import Instagram from "./Instagram";
import Testimonial from "./Testimonial";

export default function MainHome() {
  return (
    <main className="font-cormorant  text-dimBlack bg-lightCream">
      <HomeBanner />
      <Testimonial />
      <Collaborate />
      <Instagram />
    </main>
  );
}
