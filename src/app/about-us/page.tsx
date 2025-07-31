import Banner from "@/components/Banner";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";

export default function page() {
  return (
    <section>
      <Banner srcUrl={AppAssets?.aboutUsBanner} bannerLabel="About Us" />
      <section className="relative overflow-hidden">
        <section className="py-10 xl:py-20 px-4 md:px-10 lg:px-20  font-cormorant bg-[#f3eae4] text-[#5c4a3c]">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="uppercase tracking-widest text-xs text-darkMutedRed">
              Crafting Timeless Testimonies of Love
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              More than imagery —
              <span className="block">we compose visual legacies</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-darkMutedRed text-center">
              <p>
                Within every whispered vow, every teardrop that catches the
                morning light, and every embrace that lingers longer than words
                can explain — lives a story waiting to be eternalized. At{" "}
                <strong>Memoirs Photography</strong>, we don’t just frame
                events; we immortalize sentiments.
              </p>
            </div>
          </div>
        </section>
        <div className="font-cormorant  bg-[#f3eae4] text-[#5c4a3c] p-4">
          <p className="w-full -rotate-90 md:rotate-0 text-[70px] md:text-[150px] lg:text-[160px] xl:text-[150px] font-bold  absolute top-[30%] -left-[35%] md:top-[18%] md:left-[1%] lg:top-[22%] lg:left-[16%]  xl:top-[25%] xl:left-[20%] bg-gradient-to-r to-[#5c4a3c] from-[#c2bbb6] bg-clip-text text-transparent">
            ABOUT US
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              width={500}
              height={500}
              alt="vivek"
              src={AppAssets?.vivek}
              className="rounded-md md:rounded-full shadow-full w-88 h-88"
            />
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-darkMutedRed text-center pt-10 xl:w-1/2">
              <p>
                Established by kindred visionaries,{" "}
                <strong>Nihar and Akshay Pareek</strong>, Memoirs emerged from a
                desire to transform fleeting instances into soulful artefacts —
                artefacts that echo through time. With hearts attuned to nuance
                and eyes trained to observe the unseen, they sought to document
                not just what occurred, but what was felt.
              </p>

              <p>
                A wedding, in our eyes, is not a performance. It is a tapestry —
                woven with stolen glances, breathless laughter, trembling
                fingertips, and ancestral blessings that move through
                generations. We endeavor to capture these unspoken poetries that
                linger beneath the surface.
              </p>
            </div>
          </div>
          <section className=" py-8 md:px-10 lg:px-20  font-cormorant ">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-darkMutedRed text-center">
                <p>
                  Our craft embraces unobtrusive storytelling and emotive visual
                  composition. We navigate your celebration as quiet observers —
                  attentive, intuitive, invisible — ensuring that what unfolds
                  is honored, not orchestrated.
                </p>

                <p>
                  Though our roots lie deep within the vibrant soil of India,
                  our vision roams freely across continents. From the golden
                  silence of desert rituals to the breeze-kissed vows along
                  distant shores, we traverse geographies to witness affection
                  in all its forms.
                </p>

                <p>
                  Each union we document is treated as sacred — never
                  duplicated, never templated. Before the lens meets the light,
                  we immerse ourselves in your narrative, your heritage, your
                  rhythm. Because what we preserve is more than a ceremony — it
                  is the very essence of belonging.
                </p>

                <p className="font-semibold">
                  As petals fall and echoes fade, what remains are these
                  carefully captured whispers of wonder — keepsakes for the
                  heart, relics for the soul.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
