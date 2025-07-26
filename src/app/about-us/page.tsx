import Banner from "@/components/Banner";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Banner srcUrl={AppAssets?.aboutUsBanner} bannerLabel="About Us" />
      <section className="bg-[#f3eae4] text-[#5c4a3c] px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="md:hidden inline">
            <p className="tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Crafting Timeless Memories
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-2">
              Your Wedding,
            </h2>
            <h3 className="text-2xl sm:text-3xl font-handwritten italic mb-6">
              Our Passion
            </h3>
          </div>

          {/* Left Image */}
          <div className="w-full md:w-[40%] flex justify-center">
            <Image
              width={1000}
              height={1000}
              src={AppAssets?.aboutUs}
              alt="Vivek Krishnan"
              className="w-64 sm:w-72 md:w-full max-w-sm rounded-md shadow-md"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-[60%] text-center md:text-left px-2 sm:px-0">
            <div className="hidden md:inline">
              <p className="tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Crafting Timeless Memories
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-2">
                Your Wedding,
              </h2>
              <h3 className="text-2xl sm:text-3xl font-handwritten italic mb-6">
                Our Passion
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Hello! I'm Vivek Krishnan. As a passionate photographer, I am
              drawn to capturing authentic and unforgettable moments that I
              cherish in my life. So it’s no surprise that my current favourite
              project is to obsessively document everything my kids do.
            </p>

            <p className="text-sm sm:text-base leading-relaxed mb-4">
              My love for photography goes hand in hand with my passion for
              travelling and discovering new perspectives. Photography has
              always been more than just a profession for me— it’s a way to
              connect with people, tell their stories, and preserve the emotions
              and memories that make life beautiful.
            </p>

            <p className="text-sm sm:text-base leading-relaxed mb-0 sm:mb-6">
              When I'm not running Vivek Krishnan Photography, you'll likely
              find me with my nose in a philosophy book, seeking deeper
              understanding and new ways to see the world. This curiosity and
              love for knowledge influences my work in more ways than one,
              imbibing creativity and authenticity in my pictures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
