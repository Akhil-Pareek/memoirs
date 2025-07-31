import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Slider from "../common/Slider";

// Dummy data array
const testimonials = [
  {
    name: "ADELINE + MARVIN",
    date: "20th May, 2023",
    feedback:
      "Working with Annabel was an absolute pleasure. She made us feel comfortable and at ease during our photo shoot, resulting in beautiful and natural shots that we will treasure forever.",
    rating: 5,
    image: AppAssets?.couple,
  },
  {
    name: "EMILY + JOSH",
    date: "12th June, 2023",
    feedback:
      "Annabel captured every precious moment with such grace. Her photos tell a beautiful story of our wedding day.",
    rating: 4,
    image: AppAssets?.couple,
  },
  {
    name: "SOPHIA + LIAM",
    date: "3rd July, 2023",
    feedback:
      "Her attention to detail and artistic vision are unmatched. We’re so happy with how our photos turned out!",
    rating: 5,
    image: AppAssets?.couple,
  },
  {
    name: "ADELINE + MARVIN",
    date: "20th May, 2023",
    feedback:
      "Working with Annabel was an absolute pleasure. She made us feel comfortable and at ease during our photo shoot, resulting in beautiful and natural shots that we will treasure forever.",
    rating: 5,
    image: AppAssets?.couple,
  },
  {
    name: "EMILY + JOSH",
    date: "12th June, 2023",
    feedback:
      "Annabel captured every precious moment with such grace. Her photos tell a beautiful story of our wedding day.",
    rating: 4,
    image: AppAssets?.couple,
  },
  {
    name: "SOPHIA + LIAM",
    date: "3rd July, 2023",
    feedback:
      "Her attention to detail and artistic vision are unmatched. We’re so happy with how our photos turned out!",
    rating: 5,
    image: AppAssets?.couple,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-warmGray text-darkMutedRed pt-28 xl:pt-0 xl:pb-10 relative">
      <Image
        src={AppAssets?.leave}
        width={500}
        height={500}
        alt="leave image"
        className="w-52 top-[5%] right-0 absolute"
      />
      <div className="absolute space-y-3 top-[4%] left-[5%] xl:left-[10%] xl:top-[9%]">
        <p className="text-sm font-semibold text-center xl:text-start">
          TESTIMONIALS
        </p>
        <p className="text-2xl lg:text-3xl text-center xl:text-start tracking-wide font-extrabold xl::leading-16">
          Capturing Love : Your
          <span className="hidden xl:inline">
            <br />
          </span>
          Wedding Day Storyteller
        </p>
      </div>
      <Slider
        autoplay
        loop
        // breakpoints={{ md: 2, lg: 3, xl: 6 }}
        //   dots
        dotColorInactive="#000"
        dotColorActive="#23B467"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse xl:flex-row justify-between w-[90%] md:w-[95%] xl:w-[80%] mx-auto"
          >
            {/* Text Card */}
            <div className="md:w-1/2 space-y-5 mb-5 flex items-end ">
              <div className="bg-grayishBlue py-16 xl:py-4 px-4 xl:px-6 space-y-12  md:absolute lg:static md:w-[60%] lg:w-full h-fit">
                <p className="text-xl tracking-wide xl:leading-7">
                  {item.feedback}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="lg:text-lg font-semibold">{item.name}</p>
                    <p className="text-sm">{item.date}</p>
                  </div>
                  <p className="flex gap-1 text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Couple Image */}
            <div className="rounded-full xl:rounded-none shadow-full translate-y-10 overflow-hidden  w-1/2">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={`${item.name} image`}
                className="w-full h-full xl:border-5 border-white object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
