import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Banner from "./common/Banner";

export default function AboutUs() {
  return (
    <section aria-labelledby="about-heading">
      <Banner srcUrl={AppAssets?.aboutUsBanner} />

      <section className="overflow-hidden">
        {/* Intro Section */}
        <section
          className="py-10 xl:py-20 px-4 md:px-10 lg:px-20 font-cormorant bg-lightCream text-primaryGolden"
          aria-labelledby="about-intro"
        >
          <div className="max-w-5xl 4xl:max-w-7xl mx-auto text-center space-y-6">
            <p
              id="about-intro"
              className="uppercase tracking-widest text-xs 4xl:text-base text-darkMutedRed"
            >
              Crafting Timeless Testimonies of Love
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              More than imagery —
              <span className="block">we compose visual legacies</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg 4xl:text-2xl leading-relaxed text-darkMutedRed text-center">
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

        {/* About Founder Section */}
        <div className="font-cormorant bg-lightCream text-primaryGolden p-4 relative ">
          <h3
            className="pt-2 w-full text-[50px] md:text-[85px] lg:text-[135px] font-bold absolute -top-[3%] left-[16%] md:-top-[7%] md:left-[40%] lg:-top-[10%] lg:left-[30%] xl:-top-[15%] 4xl:-top-[11%] xl:left-[40%] md:bg-gradient-to-r to-[#5c4a3c] from-[#c2bbb6] bg-clip-text md:text-transparent"
          >
            ABOUT US
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10 md:py-0">
            <Image
              width={500}
              height={500}
              alt="Portrait of Vivek from Memoirs Photography"
              src={AppAssets?.vivek}
              className="rounded-md md:rounded-full shadow-full w-88 h-88"
            />

            <div className="space-y-6 text-base md:text-lg 4xl:text-2xl leading-relaxed text-darkMutedRed text-center md:pt-10 xl:w-1/2">
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

          {/* Storytelling Philosophy */}
          <section
            className="py-8 md:px-10 lg:px-20 font-cormorant"
            aria-labelledby="storytelling-heading"
          >
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h3
                id="storytelling-heading"
                className="sr-only"
              >
                Our Storytelling Philosophy
              </h3>
              <div className="space-y-6 text-base md:text-lg 4xl:text-2xl leading-relaxed text-darkMutedRed text-center">
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
