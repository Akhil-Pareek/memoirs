import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Slider from "../common/Slider";

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
];

export default function Testimonial() {
  return (
    <section
      className="bg-warmGray text-darkMutedRed pt-32  xl:pt-0 md:pb-10 relative"
      aria-labelledby="testimonial-heading"
    >
      {/* Decorative Leaf */}
      <Image
        src={AppAssets?.leave}
        width={500}
        height={500}
        alt=""
        role="presentation"
        className="w-52 top-[5%] right-0 absolute"
      />

      <div
        id="testimonial-heading"
        className="absolute space-y-3 top-[4%] left-[5%] md:left-[20%] xl:left-[10%] xl:top-[9%]"
      >
        <p className="text-sm 4xl:text-base font-semibold text-center xl:text-start">
          TESTIMONIALS
        </p>
        <h2 className="text-2xl lg:text-3xl 4xl:text-5xl text-center xl:text-start tracking-wide font-extrabold xl:leading-10 4xl:leading-16">
          Capturing Love : Your
          <span className="hidden xl:inline">
            <br />
          </span>
          Wedding Day Storyteller
        </h2>
      </div>

      <Slider
        autoplay
        loop
        dotColorInactive="#000"
        dotColorActive="#23B467"
      >
        {testimonials.map((item, index) => (
          <article
            key={index}
            className="flex flex-col-reverse md:flex-row justify-between w-[90%] md:w-[95%] xl:w-[80%] mx-auto "
            aria-label={`Testimonial from ${item.name}`}
          >
            {/* Feedback */}
            <div className="md:w-1/2 space-y-5 mb-5 4xl:mb-10 flex items-end ">
              <div className="bg-grayishBlue py-16 md:py-4 4xl:py-16   px-4 xl:px-6 space-y-5 lg:space-y-12 md:absolute lg:static md:w-[48%] lg:w-full h-fit">
                <blockquote className="text-xl 4xl:text-2xl tracking-wide xl:leading-7">
                  <p>{item.feedback}</p>
                </blockquote>
                <div className="flex items-center justify-between">
                  <p className="lg:text-lg 4xl:text-xl font-semibold ">{item?.name}</p>
                  <div
                    className="flex gap-1 text-yellow-400"
                    role="img"
                    aria-label={`Rated ${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-full md:rounded-none shadow-full translate-y-10 overflow-hidden w-1/2">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={`Wedding photo of ${item.name}`}
                className="w-full h-full md:border-t-5 md:border-r-5 border-white object-cover"
              />
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
